import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function SignupForm({setIsLoggedIn}) {

    const navigate = useNavigate ();
    const [showPassword, setShowPassword] = useState (false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState ("student")

    const [formData, setFormData] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    function changeHandler (event) {
        setFormData ((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value,
            }
        ))
    }
    
    function submitHandler (event) {
        event.preventDefault ();
        
        if (formData.password != formData.confirmPassword) {
            toast.error ("Password doesn't match");
            return;
        }
        setIsLoggedIn (true);
        toast.success ("Account created");
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }

        console.log ("Printing final account data: ");
        console.log (finalData);


        navigate ("/dashboard");
    }


  return (
    <div>
        {/* Student-Instructor tab */}


        <div className='flex flex-row rounded-full w-max pointer-cursor bg-[#161D29] p-1 my-6 gap-x-1 max-w-max'>

            <button 
                className={`${accountType === "student" ?
                    "text-white bg-black" :
                    "bg-transparent text-gray-600"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={ () => setAccountType ("student")}
                >
                Student
            </button>

            
            <button
                onClick={ () => setAccountType ("instructor")}
                className={`${accountType === "instructor" ?
                    "text-white bg-black" :
                    "bg-transparent text-gray-600"} py-2 px-5 rounded-full transition-all duration-200`}
            >
                Instructor
            </button>
        </div>

        <form action="" onSubmit={submitHandler}>

            {/* Div for firstName and lastName only */}

            <div className='flex gap-x-5 mt-4'>

                <label htmlFor="">
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>First name<sup className='text-pink-200'>*</sup></p>

                    <input 
                        type="text"
                        required
                        name='firstName'
                        onChange={changeHandler}
                        placeholder='Enter first name'
                        value={formData.firstName}
                        className='bg-[#000814] rounded-[0.5rem] text-white w-full p-[12px] border'
                    />
                </label>

                <label htmlFor="">
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Last name<sup className='text-pink-200'>*</sup></p>

                    <input 
                        type="text"
                        required
                        name='lastName'
                        onChange={changeHandler}
                        placeholder='Enter last name'
                        value={formData.lastName}
                        className='bg-[#000814] rounded-[0.5rem] text-white w-full p-[12px] border'
                    />
                </label>

            </div>
            

            {/* Email Address */}
            <div className='mt-[20px]'>
                <label className='w-full mt-4'>
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
            </div>

            {/* create password and confirm password */}

            <div className='flex gap-x-5 mt-[20px]'>
                <label htmlFor="" className='relative'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>

                    <input 
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandler}
                        value={formData.password}
                        placeholder='create password'
                        className='bg-[#000814] rounded-[0.5rem] text-white w-full p-[12px] border'
                        />

                        <span 
                            className='absolute left-[11rem] bottom-3 cursor-pointer' 
                            onClick={ () => setShowPassword ( (prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                </label>


                <label className='relative'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>

                    <input 
                        required
                        type={showConfirmPassword ? ("text") : ("password")}
                        name='confirmPassword'
                        onChange={changeHandler}
                        value={formData.confirmPassword}
                        placeholder='confirm password'
                        className='bg-[#000814] rounded-[0.5rem] text-white w-full p-[12px] border'
                        />

                    <span 
                        className='absolute  right-4 bottom-3 cursor-pointer ' 
                        onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/> : <AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
                    </span>
                </label>
            </div>

            {/* button for create account */}
            <button className='bg-yellow-300 mt-6 rounded-[8px] font-medium text-black px-[12px] py-[8px] w-full'>Create Account</button>

        </form>
    </div>
  )
}

export default SignupForm;