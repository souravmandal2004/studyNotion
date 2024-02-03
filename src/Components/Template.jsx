import React from 'react'
import frameImage from "../assets/background.png";
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from "react-icons/fc"

function Template( {title, desc1, desc2, image, formType, setIsLoggedIn} ) {
  return (
    <div className='max-w-[1160px] flex w-11/12 mx-auto py-12 gap-x-52 justify-between '>
        <div className='w-11/12 max-w-[450px]'>
            <h2 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h2>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-[#AFB2BF]'>{desc1}</span>
                <br />
                <span className='text-[#47A5C5] italic'>{desc2}</span>
            </p>

            {formType === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex flex-row w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-[#2C333F]'></div>
                <p 
                    className='text-white font-medium leading-[1.375rem]'>
                    OR
                </p>
                <div className='w-full h-[1px] bg-[#2C333F]'></div>
            </div>
            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-[#AFB2BF] border border-[#2C333F] px-[12px] py-[8px] gap-x-2 mt-6'>

                <FcGoogle />
                <p>Sign Up with Google</p>
            </button>
        </div>

        <div className='relative w-11/12 max-w-[450px] mx-auto'>
            <img 
                src="https://codehelp-router-project.netlify.app/static/media/frame.3a238e5f26d676376e1d.png" 
                alt="Image" 
                width={558} 
                height={504} 
                loading="lazy"
                
                />

            <img 
                src={image} 
                alt="Students" 
                width={558} 
                height={490} 
                loading='lazy'
                className='absolute -top-4 right-4'
                />
        </div>
    </div>
  )
}

export default Template