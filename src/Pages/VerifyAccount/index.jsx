
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdLogin } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Button from '@mui/material/Button';
import OtpBox from '../../Components/OtpBox'


const VerifyAccount = () => {
     const [otp, setOtp] = React.useState('')
        const handleOtpChange = (value) => {
            setOtp(value)
        }
        const verifyOTP = (e) =>{
            e.preventDefault()
            alert(otp)
        }


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
                     <img src="security.png" className='w-[100px] m-auto' />
                </div>
                <h1 className='text-center text-[35px] font-[800] mt-4'>
                    Welcome Back! <br />
                    <span className=''>Please verify your Email.</span>
                </h1>
                <br />

                <p className='text-center text-[15px]'>OTP send to &nbsp; <span className='text-[#3872fa] font-bold'>dhananjay.gautam266@gmail.com</span></p>
                <br />

                <div className='text-center flex items-center justify-center flex-col'>
                    <OtpBox length={6} onChange={handleOtpChange}/>
                   

                </div>
                <br />
                <div className='w-[300px] m-auto'>
                            <Button type='submit' className='btn-blue w-full '> Verify Otp</Button>

                        </div>

            </div>

        </section>
    )
}

export default VerifyAccount