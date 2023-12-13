import { Link, NavLink } from 'react-router-dom';
import logo from '../hello_kitty.png';
import React, { useState, useEffect } from 'react';

const ipcRenderer = window.require('electron').ipcRenderer;

//https://www.youtube.com/watch?v=A4H2DVkNgPs

function Navbar() {
  const [value, setValue] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const AboutDropdown = () => (
    <div className="group relative">
      <NavLink
        to="/"
        className="text-white hover:text-gray-300 group-hover:border-gray-300 px-4 py-2"
      >
        Amenities
      </NavLink>

      <div className="absolute hidden bg-gray-800 group-hover:block mt-2 space-y-2">
        <NavLink
          to="/about"
          className="block px-4 py-2 text-white hover:text-gray-300"
        >
          History
        </NavLink>
        
        <NavLink
          to="/about/name"
          className="block px-4 py-2 text-white hover:text-gray-300"
        >
          Our Team
        </NavLink>
        <NavLink
           to="/about/date"
           className="block px-4 py-2 text-white hover:text-gray-300"
         >
           Date wise
        </NavLink>
      </div>
    </div>
  );

  return (
    <div>
      <nav className={`bg-gray-800 p-4 flex items-center justify-between ${isSmallScreen ? 'flex-col' : ''}`}>
        <Link to="/" className="flex items-center">
          <img src={logo} alt="YourLogo" className="h-8 w-8 mr-2" />
          <span className="text-white text-xl font-bold">Audit</span>
        </Link>
        <ul className={`flex ${isSmallScreen ? 'flex-col items-start' : 'space-x-4'}`}>
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><AboutDropdown /></li>
          <li><Link to="/comm" className="text-white hover:text-gray-300">Community</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;