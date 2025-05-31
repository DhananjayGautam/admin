import React from 'react'
import MyContext from '../../MyContex';
import{ useContext, useState } from 'react'
;
import Sidebar from '../Sidebar'
import Users from '../../Pages/Users';


const usersOpen = () => {
    const context = useContext(MyContext);

    return (
        <>
            <div className={`sidebarWrapper overflow-hidden ${context.isSidebarOpen === true ? 'w-[18%]' : 'w-[0px] opacity-0'} transition-all`}>
                <Sidebar />
            </div>
            <div className={`contentRight py-4 px-5 ${context.isSidebarOpen === true ? 'w-[82%]' : 'w-[100%]'} transition-all`}>
                <Users
                 />

            </div>
            
        </>
    )
}

export default usersOpen