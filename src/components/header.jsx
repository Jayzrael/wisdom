import React, { useState } from 'react'
import { HiMenu, HiOutlineX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-transparent p-4">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-black text-2xl font-bold">
          <a href="#">LOGO</a>
        </div>

        {/* Menu Items */}
        <div className={`hidden md:flex space-x-6 text-black text-[18px] font-semibold`}>
          <Link to="/" className="hover:bg-purple-900 hover:text-white px-3 py-2 rounded">Home</Link>
          <Link to="Pricing" className="hover:bg-purple-900 hover:text-white px-3 py-2 rounded">Pricing</Link>
          <Link to="/" className="hover:bg-purple-900 hover:text-white px-3 py-2 rounded">Contact Us</Link>
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className=" bg-transparent border border-black text-black hover:text-purple-900 px-4 py-2 rounded"
            style={{
              outline: '2px solid transparent',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.outline = '1px solid black')}
            onMouseLeave={(e) => (e.currentTarget.style.outline = '2px solid transparent')}
          >
            Login
          </button>
          <button className="bg-purple-800 hover:bg-purple-900 hover:text-white text-white px-4 py-2 rounded">
            Register
          </button>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center" onClick={toggleMobileMenu}>
          <div className="space-y-2">
            {isMobileMenuOpen ? <HiOutlineX size={30} /> : <HiMenu size={30} />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-800 mt-10 rounded-2xl pt-4`}>
        <a href="#" className="block text-white px-8 py-2 hover:bg-purple-900">Home</a>
        <a href="#" className="block text-white px-8 py-2 hover:bg-purple-900">About</a>
        <a href="#" className="block text-white px-8 py-2 hover:bg-purple-900">Services</a>
        <div className="flex justify-center space-x-4 py-4">
          <button className="bg-purple-800 hover:bg-purple-900 text-white px-4 py-2 rounded">
            Login
          </button>
          <button className="bg-purple-800 hover:bg-purple-900 text-white px-4 py-2 rounded">
            Register
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header