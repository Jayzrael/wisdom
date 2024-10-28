import React, { useEffect, useState } from 'react'
import { HiMenu, HiOutlineX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // State to track background color change
  const [bgColor, setBgColor] = useState("bg-transparent");

  // Effect to handle scroll and change background color
  useEffect(() => {
    const handleScroll = () => {
      // If the scroll position is greater than 50px, change background color
      if (window.scrollY > 50) {
        setBgColor("bg-slate-50");
      } else {
        setBgColor("bg-transparent"); // Reset background color when scrolled to top
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${bgColor} p-4`}>
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-black text-2xl font-bold">
          <a href="#">LOGO</a>
        </div>

        {/* Menu Items */}
        <div className={`hidden md:flex space-x-6 text-black text-[18px] font-semibold`}>
          <Link to="/" className="hover:bg-[#611F69] hover:text-white px-3 py-2 rounded">Home</Link>
          <Link to="Pricing" className="hover:bg-[#611F69] hover:text-white px-3 py-2 rounded">Pricing</Link>
          <Link to="/" className="hover:bg-[#611F69] hover:text-white px-3 py-2 rounded">Contact Us</Link>
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className=" bg-transparent border border-black text-black hover:text-[#481A54] px-4 py-2 rounded"
            style={{
              outline: '2px solid transparent',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.outline = '1px solid black')}
            onMouseLeave={(e) => (e.currentTarget.style.outline = '2px solid transparent')}
          >
            Login
          </button>
          <button className="bg-[#611F69] hover:bg-[#481A54] hover:text-white text-white px-4 py-2 rounded">
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
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-slate-50 border border-[#481A54] mt-10 rounded-2xl pt-4`}>
        <a href="#" className="block text-black font-bold px-8 py-2 hover:bg-[#481A54] hover:text-white">Home</a>
        <a href="#" className="block text-black font-bold px-8 py-2 hover:bg-[#481A54] hover:text-white">About</a>
        <a href="#" className="block text-black font-bold px-8 py-2 hover:bg-[#481A54] hover:text-white">Services</a>
        <div className="flex justify-center space-x-4 py-4">
          <button className="bg-[#481A54] hover:bg-[#481A54] text-white px-4 py-2 rounded">
            Login
          </button>
          <button className="bg-[#481A54] hover:bg-[#481A54] text-white px-4 py-2 rounded">
            Register
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header