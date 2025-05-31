import * as React from 'react';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Components/Header'
import SidebarOpen from './Components/SidebarOpen/DashboardOpen'
import ProductOpen from './Components/SidebarOpen/ProductOpen'
import HomeSliderBannersOpen from './Components/SidebarOpen/HomeSliderBannersOpen'
import CategoryOpen from './Components/SidebarOpen/categoryOpen'
import SubCatOpen from './Components/SidebarOpen/subCatOpen'
import UsersOpen from './Components/SidebarOpen/usersOpen'
import OrdersOpen from './Components/SidebarOpen/ordersOpen'
import VerifyAccount from './Pages/VerifyAccount';




import AddProduct from './Pages/Products/AddProduct'


import { createContext, useContext, useState } from 'react'
import MyContext from './MyContex'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoClose } from "react-icons/io5";
import Slide from '@mui/material/Slide';
import AddHomeSlide from './Pages/HomeSliderBanners/AddHomeSlide';
import AddCategory from './Pages/Category/addCategory';
import AddSubCategory from './Pages/Category/addSubCategory';
import ForgotPassword from './Pages/ForgotPassword';
import ChangePassword from './Pages/ChangePassword';






const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {

  const [isSidebarOpen, setisSidebarOpen] = useState(true)
  const [isLogin, setIsLogin] = useState(false)
  const [isOpenFullScreenPanel,setIsOpenFullScreenPanel ] = useState(true)

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const values = {
    isSidebarOpen,
    setisSidebarOpen,
    isLogin,
    setIsLogin,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel
  }
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex '>
             <SidebarOpen></SidebarOpen>

            </div>
          </section>
        </>

      )
    },
    {
      path: "/Login",
      exact: true,
      element: (
        <>
          <Login></Login>
        </>

      )
    },
    {
      path: "/sign-up",
      exact: true,
      element: (
        <>
          <SignUp/>
        </>

      )
    },
    {
      path: "/products",
      exact: true,
      element: (
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex '>
             <ProductOpen/>

            </div>
          </section>
        </>

      )},
    {
      path: "/homeSlider/List",
      exact: true,
      element: (
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex '>
             <HomeSliderBannersOpen/>

            </div>
          </section>
        </>

      )},
       {
      path: "/category/List",
      exact: true,
      element: (
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex '>
             <CategoryOpen/>

            </div>
          </section>
        </>

      )},
       {
      path: "/subCategory/List",
      exact: true,
      element: (
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex '>
             <SubCatOpen/>

            </div>
          </section>
        </>

      )},
       {
      path: "/users",
      exact: true,
      element: (
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex '>
             <UsersOpen/>

            </div>
          </section>
        </>

      )},
      {
      path: "/orders",
      exact: true,
      element: (
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex '>
             <OrdersOpen/>

            </div>
          </section>
        </>

      )},
      {
      path: "/forgot-password",
      exact: true,
      element: (
        <>
          <ForgotPassword/>
        </>

      )
    },
    {
      path: "/verify-account",
      exact: true,
      element: (
        <>
          <VerifyAccount/>
        </>

      )
    },
      {
      path: "/change-password",
      exact: true,
      element: (
        <>
          <ChangePassword/>
        </>

      )
    },
      
    
  ])


  return (
    <>
      <MyContext.Provider value={values} >
        <RouterProvider router={router} />



          <Dialog
        fullScreen
        open={isOpenFullScreenPanel.open}
        onClose={()=>setIsOpenFullScreenPanel({
          open:false,
           
        })}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={()=>setIsOpenFullScreenPanel({
          open:false,
           
        })}
              aria-label="close"
            >
              <IoClose className='text-gray-800'/>
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
             <span className='text-gray-800'> {isOpenFullScreenPanel?.model}</span>
            </Typography>
           
          </Toolbar>
        </AppBar>
         {
          isOpenFullScreenPanel?.model === "Add Product" && <AddProduct/>
         }
          {
          isOpenFullScreenPanel?.model === "Add Home Slide" && <AddHomeSlide/>
         }
         {
          isOpenFullScreenPanel?.model === "Add New Category" && <AddCategory/>
         }
           {
          isOpenFullScreenPanel?.model === "Add New Sub Category" && <AddSubCategory/>
         }
        
      </Dialog>


      </MyContext.Provider>

    </>
  )
}

export default App

