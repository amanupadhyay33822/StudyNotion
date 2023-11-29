const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mailSender = require("../utils/mailSender");
const Profile = require("../models/Profile");


//sendOTP
exports.sendOTP = async (req,res) => {
    try {
           //fetch email from req body
            const {email}= req.body;
           //check if user already exists
           const checkUserPresent = await User.findOne({email: email});

           if(checkUserPresent){
            return res.status(401).json({
                sucess:false,
                message:"User already exists"
            })
           }
           //generate otp
              var otp = otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
              })
              console.log("otp generated",otp);

              //check otp untill i get unique otp  
              let result = await OTP.findOne({ otp});
             
              while(result){
               
                otp = otpGenerator.generate(6,{
                    upperCaseAlphabets:false,
                    lowerCaseAlphabets:false,
                    specialChars:false,
                  })
                  //recheck otp
                  const result = await OTP.findOne({otp: otp});
                 
              }
            //   console.log(result + " resultss")
              const otpPayload = {email,otp};

            


           //store otp in db (by creting a otp obj like in otp schema)
            const otpBody = await OTP.create(otpPayload);
           

           //return res
           res.status(200).json({
            sucess: true,
            message:"OTP sent successfully ",
            otp
           })

    } catch (error) {
        console.error(error);
        res.status(400).json({
            sucess: false,
            message:error.message,
            
           })
    }
}
//signUp

exports.signUp = async (req,res) => {
    try {
        //fetch data from req body
     const {firstName,
    lastName,
    email,
    password,
    confirmPassword,
    accountType,
    contactNumber,
    otp
     }=req.body
        //validate data
        if(!firstName || !lastName || !email || !password || !otp  || !contactNumber || !confirmPassword)
        {
            return res.status(401).json({
                sucess: false,
                message: "all fields are required"
            })

        } 

        // match both password
        if(password !==confirmPassword){
            return res.status(401).json({
                sucess: false,
                message: "Passwords do not match"
            })
        }
        // check user is alredy exist or not
        const checkUserPresent = await User.findOne({email: email});

        if(checkUserPresent){
         return res.status(401).json({
             sucess:false,
             message:"User already exists"
         })
        } 
        //find most recent otp from db
        const recentOtp = await OTP.find({email}).sort({createdAt:-1}).limit(1);
        
           console.log(recentOtp[0].otp !==otp)
        //validate otp(match)
        if(recentOtp[0].otp.length == 0){
            return res.status(401).json({
                sucess:false,
                message:"otp not found"
            })
        }else if(recentOtp[0].otp !== otp){
            return res.status(401).json({
                sucess:false,
                message:"Invalid otp",
            })
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);
           

        //create entry in db 
        const profileDetails = await Profile.create({
            gender:null,
            dateOfBirth:null,
            about:null,
            profession:null,
        })   

        const user = await User.create({
            firstName,
    lastName,
    email,
    password:hashedPassword,
    contactNumber,
    accountType,
    additionalDetails:profileDetails._id,
    image:null,



        })

        //return res
        return res.status(200).json({
            sucess:true,
            message:"user created successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            sucess: false,
            message:error.message,
            
           })
    }
}

//Login

exports.login = async (req, res) => {
    try {
        //fetch data from req body
        const {email,password} = req.body;

        //validate data
        if(!email || !password){
            return res.status(401).json({
                sucess: false,
                message: "all fields are required"
            })
        }
        // check user exist or not
        const user = await User.findOne({email: email});

        if(!user){
         return res.status(401).json({
             sucess:false,
             message:"User not exist . register first"
         })
        }
        //match password and generate jwt token 
        if(await bcrypt.compare(password,user.password)){
            const payload = {
                email: user.email,
                id: user._id,
                role: user.accountType
            }
       const token = jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:"5h"
       })
       user.token=token;
       user.password=password;
       const options = {
        expires:new Date(Date.now() + 3*24*60*60*1000),
        httpOnly: true
       }
       res.cookie("token",token,options).status(200).json({
        sucess:true,
        token,
        user,
        message:"user login successfully"
       })
        }
        else{
            return res.status(401).json({
                sucess:false,
                message:"Password is incorrect"
            })
        }
      
    } catch (error) {
        return res.status(401).json({
            sucess:false,
            message:error.message,
        })
    }
}

//changePassword

exports.chnagePassword = async (req,res) => {
    try {
        //fetch data from req body
        const {email,oldPassword,newPassword,confirmPassword} = req.body;
        //get old password ,new password, confirm new password
         
        //validation
        if(!oldPassword || !newPassword || !confirmPassword || !email){
            return res.status(401).json({
                sucess:false,
                message:"All fields are required",
            })
        }
        if(newPassword !== confirmPassword){
            return res.status(401).json({
                sucess:false,
                message:"Password does not match",
            })
        }
        //update pwd in db
        const user = await User.findOneAndUpdate({email},{password:newPassword},{new:true});
          mailSender(email,"password updated",user);
        
        //send mail - password updated
        
    } catch (error) {
        return res.status(401).json({
            sucess:false,
            message:error.message,
        })
    }
}

