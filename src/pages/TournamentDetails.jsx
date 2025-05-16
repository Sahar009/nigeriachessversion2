import { useDarkMode } from '../context/DarkModeContext';
import { FaChessKing, FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaDownload, FaInfoCircle, FaMedal, FaClock, FaChessBoard, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const TournamentDetails = () => {
  const { isDarkMode } = useDarkMode();

  const handleWhatsAppClick = () => {
    const phoneNumber = '2348133697123'; // Format without + for URL
    const message = encodeURIComponent('Hello! I would like to know more about the Chess Championship.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className={`pt-24 min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="container mx-auto px-6 md:px-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <FaChessKing className={`mx-auto text-5xl mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h1 className="text-4xl font-bold mb-4">Tournament Details</h1>
          <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            2025 Ecobank National Schools' Team Chess Championship
          </p>
        </div>

        {/* Key Information */}
        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <FaCalendarAlt className={`text-2xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div>
                <h3 className="font-semibold">Dates</h3>
                <p>June 25th - 28th, 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className={`text-2xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div>
                <h3 className="font-semibold">Venue</h3>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaInfoCircle className={`text-2xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div>
                <h3 className="font-semibold">Contact</h3>
                <motion.button
                  onClick={handleWhatsAppClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 mt-1 px-3 py-1.5 rounded-full transition-colors ${
                    isDarkMode 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                >
                  <FaWhatsapp className="text-lg" />
                  <span className="font-medium">Tobi: 0813 369 7123</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
          <h2 className="text-2xl font-bold mb-4">Event Schedule</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaCalendarAlt className={`text-xl mt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div>
                <p className="font-semibold">Wednesday, 25th June 2025</p>
                <p>Press conference, players' accreditation, and technical session</p>
                <p className="text-sm italic mt-1">All coaches and players' representatives are expected to attend</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaCalendarAlt className={`text-xl mt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div>
                <p className="font-semibold">Thursday, 26th June 2025</p>
                <p>Primary School Category + Closing Ceremony</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaCalendarAlt className={`text-xl mt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div>
                <p className="font-semibold">Friday, 27th June 2025</p>
                <p>Secondary School Category + Closing Ceremony</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaCalendarAlt className={`text-xl mt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div>
                <p className="font-semibold">Saturday, 28th June 2025</p>
                <p>Tertiary Institution Category + Closing Ceremony</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Tournament Format */}
        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
          <h2 className="text-2xl font-bold mb-4">Tournament Format</h2>
          <ul className="space-y-3 list-disc pl-6">
            <li>Team-based competition (5 players per school, no reserve players)</li>
            <li>Swiss System format across 6 rounds</li>
            <li>Rapid time control: 10 minutes + 3 seconds increment</li>
            <li>Categories: Primary, Secondary and Tertiary Schools (played on separate days)</li>
            <li>Each category will have its closing ceremony on its respective game day</li>
            <li>Board medals (Gold, Silver, Bronze) will be awarded to outstanding players in each board position</li>
          </ul>
        </div>

        {/* Equipment */}
        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
          <h2 className="text-2xl font-bold mb-4">Equipment</h2>
          <div className="flex items-center gap-3 mb-4">
            <FaChessBoard className={`text-2xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <p>Chessboards and clocks will be provided on-site. Participants are not required to bring their equipment.</p>
          </div>
        </div>

        {/* Eligibility & Requirements */}
        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
          <h2 className="text-2xl font-bold mb-4">Eligibility & Requirements</h2>
          <ul className="space-y-3 list-disc pl-6">
            <li>Open to all registered schools in Nigeria</li>
            <li>Players must be current students of the participating school</li>
            <li>Valid school ID required</li>
            <li>Registration fee: ₦10,000 per team</li>
            <li>FIDE ID required for all players (will be created if players don't have one)</li>
          </ul>
        </div>

        {/* Download Regulations */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          <a 
            href="/assets/Ecobank National School Team Chess Championship 20_250512_141810.pdf"
            download
            className={`flex items-center justify-center gap-3 px-6 py-3 rounded-lg transition-colors ${
              isDarkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            <FaDownload />
            <span>Download Tournament Regulations</span>
          </a>
          <a 
            href="/assets/Ecobank School Team Chess tournament Primary Category.pdf"
            download
            className={`flex items-center justify-center gap-3 px-6 py-3 rounded-lg transition-colors ${
              isDarkMode 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            <FaDownload />
            <span>Download Primary Category Rules</span>
          </a>
        </div>
      </div>
    </div>
  );
};