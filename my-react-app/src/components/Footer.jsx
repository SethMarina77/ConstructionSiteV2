import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
            
            <nav className="flex flex-wrap justify-center gap-6 text-white text-sm">
                <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
                <NavLink to="about" className="hover:text-gray-400">About</NavLink>
                
                <a href="#" className="hover:text-gray-400">Contact</a>
            </nav>
            <p className="text-white text-sm">&copy; 2025 Hernandez Construction. All rights reserved.</p>
        </div>
    </div>
</footer>

  );
};

export default Footer;
