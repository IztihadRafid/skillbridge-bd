import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Navbar from './Navbar/Navbar';

const Main = () => {
    const location = useLocation()
    const noFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            { noFooter ||  <Footer></Footer>}
            
        </div>
    );
};

export default Main;