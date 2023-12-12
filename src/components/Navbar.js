import { Link } from 'react-router-dom';
import logo from '../hello_kitty.png';
import React,{ useState, useEffect } from 'react';

const ipcRenderer = window.require('electron').ipcRenderer;


//https://www.youtube.com/watch?v=A4H2DVkNgPs

function Navbar() {

  const [value, setValue] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

useEffect(() => {
  // Check if the window width is smaller than the sm breakpoint
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 640); // Adjust the breakpoint as needed
  };

  // Initial check on mount
  handleResize();

  // Listen for window resize events
  window.addEventListener('resize', handleResize);

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);



  return (

    <div>
      <nav className={`bg-gray-800 p-4 flex items-center justify-between ${isSmallScreen ? 'flex-col' : ''}`}>
        <div className="flex items-center">
          <img src={logo} alt="YourLogo" className="h-8 w-8 mr-2" /> 
          <span className="text-white text-xl font-bold">Audit</span>
        </div>
        <ul className={`flex ${isSmallScreen ? 'flex-col items-start' : 'space-x-4'}`}>
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-300">About Us</Link></li>
          <li><a href="#community" className="text-white hover:text-gray-300">Community</a></li>
        </ul>
      </nav>
      
    </div>
  );
}

export default Navbar;

