import React from 'react'
import loginImage from "../assets/loginImage.png";
import Template from '../Components/Template';


function LogIn({setIsLoggedIn}) {


  return (
    <Template 
        title="Welcome Back"
        desc1="Build skills for today, tommorrow and beyond."
        desc2="Education to future-proof your career."
        image="https://codehelp-router-project.netlify.app/static/media/login.4d877a447365e5137b67.png"
        formType="login"
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default LogIn