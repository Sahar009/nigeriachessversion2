import { Link } from 'react-router-dom';
import { useDarkMode } from '../../context/DarkModeContext';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaChess, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const Footer = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaChess className="text-3xl text-blue-600" />
              <h3 className="text-xl font-bold">National SSchool team chess championship</h3>
            </div>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
              Promoting chess excellence and fostering young talents across Nigeria through competitive championships and educational initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} space-y-2`}>
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
              </li>
            
              <li>
                <Link to="/register" className="hover:text-blue-600 transition-colors">Register</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} space-y-2`}>
              <li className="flex items-center gap-2">
                <FaPhone className="text-blue-600" />
                <span>+234 813 369 7123</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-600" />
                {/* <span>info@nigeriachess.org</span> */}
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
              Subscribe to our newsletter for updates and news.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-300'
                } border focus:outline-none focus:ring-2 focus:ring-blue-600`}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex space-x-6">
              <a href="#" className="text-2xl hover:text-blue-600 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-blue-600 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-blue-600 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-blue-600 transition-colors">
                <FaYoutube />
              </a>
            </div>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-center`}>
              © {new Date().getFullYear()} Nigeria Chess Championship 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};