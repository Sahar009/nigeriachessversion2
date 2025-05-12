import { useDarkMode } from '../context/DarkModeContext';
import { FaChessKing, FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaDownload } from 'react-icons/fa';

export const TournamentDetails = () => {
  const { isDarkMode } = useDarkMode();

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
                <h3 className="font-semibold">Date</h3>
                <p>June 26th - 28th, 2025</p>
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
              <FaTrophy className={`text-2xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div>
                <h3 className="font-semibold">Prize Pool</h3>
                <p>₦1,000,000+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tournament Format */}
        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
          <h2 className="text-2xl font-bold mb-4">Tournament Format</h2>
          <ul className="space-y-3 list-disc pl-6">
            <li>Team-based competition (4-5 players per school)</li>
            <li>Swiss System format</li>
            <li>FIDE rated matches</li>
            <li>Time control: 90 minutes + 30 seconds increment</li>
            <li>Categories: Primary and Secondary Schools</li>
          </ul>
        </div>

        {/* Eligibility & Requirements */}
        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
          <h2 className="text-2xl font-bold mb-4">Eligibility & Requirements</h2>
          <ul className="space-y-3 list-disc pl-6">
            <li>Open to all registered schools in Nigeria</li>
            <li>Players must be current students of the participating school</li>
            <li>Valid school ID required</li>
            <li>Registration fee: ₦15,000 per team</li>
            <li>FIDE ID required for all players</li>
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