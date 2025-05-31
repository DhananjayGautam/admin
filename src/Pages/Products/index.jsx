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
  { id: 'Product', label: 'PRODUCT', minWidth: 150 },
  { id: 'Category', label: 'CATEGORY', minWidth: 100 },
  { id: 'Sub Category', label: 'SUB CATEGORY', minWidth: 150 },
  { id: 'Price', label: 'PRICE', minWidth: 130 },
  { id: 'Sales', label: 'SALES', minWidth: 100 },
  { id: 'Action', label: 'ACTION', minWidth: 130 },
];

const Products = () => {
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
            Products MUI
            
          </h2>
          <div className='col w-[25%] flex items-center gap-3 ml-auto justify-end'>
            <Button className='btn !text-white !bg-green-600 btn-sm'> Export</Button>
             <Button className='btn-blue btn-sm ml-auto' onClick={()=>{context.setIsOpenFullScreenPanel({
              open: true,
              model: 'Add Product'
             })}}><IoMdAdd className='text-white text-[20px]'/>
            Add Product
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
        
        <div className='flex items-center w-full px-5 justify-between '>
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
          <div className='col w-[20%] ml-auto'>
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

export default Products