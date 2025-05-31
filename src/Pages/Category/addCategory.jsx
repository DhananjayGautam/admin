import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoCloseSharp } from "react-icons/io5";
import UploadBox from '../../Components/UploadBox';
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from "react-icons/fa";

const AddCategory = () => {
  return (
    <>
      <section className='p-5 bg-gray-50'>

        <form className='form p-8 py-3 '>
          <div className='scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4'>

            <div className='grid grid-cols-1 mb-4'>
              <div className='col w-[25%]'>
                <h3 className='text-[14px] font-[500] mb-1 text-black'>Category Name</h3>
                <input type="text" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md p-3 text-sm' />
              </div>
            </div>
            <br />
                <h3 className='text-[18px] font-[500] mb-1 text-black'>Category Image</h3>
                <br />

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
          <br />

          <br />
          <div className='w-[250px]'>
            <Button type='button' className='btn-blue btn-lg w-full flex gap-2 '>
              <FaCloudUploadAlt className='text-[25px] text-white' />
              Publish And View </Button>
          </div>
        </form>
      </section>
    </>
  )
}

export default AddCategory