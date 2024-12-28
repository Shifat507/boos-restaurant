import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;