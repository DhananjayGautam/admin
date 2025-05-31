
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

import { RxDashboard } from "react-icons/rx";
import { FaRegImage } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiProductHuntLine } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

import { Collapse } from 'react-collapse';
import MyContext from '../../MyContex';



const Sidebar = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null)
  const isOpenSubMenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null)
    } else {
      setSubmenuIndex(index)
    }
  }
    const context = useContext(MyContext);
  console.log(context.isSidebarOpen )
  return (
    <div className={`sidebar fixed top-0 left-0 bg-[#fff] h-full border-7 border-[rgba(0,0,0,0.1)] px-4 py-2 ${context.isSidebarOpen===true?'w-[18%]':'w-[0px]'}`}>
      <div className='py-2 w-full'>
        <Link to="/" >
          <img src="/logo6.png" alt='logo' className='w-[150px]' />
        </Link>

      </div>

      <ul className='mt-4'>
        <li>
          <Link to={"/"}>
          <Button className='w-full !capitalize items-center !justify-start flex gap-3 font-[500] text-[14px] !text-[rgba(0,0,0,0.8)] !py-2 hover:!bg-[#f1f1f1]'>
            <RxDashboard className='text-[18px]' /><span> Dashboard</span>
          </Button>
          
          </Link>
        </li>

        <li>
          <Link to={"/"}>
          <Button className='w-full !capitalize items-center !justify-start flex gap-3 font-[500] text-[14px] !text-[rgba(0,0,0,0.8)] !py-2 hover:!bg-[#f1f1f1]' onClick={() => { isOpenSubMenu(1) }}>
            <FaRegImage className='text-[18px]' /><span> Home Slides</span>
            <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center' ><FaAngleDown className={`transition-all ${submenuIndex === 1 ? 'rotate-180' : ''} `} /></span>
          </Button>
          </Link>

          <Collapse isOpened={submenuIndex === 1 ? true : false}>
            <ul className='w-full '>
              <Link to={"/"}>
              <li className='w-full '><Button className='!text-[rgba(0,0,0,0.6)] !capitalize !justify-start !w-full !text-[13px] font-[500] !pl-9 flex gap-3'>
                <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] ' ></span> Home Banner List</Button></li>
                </Link>

              <Link to={"/products"}>
              <li className='w-full '><Button className='!text-[rgba(0,0,0,0.6)] !capitalize !justify-start !w-full !text-[13px] font-[500] !pl-9 flex gap-3'>
                <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] ' ></span>Add Home Banner Slides</Button></li>
              </Link>

            </ul>
          </Collapse>

        </li>
        <li><Link to={"/users"}>
          <Button className='w-full !capitalize items-center !justify-start flex gap-3 font-[500] text-[14px] !text-[rgba(0,0,0,0.8)] !py-2 hover:!bg-[#f1f1f1]'>
            <FiUsers className='text-[18px]' /><span> Users </span>

          </Button>
          </Link>
        </li>
        <li>
          
          <Button className='w-full !capitalize items-center !justify-start flex gap-3 font-[500] text-[14px] !text-[rgba(0,0,0,0.8)] !py-2 hover:!bg-[#f1f1f1]' onClick={() => { isOpenSubMenu(3) }}>
            <RiProductHuntLine className='text-[18px]' />
            <span> Products</span>
            <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center' >
              <FaAngleDown className={`transition-all ${submenuIndex === 3 ? 'rotate-180' : ''} `} />
            </span>
          </Button>

          <Collapse isOpened={submenuIndex === 3 ? true : false}>
            <ul className='w-full '>
              


              <li className='w-full '>
                <Link to={"/products"}>
                <Button className='!text-[rgba(0,0,0,0.6)] !capitalize !justify-start !w-full !text-[13px] font-[500] !pl-9 flex gap-3'>
                  <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] ' ></span>Product List
                  </Button>
              </Link>

              </li>

              <li className='w-full '>


                <Button className='!text-[rgba(0,0,0,0.6)] !capitalize !justify-start !w-full !text-[13px] font-[500] !pl-9 flex gap-3' onClick={()=>context.setIsOpenFullScreenPanel({
                  open: true,
                  model:"Add Product"
                })}>
                  <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] ' ></span> Product Upload 
                </Button>
    

              </li>


            </ul>
          </Collapse>

        </li>
        <li>
          <Button className='w-full !capitalize items-center !justify-start flex gap-3 font-[500] text-[14px] !text-[rgba(0,0,0,0.8)] !py-2 hover:!bg-[#f1f1f1]' onClick={() => { isOpenSubMenu(4) }}>
            <TbCategory className='text-[18px]' />
            <span> Category</span>
            <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center' >
              <FaAngleDown className={`transition-all ${submenuIndex === 4 ? 'rotate-180' : ''} `} />
            </span>
          </Button>

          <Collapse isOpened={submenuIndex === 4 ? true : false}>
            <ul className='w-full '>
              <li className='w-full '>
              <Link to={"/category/list"}>

                <Button className='!text-[rgba(0,0,0,0.6)] !capitalize !justify-start !w-full !text-[13px] font-[500] !pl-9 flex gap-3'>
                  <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] ' ></span>Category List
                </Button>
              </Link>

              </li>

              <li className='w-full '>
        

                <Button className='!text-[rgba(0,0,0,0.6)] !capitalize !justify-start !w-full !text-[13px] font-[500] !pl-9 flex gap-3' onClick={()=>{context.setIsOpenFullScreenPanel({
              open: true,
              model: 'Add New Category'
             })}}>
                  <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] ' ></span>Add a Category
                </Button>
            

              </li>
              <li className='w-full '>
              <Link to={"/subCategory/List"}>

                <Button className='!text-[rgba(0,0,0,0.6)] !capitalize !justify-start !w-full !text-[13px] font-[500] !pl-9 flex gap-3' >
                  <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] ' ></span>Sub Category List
                </Button>
              </Link>

              </li>
              <li className='w-full '>
              

                <Button className='!text-[rgba(0,0,0,0.6)] !capitalize !justify-start !w-full !text-[13px] font-[500] !pl-9 flex gap-3' onClick={()=>{context.setIsOpenFullScreenPanel({
              open: true,
              model: 'Add New Sub Category'
             })}}>
                  <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] ' ></span>Add a Sub Category
                </Button>
              

              </li>
            </ul>
          </Collapse>

        </li>
        <li>
              <Link to={"/orders"}>

          <Button className='w-full !capitalize items-center !justify-start flex gap-3 font-[500] text-[14px] !text-[rgba(0,0,0,0.8)] !py-2 hover:!bg-[#f1f1f1]'>
            <IoBagCheckOutline className='text-[20px]' />
            <span> Orders</span>
          </Button>
              </Link >

        </li>

        <li>
          <Link to={"/Login"}>
          <Button className='w-full !capitalize items-center !justify-start flex gap-3 font-[500] text-[14px] !text-[rgba(0,0,0,0.8)] !py-2 hover:!bg-[#f1f1f1]'>
            <MdLogout className='text-[20px]' />
            <span> Log Out</span>
          </Button>
          </Link>
        </li>
      </ul>

    </div>
  )
}

export default Sidebar