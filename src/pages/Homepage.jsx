import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/core/HomePage/Button"
import HighlightText from "../components/core/HomePage/HighlightText";
import Banner from "../assets/Images/banner.mp4"
import CodeBlock from "../components/core/HomePage/CodeBlocks"
const Homepage = () => {
  return (
    <div>
      {/* section-1 (blue) */}
      <div
        className="relative mx-auto text-white w-11/12 flex flex-col  
      items-center justify-between group"
      >
        <Link to="/signup">
          {/* first div for button part and second div for text and arrow */}
          <div
            className=" group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit"
          >
            <div
              className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900"
            >
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="mt-7 text-center font-semibold text-4xl">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className=" mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
         {/* for 2 button */}
         <div className="flex gap-7 mt-5">
         <Button active={true} linkto="/signup">Learn More</Button>
       <Button active={false} linkto="/login">Book a Demo</Button>
         </div>
       
          <div className="shadow-blue-200 mx-3 my-14">
            <video
             muted
             autoPlay
             loop
            >
             <source src={Banner}></source>
            </video>
          </div>
           {/* Code Section 1 */}
          <div>
          <CodeBlock 
                position={"lg:flex-row"}
                // done by aman randi ka
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your
                        <HighlightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                codeColor={"text-yellow-25"}
            />
        </div>
         {/* Code Section 2 */}
      </div>

      {/* section-2 (white) */}
      {/* section-3 (blue) */}
      {/* section-4 (footer) */}
    </div>
  );
};

export default Homepage;
