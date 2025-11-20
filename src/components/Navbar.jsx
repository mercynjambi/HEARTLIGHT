import React, { useState } from "react";
import logo from "../assets/workroomlogo.svg"
import { BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-9 h-9">
            {/* <img
              src={logo}
              alt="Workroom365 Logo"
              className="w-full h-full object-contain"
            /> */}
          </div>
          <span className="text-lg font-display font-bold text-gray-900">
            HeartLight
          </span>
          {/* Verified Badge */}
          {/* <BadgeCheck className="w-5 h-5 text-blue-500" /> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-body text-sm font-medium text-gray-600">
          <a href="/" className="hover:text-gray-900">
            Home
          </a>
          <a href="about" className="hover:text-gray-900">
            About Us
          </a>
          <a href="services" className="hover:text-gray-900">
            Our Services 
          </a>
          <a href="plans" className="hover:text-gray-900">
            Our Plans
          </a>
          <a href="team" className="hover:text-gray-900">
            Our Team
          </a>
          <a href="contacts" className="hover:text-gray-900">
            Contact Us
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6 font-body">
          
          <a
            href="#"
            className="rounded-full bg-primary text-white px-5 py-2 text-sm font-semibold hover:bg-pink-600 transition-colors"
          >
            Register
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 font-body text-gray-700">
          <a href="/" className="block hover:text-gray-900">
            Home
          </a>
          <a href="about" className="block hover:text-gray-900">
            About Us
          </a>
          <a href="services" className="block hover:text-gray-900">
            Our Services
          </a>
          <a href="plans" className="block hover:text-gray-900">
            Our Plans
          </a>
          <a href="team" className="block hover:text-gray-900">
            Our Team
          </a>
           <a href="contacts" className="block hover:text-gray-900">
            Contact Us
          </a>
          <div className="pt-4 border-t border-gray-200 space-y-3">
            
            <a
              href="#"
              className="inline-block rounded-full bg-primary text-secondary px-5 py-2 text-sm font-semibold hover:bg-pink-600 transition-colors"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

