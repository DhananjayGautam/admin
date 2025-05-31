import React, { useState } from 'react'
import { Button } from '@mui/material'

import { FaAngleDown } from "react-icons/fa6";
import Badge from '../../components/Badge';
import { FaAngleUp } from "react-icons/fa6";
import SearchBox from '../../Components/SearchBox';












 

const Orders = () => {
    


  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);

  const isShowOrderProduct = (index) => {
    if (isOpenOrderProduct === index) {
      setIsOpenOrderProduct(null);
    } else {
      setIsOpenOrderProduct(index);

    }

  }
  return (
    <div className='card my-3 shadow-md sm:rounded-lg bg-white'>
        <div className='flex items-center justify-between px-3 py-5'>
          
            <h2 className='text-[20px] w-[60%] font-[700]'>
            Recent Orders
          </h2>
        
          <div className='w-[40%]'><SearchBox/></div>

        </div>

        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  &nbsp;
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Order Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Payment Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Address
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Pincode
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Total Amount
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  User Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Order Status
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                <td className="px-6 py-4 font-[500]">
                  <Button className='!w-[35px] !h-[35px] !min-w-[35px] rounded-full bg-[#f1f1f1] ' onClick={() => isShowOrderProduct(0)}>
                    {
                      isOpenOrderProduct === 0 ?
                        <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' /> :
                        <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />



                    }
                  </Button>

                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className='text-[#3872fa]'>ao8w4e7y74wruwaro6t8tr78</span>
                </td>

                <td className="px-6 py-4 font-[500]">
                  upi@9999888777
                </td>

                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  Dhananjay Gautam
                </td>

                <td className="px-6 py-4 font-[500]">
                  8195931421
                </td>

                <td className="px-6 py-4 font-[400]">
                  <span className='block w-[300px]'>L4041, Assotect SpringField, Zeta-1 Greater Noida, Uttar Pradesh</span>
                </td>

                <td className="px-6 py-4 font-[500]">
                  201306
                </td>

                <td className="px-6 py-4 font-[500]">
                  4000
                </td>

                <td className="px-6 py-4 font-[500]">
                  dhananjay.gautam266@gmail.com
                </td>

                <td className="px-6 py-4 font-[500]">
                  <span className='text-[#3872fa]'>782468468746874</span>
                </td>

                <td className="px-6 py-4 font-[500]">
                  <Badge status="delivered" />
                </td>

                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  2024-12-04
                </td>



              </tr>
              {
                isOpenOrderProduct === 0 &&
                <tr>
                  <td className=' pl-20' colSpan="6">
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Product Id
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Product Detail
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Image
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Quantity
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Sub Total
                            </th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                            <td className="px-6 py-4 font-[500]">
                              Q2ORYG84tegf8bbf
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-[#3872fa]'>
                                Pink Floral Patterned Saree</span>
                            </td>

                            <td className="px-6 py-4 font-[500]">
                              <img src="https://manyavar.scene7.com/is/image/manyavar/SB17229_414-PINK_101.15764_27-05-2024-11-33:650x900?&dpr=on,2" className='w-[40px] h-[40px] object-cover rounded-md' alt="" />
                            </td>

                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              3
                            </td>

                            <td className="px-6 py-4 font-[500]">
                              2000
                            </td>

                            <td className="px-6 py-4 font-[400]">
                              6000
                            </td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                            <td className="px-6 py-4 font-[500]">
                              Q2ORYG84tegf8bbf
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-[#3872fa]'>
                                Pink Floral Patterned Saree</span>
                            </td>

                            <td className="px-6 py-4 font-[500]">
                              <img src="https://manyavar.scene7.com/is/image/manyavar/SB17229_414-PINK_101.15764_27-05-2024-11-33:650x900?&dpr=on,2" className='w-[40px] h-[40px] object-cover rounded-md' alt="" />
                            </td>

                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              3
                            </td>

                            <td className="px-6 py-4 font-[500]">
                              2000
                            </td>

                            <td className="px-6 py-4 font-[400]">
                              6000
                            </td>
                          </tr>


                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              }

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                <td className="px-6 py-4 font-[500]">
                  <Button className='!w-[35px] !h-[35px] !min-w-[35px] rounded-full bg-[#f1f1f1] ' onClick={() => isShowOrderProduct(1)}>
                    {
                      isOpenOrderProduct === 1 ?
                        <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' /> :
                        <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />



                    }
                  </Button>

                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className='text-[#3872fa]'>ao8w4e7y74wruwaro6t8tr78</span>
                </td>

                <td className="px-6 py-4 font-[500]">
                  upi@9999888777
                </td>

                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  Dhananjay Gautam
                </td>

                <td className="px-6 py-4 font-[500]">
                  8195931421
                </td>

                <td className="px-6 py-4 font-[400]">
                  <span className='block w-[300px]'>L4041, Assotect SpringField, Zeta-1 Greater Noida, Uttar Pradesh</span>
                </td>

                <td className="px-6 py-4 font-[500]">
                  201306
                </td>

                <td className="px-6 py-4 font-[500]">
                  4000
                </td>

                <td className="px-6 py-4 font-[500]">
                  dhananjay.gautam266@gmail.com
                </td>

                <td className="px-6 py-4 font-[500]">
                  <span className='text-[#3872fa]'>782468468746874</span>
                </td>

                <td className="px-6 py-4 font-[500]">
                  <Badge status="delivered" />
                </td>

                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  2024-12-04
                </td>



              </tr>
              {
                isOpenOrderProduct === 1 &&
                <tr>
                  <td className=' pl-20' colSpan="6">
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Product Id
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Product Detail
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Image
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Quantity
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Sub Total
                            </th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                            <td className="px-6 py-4 font-[500]">
                              Q2ORYG84tegf8bbf
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-[#3872fa]'>
                                Pink Floral Patterned Saree</span>
                            </td>

                            <td className="px-6 py-4 font-[500]">
                              <img src="https://manyavar.scene7.com/is/image/manyavar/SB17229_414-PINK_101.15764_27-05-2024-11-33:650x900?&dpr=on,2" className='w-[40px] h-[40px] object-cover rounded-md' alt="" />
                            </td>

                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              3
                            </td>

                            <td className="px-6 py-4 font-[500]">
                              2000
                            </td>

                            <td className="px-6 py-4 font-[400]">
                              6000
                            </td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                            <td className="px-6 py-4 font-[500]">
                              Q2ORYG84tegf8bbf
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-[#3872fa]'>
                                Pink Floral Patterned Saree</span>
                            </td>

                            <td className="px-6 py-4 font-[500]">
                              <img src="https://manyavar.scene7.com/is/image/manyavar/SB17229_414-PINK_101.15764_27-05-2024-11-33:650x900?&dpr=on,2" className='w-[40px] h-[40px] object-cover rounded-md' alt="" />
                            </td>

                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              3
                            </td>

                            <td className="px-6 py-4 font-[500]">
                              2000
                            </td>

                            <td className="px-6 py-4 font-[400]">
                              6000
                            </td>
                          </tr>


                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              }
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                <td className="px-6 py-4 font-[500]">
                  <Button className='!w-[35px] !h-[35px] !min-w-[35px] rounded-full bg-[#f1f1f1] ' onClick={() => isShowOrderProduct(2)}>
                    {
                      isOpenOrderProduct === 2 ?
                        <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' /> :
                        <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />



                    }
                  </Button>

                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className='text-[#3872fa]'>ao8w4e7y74wruwaro6t8tr78</span>
                </td>

                <td className="px-6 py-4 font-[500]">
                  upi@9999888777
                </td>

                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  Dhananjay Gautam
                </td>

                <td className="px-6 py-4 font-[500]">
                  8195931421
                </td>

                <td className="px-6 py-4 font-[400]">
                  <span className='block w-[300px]'>L4041, Assotect SpringField, Zeta-1 Greater Noida, Uttar Pradesh</span>
                </td>

                <td className="px-6 py-4 font-[500]">
                  201306
                </td>

                <td className="px-6 py-4 font-[500]">
                  4000
                </td>

                <td className="px-6 py-4 font-[500]">
                  dhananjay.gautam266@gmail.com
                </td>

                <td className="px-6 py-4 font-[500]">
                  <span className='text-[#3872fa]'>782468468746874</span>
                </td>

                <td className="px-6 py-4 font-[500]">
                  <Badge status="delivered" />
                </td>

                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  2024-12-04
                </td>



              </tr>
              {
                isOpenOrderProduct === 2 &&
                <tr>
                  <td className=' pl-20' colSpan="6">
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Product Id
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Product Detail
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Image
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Quantity
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Sub Total
                            </th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                            <td className="px-6 py-4 font-[500]">
                              Q2ORYG84tegf8bbf
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-[#3872fa]'>
                                Pink Floral Patterned Saree</span>
                            </td>

                            <td className="px-6 py-4 font-[500]">
                              <img src="https://manyavar.scene7.com/is/image/manyavar/SB17229_414-PINK_101.15764_27-05-2024-11-33:650x900?&dpr=on,2" className='w-[40px] h-[40px] object-cover rounded-md' alt="" />
                            </td>

                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              3
                            </td>

                            <td className="px-6 py-4 font-[500]">
                              2000
                            </td>

                            <td className="px-6 py-4 font-[400]">
                              6000
                            </td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                            <td className="px-6 py-4 font-[500]">
                              Q2ORYG84tegf8bbf
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-[#3872fa]'>
                                Pink Floral Patterned Saree</span>
                            </td>

                            <td className="px-6 py-4 font-[500]">
                              <img src="https://manyavar.scene7.com/is/image/manyavar/SB17229_414-PINK_101.15764_27-05-2024-11-33:650x900?&dpr=on,2" className='w-[40px] h-[40px] object-cover rounded-md' alt="" />
                            </td>

                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              3
                            </td>

                            <td className="px-6 py-4 font-[500]">
                              2000
                            </td>

                            <td className="px-6 py-4 font-[400]">
                              6000
                            </td>
                          </tr>


                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              }


            </tbody>
          </table>
        </div>

      </div>
  )
}

export default Orders