import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div className='font-sora flex flex-col min-h-screen container mx-auto px-10'>

            {/* navbar */}
            <Navbar></Navbar>

            <div className='flex-grow'>
                <Outlet></Outlet>
            </div>


            {/* Footer */}

            <Footer></Footer>

        </div>
    );
};

export default MainLayouts;