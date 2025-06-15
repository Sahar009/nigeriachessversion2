import { useState, useEffect } from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { HiBarsArrowDown, HiBarsArrowUp } from "react-icons/hi2";
import { FiSun, FiMoon } from "react-icons/fi";
import { useDarkMode } from "../../context/DarkModeContext";

const LOGO_URL = "https://res.cloudinary.com/ds5nnf5hi/image/upload/v1748890438/EcobanktournamentLogo_um1w0x.png";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    // Detect Scroll to Fix Header
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? isDarkMode 
            ? "bg-gray-900 shadow-md" 
            : "bg-white shadow-md" 
          : isDarkMode 
            ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700" 
            : "bg-gradient-to-r from-blue-50 via-white to-blue-50 border-b border-blue-100"
      }`}
    >
      <div className="h-24 flex px-6 md:px-20 justify-between items-center">
        {/* Logo */}
        <Link to='/'>
          <div className="w-36">
            <img src={LOGO_URL} alt="logo" className={isDarkMode ? "filter brightness-70 w-36 h-20" : "w-36 h-20"} />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode 
                ? "bg-gray-700 text-yellow-300 hover:bg-gray-600" 
                : "bg-blue-50 text-blue-600 hover:bg-blue-100"
            }`}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          
          <ul className="flex space-x-9 text-lg font-medium">
            <li className={`cursor-pointer transition-colors ${
              isDarkMode ? "text-gray-200 hover:text-white" : "text-dark-gray hover:text-blue-600"
            }`}>
              <Link to='/'>Home</Link>
            </li>
            <li className={`cursor-pointer transition-colors ${
              isDarkMode ? "text-gray-200 hover:text-white" : "text-dark-gray hover:text-blue-600"
            }`}>
              <Link to='/about'>About</Link>
            </li>
            <li className={`cursor-pointer transition-colors ${
              isDarkMode ? "text-gray-200 hover:text-white" : "text-dark-gray hover:text-blue-600"
            }`}>
              <Link to='/tournament-details'>Tournament details</Link>
            </li>
            <li className={`cursor-pointer transition-colors ${
              isDarkMode ? "text-gray-200 hover:text-white" : "text-dark-gray hover:text-blue-600"
            }`}>
              <Link to='/registered-schools'>Registered Schools</Link>
            </li>
            <li className={`cursor-pointer transition-colors ${
              isDarkMode ? "text-gray-200 hover:text-white" : "text-dark-gray hover:text-blue-600"
            }`}>
              <Link to='/gallery'>Gallery</Link>
            </li>
            <li className={`cursor-pointer transition-colors ${
              isDarkMode ? "text-gray-200 hover:text-white" : "text-dark-gray hover:text-blue-600"
            }`}>
              <Link to='/tournament-results'>Results</Link>
            </li>
            {/* <li className={`cursor-pointer transition-colors ${
              isDarkMode ? "text-gray-200 hover:text-white" : "text-dark-gray hover:text-blue-600"
            }`}>
              <Link to='/tutorials'>Tutorials</Link>
            </li> */}
            {/* <li className={`cursor-pointer transition-colors ${
              isDarkMode ? "text-gray-200 hover:text-white" : "text-dark-gray hover:text-blue-600"
            }`}>
              <Link to='/contact'>Contact</Link>
            </li> */}
          </ul>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_RAOv2twjRa80U0aqiScz3idEWs20zrx81I-1NXXy12olNQ/viewform" target="_blank" rel="noopener noreferrer">
            <Button 
              label="Register" 
              background={isDarkMode ? "bg-blue-500" : "bg-blue-600"}
              hoverBackground={isDarkMode ? "hover:bg-blue-600" : "hover:bg-blue-700"}
            />
          </a>
        </div>

        {/* Mobile Menu Icon and Dark Mode Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode 
                ? "bg-gray-700 text-yellow-300" 
                : "bg-blue-50 text-blue-600"
            }`}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          
          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 
              <HiBarsArrowUp className={isDarkMode ? "text-white" : "text-dark-gray"} size={24} /> : 
              <HiBarsArrowDown className={isDarkMode ? "text-white" : "text-dark-gray"} size={24} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-start space-y-6 transition-all duration-300 ease-in-out overflow-hidden ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } ${
          isOpen ? "max-h-[500px] opacity-100 translate-y-0 p-6" : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <ul className="text-lg font-medium space-y-6 w-full">
          <li className={`cursor-pointer transition-colors ${
            isDarkMode ? "text-gray-200 hover:text-white" : "text-dark-gray hover:text-blue-600"
          }`}>
            <Link to='/'>Home</Link>
          </li>
          <li className={`cursor-pointer transition-colors ${
            isDarkMode ? "text-gray-200 hover:text-white" : "text-dark-gray hover:text-blue-600"
          }`}>
            <Link to='/about'>About</Link>
          </li>
          <li className={`cursor-pointer transition-colors ${
            isDarkMode ? "text-gray-200 hover:text-white" : "text-dark-gray hover:text-blue-600"
          }`}>
            <Link to='/gallery'>Gallery</Link>
          </li>
          <li className={`cursor-pointer transition-colors ${
            isDarkMode ? "text-gray-200 hover:text-white" : "text-dark-gray hover:text-blue-600"
          }`}>
            <Link to='/registered-schools'>Registered Schools</Link>
          </li>
          <li className={`cursor-pointer transition-colors ${
            isDarkMode ? "text-gray-200 hover:text-white" : "text-dark-gray hover:text-blue-600"
          }`}>
            <Link to='/tournament-details'>Tournament Details</Link>
          </li>
          <li className={`cursor-pointer transition-colors ${
              isDarkMode ? "text-gray-200 hover:text-white" : "text-dark-gray hover:text-blue-600"
            }`}>
              <Link to='/tournament-results'>Results</Link>
            </li>
          {/* <li className={`cursor-pointer transition-colors ${
            isDarkMode ? "text-gray-200 hover:text-white" : "text-dark-gray hover:text-blue-600"
          }`}>
            <Link to='/contact'>Contact</Link>
          </li> */}
        </ul>
        <Link to="/register" className="w-full">
          <Button 
            label="Register" 
            background={isDarkMode ? "bg-blue-500" : "bg-blue-600"}
            hoverBackground={isDarkMode ? "hover:bg-blue-600" : "hover:bg-blue-700"}
            width="w-full"
          />
        </Link>
      </div>
    </nav>
  );
};
