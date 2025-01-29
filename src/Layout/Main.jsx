import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Navbar from './Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;