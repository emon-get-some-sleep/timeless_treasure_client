import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <div className="h-[100px] flex items-center justify-between shadow-md px-3 relative">
      <div>
        <Link to="/">
          <h1 className="font-medium text-xl md:text-2xl">Timeless Treasure</h1>
        </Link>
      </div>
      <div className="md:flex hidden gap-4">
        <Link className="text-lg">Home</Link>
        <Link className="text-lg">Shop</Link>
        <Link className="text-lg">Blog</Link>
        <Link className="text-lg">Page</Link>
        <Link className="text-lg">Contact</Link>
      </div>
      <div className="md:flex hidden gap-2">
        <Link>
          <FaUser className="text-lg text-yellow-300" />
        </Link>
        <Link>
          <FaRegHeart className="text-lg text-red-500" />
        </Link>
      </div>
      <div className="block md:hidden">
        <FaBars onClick={() => setShowMenu(!showMenu)} className="text-lg " />
      </div>
      {
        showMenu && 
        <div className={`w-[50%] flex flex-col bg-slate-400 shadow-sm rounded-lg text-white p-2 gap-4 absolute top-0 ${showMenu ? 'left-0' : '-left-[100%]'}`}>
        <Link className="text-lg">Home</Link>
        <Link className="text-lg">Shop</Link>
        <Link className="text-lg">Blog</Link>
        <Link className="text-lg">Page</Link>
        <Link className="text-lg">Contact</Link>
      </div>
      }
    </div>
  );
};

export default Navbar;
