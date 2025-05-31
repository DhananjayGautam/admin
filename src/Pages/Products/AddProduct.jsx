import React, { useState } from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoCloseSharp } from "react-icons/io5";
import UploadBox from '../../Components/UploadBox';
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from "react-icons/fa";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';


const AddProduct = () => {
  const [productCat, setProductCat] = useState('');
  const [productSubCat, setProductSubCat] = useState('');
  const [productFeatured, setProductFeatured] = useState('');
  const [productRams, setProductRams] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [productSize, setProductSize] = useState('');






  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };
  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
  };
  const handleChangeProductFeatured = (event) => {
    setProductFeatured(event.target.value);
  };
  const handleChangeProductRams = (event) => {
    setProductRams(event.target.value);
  };
  const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };
  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };
  return (
    <section className='p-5 bg-gray-50'>

      <form className='form p-8 py-3 '>
        <div className='scroll max-h-[72vh] overflow-y-scroll pr-4'>
          <div className='grid grid-cols-1 mb-4'>
            <div className='col'>
              <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Name</h3>
              <input type="text" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md p-3 text-sm' />
            </div>
          </div>
          <div className='grid grid-cols-1 mb-4'>
            <div className='col'>
              <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Description</h3>
              <textarea type="text" className='w-full h-[140px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md p-3 text-sm' />
            </div>
          </div>
          <div className='grid grid-cols-4 mb-4 gap-4'>
            <div className='col'>
              <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Category</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDropdown"
                size='small'
                className='w-full'
                value={productCat}
                label="Category"
                onChange={handleChangeProductCat}
              >
                <MenuItem value={''}>none</MenuItem>
                <MenuItem value={10}>Fashion</MenuItem>
                <MenuItem value={20}>Beauty</MenuItem>
                <MenuItem value={30}>Wellness</MenuItem>
              </Select>

            </div>
            <div className='col '>
              <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Sub Category</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productSubCatDropdown"
                size='small'
                className='w-full'
                value={productSubCat}
                label="Category"
                onChange={handleChangeProductSubCat}
              >
                <MenuItem value={''}>none</MenuItem>
                <MenuItem value={10}>Fashion</MenuItem>
                <MenuItem value={20}>Beauty</MenuItem>
                <MenuItem value={30}>Wellness</MenuItem>
              </Select>

            </div>
            <div className='col'>
              <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Price</h3>
              <input type="Number" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md p-3 text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' />
            </div>

            <div className='col'>
              <h3 className='text-[14px] font-[500] mb-1 text-black'>Product old Price</h3>
              <input type="Number" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md p-3 text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' />
            </div>
          </div>
          <div className='grid grid-cols-4 mb-4 gap-4'>
            <div className='col'>
              <h3 className='text-[14px] font-[500] mb-1 text-black'>Is Featured</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDropdown"
                size='small'
                className='w-full'
                value={productFeatured}
                label="Category"
                onChange={handleChangeProductFeatured}
              >
                <MenuItem value={''}>none</MenuItem>
                <MenuItem value={10}>True</MenuItem>
                <MenuItem value={20}>False</MenuItem>
              </Select>
            </div>

            <div className='col'>
              <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Stock</h3>
              <input type="number" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md p-3 text-sm' />
            </div>
            <div className='col'>
              <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Brand</h3>
              <input type="text" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md p-3 text-sm' />
            </div>
            <div className='col'>
              <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Discount</h3>
              <input type="number" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md p-3 text-sm' />
            </div>
          </div>
          <div className='grid grid-cols-4 mb-4 gap-4'>
            <div className='col'>
              <h3 className='text-[14px] font-[500] mb-1 text-black'>Product RAMS</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDropdown"
                size='small'
                className='w-full'
                value={productRams}
                label="Category"
                onChange={handleChangeProductRams}
              >
                <MenuItem value={''}>none</MenuItem>
                <MenuItem value={"4gb"}>4GB</MenuItem>
                <MenuItem value={"6gb"}>6GB</MenuItem>
                <MenuItem value={"8gb"}>8GB</MenuItem>
              </Select>

            </div>
            <div className='col '>
              <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Weight</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productSubCatDropdown"
                size='small'
                className='w-full'
                value={productWeight}
                label="Category"
                onChange={handleChangeProductWeight}
              >
                <MenuItem value={''}>none</MenuItem>
                <MenuItem value={2}>2Kg</MenuItem>
                <MenuItem value={4}>4Kg</MenuItem>
                <MenuItem value={6}>6kg</MenuItem>
              </Select>

            </div>
            <div className='col '>
              <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Size</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productSubCatDropdown"
                size='small'
                className='w-full'
                value={productSize}
                label="Category"
                onChange={handleChangeProductSize}
              >
                <MenuItem value={''}>none</MenuItem>
                <MenuItem value={'S'}>S</MenuItem>
                <MenuItem value={'M'}>M</MenuItem>
                <MenuItem value={'L'}>L</MenuItem>
              </Select>

            </div>

            <div className='col'>
              <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Rating</h3>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </div>
          </div>
          <div className='col w-full p-5 px-0'>
            <h3 className='font-[700] text-[18px] mb-2'>
              Media and Images

            </h3>



            <div className='grid grid-cols-7 gap-3'>
              <div className='uploadBoxWrapper relative '>
                <span className='absolute  cursor-pointer h-[20px] w-[20px] rounded-full overflow-hidden bg-red-700  -top-[5px] -right-[5px] flex items-center justify-center z-50'>
                  <IoCloseSharp className='text-white text-[17px]' /></span>


                <div className='uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] 
              h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col  relative' >


                  <LazyLoadImage
                    className='w-full h-full object-cover '
                    alt={"image"}
                    effect="blur"
                    wrapperProps={{

                      style: { transitionDelay: "1s" },
                    }}

                    src={"https://manyavar.scene7.com/is/image/manyavar/TSB431+425_22-01-2024-13-31:894x1263?&dpr=on,2"} />



                </div>

              </div>

              <UploadBox multiple={true} />

            </div>

          </div>

        </div>
        <hr />

                  <br />
          <Button type='submit' className='btn-blue btn-lg w-full flex gap-2'>
            <FaCloudUploadAlt className='text-[25px] text-white'/>
            Publish And View </Button>
      </form>

    </section>
  )
}

export default AddProduct