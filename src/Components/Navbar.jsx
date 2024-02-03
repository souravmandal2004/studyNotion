import React from 'react'
import {Link} from "react-router-dom";
import logo from '../assets/logo.svg';
import toast from 'react-hot-toast';

function Navbar(props) {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/">
            <img src={logo} alt="logo of studyNotion" width={160} height={32} loading='lazy'/>
        </Link>

        <nav>
            <ul className='flex text-white gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login - Signup - Logout - Dashbord */}

        <div className='flex items-center gap-x-4 '>
            { !isLoggedIn &&
                <Link to="/login"><button className='bg-[#161D29] text-white py-[8px] px-[12px] rounded-[8px] border border-[rgb(44,51,63)]'>Log in</button></Link>
            }
            { !isLoggedIn &&
                <Link to="/signup"><button className='bg-[#161D29] text-white py-[8px] px-[12px] rounded-[8px] border border-[rgb(44,51,63)]'>Sign up</button></Link>
            }
            {  isLoggedIn &&
                <Link to="/"><button className='bg-[#161D29] text-white py-[8px] px-[12px] rounded-[8px] border border-[rgb(44,51,63)]' onClick={ () => {
                    setIsLoggedIn (false);
                    toast.success ("Logged Out");
                }}>Log out</button></Link>
            }
            {   isLoggedIn &&
                <Link to="/dashboard"><button className='bg-[#161D29] text-white py-[8px] px-[12px] rounded-[8px] border border-[rgb(44,51,63)]'>DashBoard</button></Link>
            }
        </div>


    </div>
  )
}

export default Navbar