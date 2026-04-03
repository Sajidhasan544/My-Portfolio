import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';
import ScrollToTop from './ScrollToTop';

const RouterLayout = () => {
    return (
        <div className='relative min-h-screen overflow-x-hidden bg-transparent text-white'>
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,113,133,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(45,212,191,0.12),transparent_22%),linear-gradient(180deg,#07111f_0%,#0c1728_45%,#09101d_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
            </div>
            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <main className="pt-24">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default RouterLayout;
