
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdLogin } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Button from '@mui/material/Button';

const ForgotPassword = () => {


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
            <img src="/Login Background.jpg" className='w-full h-full fixed top-0 left-0 opacity-5' />


            <div className='loginBox card w-[600px] h-auto pb-20 mx-auto pt-20  relative z-50 '>
                <div className='text-center'> 
                    <img src="/logo6.png" className='m-auto w-[200px]' />

                </div>
                <h1 className='text-center text-[35px] font-[800] mt-4'>
                    Having trouble to sign in ? <br />
                    Reset Your Password
                </h1>



                <form className='w-full px-8 mt-3'>
                    <div className='form-group mb-4 w-full'>
                        <h4 className='text-[14px] font-[500] mb-1'>Email</h4>
                        <input type="email" placeholder='Enter Your Email' className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3' />
                    </div>

                    <Button className='btn-blue btn-lg w-full'>
                        Reset Password
                    </Button>
                    <br />
                    
                    <div className='gap-4 text-center flex items-center justify-center'>
                        <span> Dont Want To Reset? </span>

                        <Link className='text-[#3872fa] font-[700] hover:underline hover:text-grey-700' to={"/login"}>
                            Sign in
                        </Link>

                    </div>
                </form>
            </div>

        </section>
    )
}

export default ForgotPassword