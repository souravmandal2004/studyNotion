import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from 'react'
import SignupImage from "../assets/signupImage.png";
import Template from '../Components/Template';

function SignUp({setIsLoggedIn}) {
    return (
        <Template 
            title="Join the millions learning code with StudyNotion for free."
            desc1="Build skilld for today, tommorrow and beyond."
            desc2="Education to future-proof your career"
            image="https://codehelp-router-project.netlify.app/static/media/signup.b431d919de01b6515dd6.png"
            formType="signup"
            setIsLoggedIn={setIsLoggedIn}
        />
    )
}


export default SignUp