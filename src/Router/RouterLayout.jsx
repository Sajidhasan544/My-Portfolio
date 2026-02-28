import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';
import ScrollToTop from './ScrollToTop';

const RouterLayout = () => {
    return (
        <div className='h-screen  bg-gradient-to-br from-[#0a0014] via-[#140028] to-[#0a0014] text-white'>
            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RouterLayout;