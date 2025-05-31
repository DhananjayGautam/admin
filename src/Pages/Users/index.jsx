import React, { useState, PureComponent, useContext } from 'react'
import { Button, Tooltip } from '@mui/material'
import { IoMdAdd } from "react-icons/io";


import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import ProgressBar from '../../Components/ProgressBar';
import { SlCalender } from "react-icons/sl";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { AiOutlineEdit } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { GoTrash } from "react-icons/go";
import SearchBox from '../../Components/SearchBox';
import MyContext from '../../MyContex';
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const columns = [
  { id: 'userImg', label: 'User Image', minWidth: 80 },
  { id: 'userName', label: 'User Name', minWidth: 100 },
  { id: 'userEmail', label: 'User Email', minWidth: 150 },
  { id: 'userPhone', label: 'Phone Number', minWidth: 130 },
  { id: 'createdDate', label: ' Created', minWidth: 130 },


];

const Users = () => {
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);

    const context = useContext(MyContext)
  
      const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>

    <div className='flex items-center justify-between px-2 py-0 mt-3'>
          
          

        </div>
    {/* <div className='card bg-white shadow-md rounded-md p-5 flex items-center justify-between'>
        
          <h1 className='font-[700] text-[20px] text-grey-800'>Products</h1>

          <Button className='btn-blue btn-sm ml-auto'><IoMdAdd className='text-white text-[20px]'/>
            Add Product
          </Button>
    </div> */}
       <div className='card pt-5 my-3 shadow-md sm:rounded-lg bg-white'>
        
        <div className='flex items-center w-full px-5 justify-between '>
          <div className='col w-[40%] '>
            <h2 className='text-[20px] font-[600] '>
            Users List
            
          </h2>
        

          </div>
          <div className='col w-[40%] ml-auto'>
            <SearchBox/>

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

                  <div className='flex items-center gap-4 w-[70px]'>
                    <div className='img w-[45px] h-[45px] overflow-hidden rounded-md group'>
                      <Link to="/product/45745">
                        <img src="https://manyavar.scene7.com/is/image/manyavar/TSB431+425_22-01-2024-13-31:894x1263?&dpr=on,2" className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>
                 

                  </div>

                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  Dhananjay Gautam
                 </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <span className='flex items-center gap-2'>
                  <MdOutlineMailOutline/>dhananjay.gautam266@gmail.com
                  </span>
                </TableCell>
                 <TableCell style={{ minWidth: columns.minWidth }}>
                   <span className='flex items-center gap-2'>
                  
                  <FaPhone/>8195931421

                   </span>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <span className='flex items-center gap-2'>
                  <SlCalender/>10-12-2022
                  </span>
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
    
    </>
   
  )
}

export default Users