import React from 'react';
import Header from '../../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='relative'>
            <div className='sticky top-0 z-50'>
                <Header />
            </div>

            <Outlet />

            <Footer />
        </div>
    );
};

export default Main;