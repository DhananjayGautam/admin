import React, { useState, PureComponent, useContext } from 'react'
import { Button, Tooltip } from '@mui/material'
import { IoMdAdd } from "react-icons/io";


import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import ProgressBar from '../../Components/ProgressBar';


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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const columns = [
  { id: 'image', label: 'IMAGE', minWidth: 150 },
  { id: 'action', label: 'Action', minWidth: 100 },
];

const HomeSliderBanners = () => {
    const [categorFilterValue, setCategorFilterValue] = React.useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);

    const context = useContext(MyContext)
  
    const handleChangeCatFilter = (event) => {
      setCategorFilterValue(event.target.value);
    };
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
          <h2 className='text-[20px] font-[600] '>
            Home Slide Banners
            
          </h2>
          <div className='col w-[25%] flex items-center gap-3 ml-auto justify-end'>
            <Button className='btn !text-white !bg-green-600 btn-sm'> Export</Button>
             <Button className='btn-blue btn-sm ml-auto' onClick={()=>{context.setIsOpenFullScreenPanel({
              open: true,
              model: 'Add Home Slide'
             })}}><IoMdAdd className='text-white text-[20px]'/>
            Add Slide
          </Button>
          </div>

        </div>
    {/* <div className='card bg-white shadow-md rounded-md p-5 flex items-center justify-between'>
        
          <h1 className='font-[700] text-[20px] text-grey-800'>Products</h1>

          <Button className='btn-blue btn-sm ml-auto'><IoMdAdd className='text-white text-[20px]'/>
            Add Product
          </Button>
    </div> */}
       <div className='card pt-5 my-3 shadow-md sm:rounded-lg bg-white'>
        
        

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead className='!bg-[#f1f1f1]'>
               <TableRow>
                <TableCell width={60}>
                  <Checkbox {...label} size='small' />

                </TableCell>
                {columns.map((column) => (
                  <TableCell
                  width={column.minWidth }
                    key={column.id}
                    align={column.align}
                   
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell >
                  <Checkbox {...label} size='small' />
                </TableCell>
                <TableCell width={300}>

                  <div className='flex items-center gap-4 w-[300px]'>
                    <div className='img w-full  overflow-hidden rounded-md group'>
                      <Link to="/product/45745">
                        <img src="/1.jpg" className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>
                    

                  </div>

                </TableCell>

                <TableCell width={100}>
                   <div className='flex items-center gap-1 '>
                    <Tooltip title="Edit Product" placement="top">
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
                    </Tooltip >


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
    
    </>
   
  )
}

export default HomeSliderBanners