import React from 'react';
import { Link } from "react-router-dom";
import { FaUser, FaRegHeart } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className='h-[100px] flex items-center justify-between shadow-md px-3'>
            <div>
                <Link to="/"><h1 className='font-medium text-2xl'>Timeless Treasure</h1></Link>
            </div>
            <div className='flex gap-4'>
                <Link className='text-lg'>Home</Link>
                <Link className='text-lg'>Shop</Link>
                <Link className='text-lg'>Blog</Link>
                <Link className='text-lg'>Page</Link>
                <Link className='text-lg'>Contact</Link>
            </div>
            <div className='flex gap-2'>
                <Link><FaUser className='text-lg text-yellow-300' /></Link>
                <Link><FaRegHeart className='text-lg text-red-500' /></Link>
            </div>
        </div>
    );
};

export default Navbar;