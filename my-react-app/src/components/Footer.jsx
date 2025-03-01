import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import uparrow from "../construction pictures/uparrow.png";

const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
          <nav className="flex flex-wrap justify-center gap-6 text-white text-sm">
            <NavLink to="/" className="hover:text-gray-400">
              Home
            </NavLink>
            <NavLink to="about" className="hover:text-gray-400">
              About
            </NavLink>

            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </nav>
          <p className="text-white text-sm">
            &copy; 2025 Hernandez Construction. All rights reserved.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); 
              window.scrollTo({ top: 0, behavior: "smooth" }); // Smoothly scroll to top
            }}
            className="text-white"
          >
            <button className="hover:scale-110 transform transition-transform">
              <img src={uparrow} alt="up arrow" className="w-12" />
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
