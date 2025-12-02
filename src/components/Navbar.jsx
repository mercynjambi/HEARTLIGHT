import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollOrNavigate from "./ScrollOrNavigate"; // <-- NEW import

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-display font-bold text-gray-900">
            HeartLight
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-body text-sm font-medium text-gray-600">
          <ScrollOrNavigate to="hero" className="hover:text-gray-900">
            Home
          </ScrollOrNavigate>

          <ScrollOrNavigate to="about" className="hover:text-gray-900">
            About Us
          </ScrollOrNavigate>

          <ScrollOrNavigate to="services" className="hover:text-gray-900">
            Our Services
          </ScrollOrNavigate>

          <ScrollOrNavigate to="plans" className="hover:text-gray-900">
            Our Plans
          </ScrollOrNavigate>

          <ScrollOrNavigate to="team" className="hover:text-gray-900">
            Our Team
          </ScrollOrNavigate>

          <ScrollOrNavigate to="contact" className="hover:text-gray-900">
            Contact Us
          </ScrollOrNavigate>
        </nav>

        {/* Desktop Register */}
        <div className="hidden md:flex items-center gap-6 font-body">
          <Link
            to="/register"
            className="rounded-full bg-primary text-white px-5 py-2 text-sm font-semibold hover:bg-primary/80 transition-colors"
          >
            Register
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden inline-flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 font-body text-gray-700">
          
          <ScrollOrNavigate to="hero">Home</ScrollOrNavigate>
          <ScrollOrNavigate to="about">About Us</ScrollOrNavigate>
          <ScrollOrNavigate to="services">Our Services</ScrollOrNavigate>
          <ScrollOrNavigate to="plans">Our Plans</ScrollOrNavigate>
          <ScrollOrNavigate to="team">Our Team</ScrollOrNavigate>
          <ScrollOrNavigate to="contact">Contact Us</ScrollOrNavigate>

          <div className="pt-4 border-t border-gray-200">
            <Link
              to="/register"
              className="inline-block rounded-full bg-primary text-white px-5 py-2 text-sm font-semibold"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
