const mailSender = require("../utils/mailSender");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

//resetPasswordToken
exports.resetPasswordToken = async (req,res) => {
    try {

        //get email from req body
        const {email }= req.body;
        //validate email ansd user
        if(!email){
          return res.status(400).json({
                sucess: false,
                message:"enter email address",
                
               }) 
        }
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(400).json({
                sucess: false,
                message:"email not found- register first",
                
               }) 
        }

        //generate token
        const token = crypto.randomUUID();
        //update user by adding token and expiration time
        const updatedUser = await User.findOneAndUpdate({email: email},
                { token: token,
                    resetPasswordExpires:Date.now() + 5*60*1000,
                },{new: true})
        //create url
        const url = `https://localhost:3000/update-password?token/${token}`;
        //send mail containing url
        await mailSender(email,
               "Password reset Link",
               `password reset link ${url}`
            )
        //return response 
        res.status(200).json({
            sucess: true,
            message:"Email sent successfully for reset password",
            
           })
    } catch (error) {
        res.status(400).json({
            sucess: false,
            message:error.message,
            
           })
    }
}

//resetPassword
exports.resetPasword = async (req,res) => {
    try {
        //data fetch
        const {email, password,confirmPassword,token} = req.body; 
        //validation
        if(password !== confirmPassword){
           return res.status(400).json({
                sucess: false,
                message:"incorrect password",
                
               })
        }
        //get userdetails from db using token
        console.log(token)
        const user = await User.findOne({token:token});
        //if no entry - invalid token
        if(!user){
            return res.status(400).json({
                sucess: false,
                message:"invalid token",
                
               })
        }
        //token time check
        if(user.resetPasswordExpires < Date.now()){
            return res.status(400).json({
                sucess: false,
                message:"token expires",
                
               })
        }
        //hash pwd
        const hashedPassword = await bcrypt.hash(password, 10);
        //password update
        await User.findOneAndUpdate({token:token},
            {password:hashedPassword},
            {new:true})
        //return res
        return  res.status(400).json({
            sucess: true,
            message:"reset password done",
            
           })
    } catch (error) {
        res.status(400).json({
            sucess: false,
            message:error.message,
            
           })
    }
}