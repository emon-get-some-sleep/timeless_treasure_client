import React from 'react';
import { FaHome, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-[#F7F7F7] flex justify-around p-10'>
            <div className='flex-1'>
                <h1 className='font-bold text-2xl my-4'>Timeless Treasure</h1>
                <p className='w-[50%]font-light text-sm'>Our jewellery will enamore you till the end of time. Our passion is our strength.</p>
            </div>
            <div className='flex-1'>
                <h2 className='font-semibold text-lg'>Contact Us</h2>
                <div className='space-y-5 mt-3'>
                <span className='flex gap-2 items-center'>
                    <FaHome />
                    <p>4710-4890 Breckinridge USA</p>
                </span>
                <span className='flex gap-2 items-center'>
                    <FaEnvelope />
                    <p>4710-4890 Breckinridge USA</p>
                </span>
                <span className='flex gap-2 items-center'>
                    <FaPhone />
                    <p>1-1001-234-5678</p>
                </span>
                </div>
            </div>
            <div className='flex-1'>
                <h2 className='font-semibold text-lg'>Information</h2>
                <div className='space-y-5 mt-3'>
                <p>About Us</p>
                <p>Contact</p>
                <p>Frequently Asked Questions</p>
                <p>Privacy Policy</p>
                </div>
            </div>
            <div className='flex-1'>
                <h2 className='font-semibold text-lg'>Follow us </h2>
                <div className='flex gap-[50px] mt-4'>
                <div className='bg-white rounded-[50%] p-3'>
                <FaFacebook className='text-xl' />
                </div>
                <div className='bg-white rounded-[50%] p-3'>
                <FaTwitter className='text-xl' />
                </div>
                <div className='bg-white rounded-[50%] p-3'>
                <FaInstagram className='text-xl' />
                </div>
                <div className='bg-white rounded-[50%] p-3'>
                <FaLinkedin className='text-xl' />
                </div>
                
                </div>
            </div>
        </div>
    );
};

export default Footer;