import React from 'react';
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
    return (
        <div>
            <div>
                <h1>Timeless Treasure</h1>
            </div>
            <div>
                <Link>Home</Link>
                <Link>Shop</Link>
                <Link>Blog</Link>
                <Link>Page</Link>
                <Link>Contact</Link>
            </div>
            <div>
                <Link><FaUser /></Link>
            </div>
        </div>
    );
};

export default Navbar;