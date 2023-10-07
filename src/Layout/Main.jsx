import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            this is main
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;