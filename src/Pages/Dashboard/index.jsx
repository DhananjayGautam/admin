import React, { useState, PureComponent, useContext } from 'react'
import DashboardBoxes from '../../Components/DashboardBoxes'
import { Button } from '@mui/material'
import { IoMdAdd } from "react-icons/io";

import { FaAngleDown } from "react-icons/fa6";
import Badge from '../../components/Badge';
import { FaAngleUp } from "react-icons/fa6";

import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import ProgressBar from '../../Components/ProgressBar';

import { AiOutlineEdit } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { GoTrash } from "react-icons/go";
import Pagination from '@mui/material/Pagination';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MyContext from '../../MyContex';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const columns = [
  { id: 'Product', label: 'PRODUCT', minWidth: 150 },
  { id: 'Category', label: 'CATEGORY', minWidth: 100 },
  { id: 'Sub Category', label: 'SUB CATEGORY', minWidth: 150 },
  { id: 'Price', label: 'PRICE', minWidth: 130 },
  { id: 'Sales', label: 'SALES', minWidth: 100 },
  { id: 'Action', label: 'ACTION', minWidth: 130 },





];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}



const Dashboard = () => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [chart1Data, setChart1Data] = useState([
    {
      name: 'JAN',
      TotalSales: 4000,
      TotalUsers: 2400,
      amt: 2400,
    },
    {
      name: 'FEB',
      TotalSales: 3000,
      TotalUsers: 1398,
      amt: 2210,
    },
    {
      name: 'MARCH',
      TotalSales: 2000,
      TotalUsers: 9800,
      amt: 2290,
    },
    {
      name: 'APRIL',
      TotalSales: 2780,
      TotalUsers: 3908,
      amt: 2000,
    },
    {
      name: 'MAY',
      TotalSales: 1890,
      TotalUsers: 4800,
      amt: 2181,
    },
    {
      name: 'JUNE',
      TotalSales: 2390,
      TotalUsers: 3800,
      amt: 2500,
    },
    {
      name: 'JULY',
      TotalSales: 3990,
      TotalUsers: 4900,
      amt: 2100,
    },
    {
      name: 'AUGUST',
      TotalSales: 3690,
      TotalUsers: 4600,
      amt: 2100,
    },
    {
      name: 'SEPT',
      TotalSales: 3190,
      TotalUsers: 4100,
      amt: 1100,
    },
    {
      name: 'OCT',
      TotalSales: 3490,
      TotalUsers: 4300,
      amt: 2100,
    },
    {
      name: 'NOV',
      TotalSales: 3990,
      TotalUsers: 4900,
      amt: 9100,
    },
    {
      name: 'DEC',
      TotalSales: 9090,
      TotalUsers: 8110,
      amt: 9200,
    },
  ])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };




  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);

  const isShowOrderProduct = (index) => {
    if (isOpenOrderProduct === index) {
      setIsOpenOrderProduct(null);
    } else {
      setIsOpenOrderProduct(index);

    }

  }

  const [categorFilterValue, setCategorFilterValue] = React.useState('');

  const handleChangeCatFilter = (event) => {
    setCategorFilterValue(event.target.value);
  };

   const context = useContext(MyContext);


  return (
    <>
      <div className='w-full py-2 px-5 border bg-[#f1faff] border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md '>
        <div className='info'>
          <h1 className='text-[35px] font-bold leading-10 mb-3' > Good Morning, <br />
            Dhananjay
          </h1>
          <p>Here's what happening on your store today. See the statistics at once.</p>
          <br />
          <Button className='btn-blue !capitalize' onClick={()=>context.setIsOpenFullScreenPanel({
                  open: true,
                  model:"Add Product"
                })}><IoMdAdd />
            Add Product
          </Button>
        </div>
        <img src="shop-illustration.webp" className='w-[300px] ' />

      </div>
      <DashboardBoxes />


      <div className='card my-3 shadow-md sm:rounded-lg bg-white'>
        <div className='flex items-center justify-between px-3 py-5'>
          <h2 className='text-[20px] font-[700]'>
            Products MUI
          </h2>

        </div>
        <div className='flex items-center w-full pl-5 justify-between pr-5'>
          <div className='col w-[20%] '>
            <h4 className='font-[600] text-[13px] mb-3'> Category By</h4>
            <Select
              className='w-full '
              size='small'
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={categorFilterValue}
              onChange={handleChangeCatFilter}
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>

          </div>

          <div className='col w-[25%] flex items-center gap-3  ml-auto'>
            <Button className='btn !text-white !bg-green-600 btn-sm'> Export</Button>
            <Button className='btn-blue  !text-white btn-sm' onClick={()=>context.setIsOpenFullScreenPanel({
                  open: true,
                  model:"Add Product"
                })}><IoMdAdd />Add Product</Button>



          </div>

        </div>
        <br />

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead className='!bg-[#f1f1f1]'>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size='small' />

                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size='small' />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>

                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] overflow-hidden rounded-md group'>
                      <Link to="/product/45745">
                        <img src="https://manyavar.scene7.com/is/image/manyavar/TSB431+425_22-01-2024-13-31:894x1263?&dpr=on,2" className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>
                    <div className='info w-[75%]'>
                      <Link to="/product/45745">
                        <h3 className='font-[600] text-[14px] leading-4 hover:text-[#3872fa]'>Royal Blossom Rani Pink Saree

                        </h3>
                      </Link>
                      <p className='text-[12px]'>
                        Saree
                      </p>
                    </div>

                  </div>

                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  Traditional
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Banarasi saree
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className='flex  gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                      ₹2200
                    </span>
                    <span className='oldPrice  text-[#3872fa] font-[600]'>
                      ₹2000
                    </span>
                  </div>

                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className='text-[14px] w-[100px]'>
                    <span className='font-[600]'>234</span>
                    sales
                    <ProgressBar value={10} type="warning" />
                  </p>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className='flex items-center gap-1 '>
                    {/* <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:bg-[#f1f1f1] '>
                        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
                    <Tooltip title="View Product" placement="top">

                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:bg-[#f1f1f1] '>
                        <IoEyeOutline className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Remove Product" placement="top">

                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:bg-[#f1f1f1] '>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[18px] ' />
                      </Button>
                    </Tooltip > */}


                  </div>
                </TableCell>




              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={10}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />




      </div>

      <div className='card my-3 shadow-md sm:rounded-lg bg-white'>
        <div className='flem items-center justify-between px-3 py-5'>
          <h2 className='text-[20px] font-[700]'>
            Products css
          </h2>

        </div>
        <div className='flex items-center w-full pl-5 justify-between pr-5'>
          <div className='col w-[20%] '>
            <h4 className='font-[600] text-[13px] mb-3'> Category By</h4>
            <Select
              className='w-full '
              size='small'
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={categorFilterValue}
              onChange={handleChangeCatFilter}
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>

          </div>

          <div className='col w-[25%] flex items-center gap-3  ml-auto'>
            <Button className='btn !text-white !bg-green-600 btn-sm'> Export</Button>
            <Button className='btn-blue  !text-white btn-sm' onClick={()=>context.setIsOpenFullScreenPanel({
                  open: true,
                  model:"Add Product"
                })}><IoMdAdd />Add Product</Button>



          </div>

        </div>

        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 pr-0 py-3 w-[10%]">
                  <div className='w-[60px]'>
                    <Checkbox {...label} size='small' />

                  </div>
                </th>
                <th scope="col" className="px-0 py-3 whitespace-nowrap">
                  Products
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap ">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Sub Category
                </th>

                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Sales
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Action
                </th>

              </tr>
            </thead>
            <tbody>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                <td className="px-6 pr-0  py-2">
                  <div className='w-[60px]'>
                    <Checkbox {...label} size='small' />

                  </div>
                </td>
                <td className="px-0 py-2">
                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-[65px] h-[65px] overflow-hidden rounded-md group'>
                      <Link to="/product/45745">
                        <img src="https://manyavar.scene7.com/is/image/manyavar/TSB431+425_22-01-2024-13-31:894x1263?&dpr=on,2" className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>
                    <div className='info w-[75%]'>
                      <Link to="/product/45745">
                        <h3 className='font-[600] text-[14px] leading-4 hover:text-[#3872fa]'>Royal Blossom Rani Pink Saree

                        </h3>
                      </Link>
                      <p className='text-[12px]'>
                        Saree
                      </p>
                    </div>

                  </div>
                </td>
                <td className="px-6 py-2">
                  Traditional

                </td>
                <td className="px-6 py-2">
                  Banarasi saree

                </td>
                <td className="px-6 py-2">
                  <div className='flex  gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                      ₹2200
                    </span>
                    <span className='oldPrice  text-[#3872fa] font-[600]'>
                      ₹2000
                    </span>
                  </div>


                </td>


                <td className="px-6 py-2">
                  <p className='text-[14px] w-[100px]'>
                    <span className='font-[600]'>234</span>
                    sales
                    <ProgressBar value={10} type="warning" />
                  </p>
                </td>
                <td className="px-6 py-2">
                  <div className='flex items-center gap-1 '>
                    {/* <Tooltip title="Edit Product" placement="top">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:bg-[#f1f1f1] '>
                        <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
                    <Tooltip title="View Product" placement="top">

                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:bg-[#f1f1f1] '>
                        <IoEyeOutline className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Remove Product" placement="top">

                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.1)] !rounded-full hover:bg-[#f1f1f1] '>
                        <GoTrash className='text-[rgba(0,0,0,0.7)] text-[18px] ' />
                      </Button>
                    </Tooltip > */}


                  </div>

                </td>
              </tr>

            </tbody>
          </table>
        </div>
        <div className='flex items-center justify-end px-4 pt-4 pb-5'>
          <Pagination count={10} color="primary" />

        </div>



      </div>

      <div className='card my-3 shadow-md sm:rounded-lg bg-white'>
        <div className='flem items-center justify-between px-3 py-5'>
          <h2 className='text-[20px] font-[700]'>
            Recent Orders
          </h2>

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
      <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
          <div className='flem items-center justify-between px-3 py-5 pb-0'>
          <h2 className='text-[20px] font-[600]'>
            Total Users & Total Sales
          </h2>
        </div>
        <div className='flem items-center px-3 py-5 pt-1'>
          <span className='flex items-center gap-1 text-[15px]'>
            <span className='block w-[8px] h-[8px] rounded-full bg-green-600'></span>
            Total Users
          </span>         
           <span className='flex items-center gap-1 text-[15px]'>
            <span className='block w-[8px] h-[8px] rounded-full bg-[#3872fa]'></span>
            Total Sales
          </span>

        </div>
          <LineChart
            width={1000}
            height={500}
            data={chart1Data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="none" />
            <XAxis dataKey="name" tick={{fontSize: 12}} />
            <YAxis  tick={{fontSize: 12}}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="TotalSales" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={3}/>
            <Line type="monotone" dataKey="TotalUsers" stroke="#82ca9d" strokeWidth={3}/>
          </LineChart>
      

      </div>

    </>
  )
}

export default Dashboard