
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdLogin } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Button from '@mui/material/Button';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ChangePassword = () => {
    
    const [isPasswordShow, setisPasswordShow] = React.useState(false);
    const [isPasswordShow2, setisPasswordShow2] = React.useState(false);






    return (
     <section className='bg-white w-full min-h-screen relative'>
        
            <header className='w-full fixed top-0 left-0  px-4 py-3 flex items-center justify-between z-50'>
                <Link to="/">
                    <img src="/logo6.png" className='w-[200px]' />
                </Link>
                <div className='flex items-center gap-0 '>
                    <NavLink to={"/Login"} exact={true} activeClassName="isActive">
                        <Button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1'>
                            <MdLogin className='text-[18px]' />
                            Login
                        </Button>
                    </NavLink >
                    <NavLink to={"/sign-up"} exact={true} activeClassName="isActive">
                    <Button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1'>
                        <FaRegUser className='text-[15px]' />
                        Sign Up
                    </Button>
                    </NavLink>


                </div>
            </header>
            <img src="/Login Background.jpg" className='w-full fixed top-0 left-0 opacity-5' />

            <div className='loginBox card w-[600px] h-auto pb-20 mx-auto pt-20  relative z-50 '>
                <div className='text-center'>
                    <img src="/logo6.png" className='m-auto w-[200px]' />

                </div>
                <h1 className='text-center text-[35px] font-[800] mt-4'>
                    Welcome Back! <br />
                    <span className=''> You can change your password from here .</span>
                </h1>

                <form className='w-full px-8 mt-3'>
                  
                    <div className='form-group mb-4 w-full'>
                        <h4 className='text-[14px] font-[500] mb-1'>New Password</h4>
                        <div className='relative w-full'>
                        <input type={`${isPasswordShow===true?'password':'text'}`} className='w-full h-[50px] border border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3' />
                        <Button className='!absolute top-[7px] right-[10px] z-50 rounded-full !w-[35px] !h-[35px] !min-w-[35px] !text-gray-600' onClick={()=>setisPasswordShow(!isPasswordShow)}>

                            {
                                isPasswordShow === true?
                                <IoMdEye className='!text-[18px]'/>:
                                <IoMdEyeOff className='!text-[18px]'/>

                            }
                            
                        </Button>


                        </div>
                        <br />


                    </div>
                    <div className='form-group mb-4 w-full'>
                        <h4 className='text-[14px] font-[500] mb-1'>Confirm Password</h4>
                        <div className='relative w-full'>
                        <input type={`${isPasswordShow2===true?'password':'text'}`} className='w-full h-[50px] border border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3' />
                        <Button className='!absolute top-[7px] right-[10px] z-50 rounded-full !w-[35px] !h-[35px] !min-w-[35px] !text-gray-600' onClick={()=>setisPasswordShow2(!isPasswordShow2)}>

                            {
                                isPasswordShow2 === true?
                                <IoMdEye className='!text-[18px]'/>:
                                <IoMdEyeOff className='!text-[18px]'/>

                            }
                            
                        </Button>


                        </div>
                        <br />


                    </div>
                    
                    <Button className='btn-blue btn-lg w-full'>
                        Change Password
                    </Button>
                </form>
            </div>

        </section>
    )
}

export default ChangePassword