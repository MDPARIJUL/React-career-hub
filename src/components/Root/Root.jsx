import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            {/* <h1>Root</h1> */}
            <Footer></Footer>
        </div>
    );
};

export default Root;