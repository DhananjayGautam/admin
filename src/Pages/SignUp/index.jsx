
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

const SignUp = () => {
    const [loadingGoogle, setLoadingGoogle] = React.useState(false);
    const [loadingfb, setLoadingfb] = React.useState(false);
    const [isPasswordShow, setisPasswordShow] = React.useState(false);



    function handleClickGoogle() {
        setLoadingGoogle(true);
    }
    function handleClickfb() {
        setLoadingfb(true);
    }

    return (
        <section className='bg-white w-full '>
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
                   Join us today! Get Special 
                   <br />benefits and stay up to date.
                </h1>

                <div className='flex items-center justify-center w-full mt-5 gap-2'>
                    <Button
                        size="small"
                        onClick={handleClickGoogle}
                        endIcon={<FcGoogle className='text-[30px]' />}
                        loading={loadingGoogle}
                        loadingPosition="end"
                        variant="outlined"
                        className='!bg-none  !py-2 text-[16px] px-5 !capitalize !text-[rgba(0,0,0,0.7)]'>
                        Sign In with Google
                    </Button>

                    <Button
                        size="small"
                        onClick={handleClickfb}
                        endIcon={<BsFacebook className='text-[30px]' />}
                        loading={loadingfb}
                        loadingPosition="end"
                        variant="outlined"
                        className='!bg-none !py-2 text-[16px] px-5 !capitalize !text-[rgba(0,0,0,0.7)]'>
                        Sign In with Facebook
                    </Button>
                </div>

                <br />
                <div className='w-full flex items-center justify-center gap-3 '>
                    <span className='flex items-center w-[100px] h-[2px] bg-[rgba(0,0,0,0.2)]'></span>
                    <span className='text-[15px] font-[500]'>Or, Sign in with your email</span>
                    <span className='flex items-center w-[100px] h-[2px] bg-[rgba(0,0,0,0.2)]'></span>



                </div>
                <br />

                <form className='w-full px-8 mt-3'>
                    <div className='form-group mb-4 w-full'>
                        <h4 className='text-[14px] font-[500] mb-1'>Email</h4>
                        <input type="email" className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3' />
                         

                    </div>
                    <div className='form-group mb-4 w-full'>
                        <h4 className='text-[14px] font-[500] mb-1'>Full Name</h4>
                        <input type="text" className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3' />
                         

                    </div>
                    <div className='form-group mb-4 w-full'>
                        <h4 className='text-[14px] font-[500] mb-1'>Password</h4>
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


                    </div>
                    <div className='form-group mb-4 w-full flex items-center justify-between'>
                          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />  

                          <Link className='text-primary font-[700] hover:underline hover:text-grey-700' to={"forgot-password"}>
                            Forgot Password?
                          </Link>

                    </div>
                    <Button className='btn-blue btn-lg w-full'>
                        Sign Up
                    </Button>
                </form>
            </div>

        </section>
    )
}

export default SignUp