import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
const MainLayout = ({children}) => {
    return (
        <div className='flex w-screen h-screen'>
            <Header />
            <SideBar />
            <div className="ml-[240px] mt-[75px] bg-[#F0EFF7] flex-1 overflow-auto">
                {children}
            </div>
        </div>
    );
};

export default MainLayout;