import React from 'react'
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function LoginForm({setIsLoggedIn}) {

    const navigate = useNavigate ();

    const [showPassword, setShowPassword] = useState (false);

    const [formData, setFormData] = useState ({
        email: "",
        password: "",
    });

    function changeHandler (event) {
        setFormData ((prevData) => (
            {
                ...prevData,
                [event.target.name]: [event.target.value],
            }
        ))
    }

    function submitHandler (event) {
        event.preventDefault ();
        setIsLoggedIn (true);
        toast.success ("Logged In");
        console.log ("Printing the form data: ");
        console.log (formData);
        navigate ("/dashboard");

    }

  return (

    <form 
        onSubmit={submitHandler}
        className='flex flex-col w-full gap-y-4 mt-4'
    >

        <label className='w-full'>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup> </p>

            <input 
            type="email"
            required
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter Email Address'
            name='email'
            className='bg-[#000814] rounded-[0.5rem] text-white w-full p-[12px] border'
            />

        </label>


        <label className='w-full relative'>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup> </p>

            <input 
            type={showPassword ? ("text") : ("password")}
            required
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter password'
            name='password'
            className='bg-[#000814] rounded-[0.5rem] text-white w-full p-[12px] border'
            />

            <span
                className='absolute right-3 top-[38px] cursor-pointer ' 
                onClick={ () => setShowPassword ( (prev) => !prev)}>
                {showPassword ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 ml-auto max-w-max'>Forgot Password</p>
            </Link>

        </label>


        <button className='bg-yellow-300 mt-6 rounded-[8px] font-medium text-black px-[12px] py-[8px]'>Sign In</button>
        
    </form>
  )
}

export default LoginForm