import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import { FaTimes, FaSchool, FaTrophy, FaChessBoard, FaMapMarkerAlt, FaUser, FaUserTie, FaUsers, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import schoolData from "../data/schools2025.json";

export const TournamentStatsModal2025 = ({ isOpen, onClose }) => {
  const { isDarkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState('statistics');
  const [activeCategory, setActiveCategory] = useState('Primary');
  const [expandedSchool, setExpandedSchool] = useState(null);

  // Define categories based on the JSON structure
  const categories = [
    { id: 'Primary', name: 'Primary Schools' },
    { id: 'Secondary', name: 'Secondary Schools' },
    { id: 'Tertiary', name: 'Tertiary Institutions' }
  ];

  // Statistics from the 2025 data
  const statistics = {
    totalSchools: schoolData.Primary?.length - 1 + schoolData.Secondary?.length - 1 + schoolData.Tertiary?.length - 1 || 0,
    regions: {}
  };
  
  // Extract regions from the data
  const extractRegions = () => {
    const regions = {};
    
    const processCategory = (category) => {
      if (!schoolData[category]) return;
      
      // Skip the header row
      const schools = schoolData[category].slice(1);
      
      schools.forEach(school => {
        const region = school['Unnamed: 2'];
        if (region) {
          regions[region] = (regions[region] || 0) + 1;
        }
      });
    };
    
    categories.forEach(cat => processCategory(cat.id));
    return regions;
  };
  
  statistics.regions = extractRegions();

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const tabVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const getSchoolsForCategory = (category) => {
    // Skip the first item as it contains headers
    const schools = schoolData[category] || [];
    return Array.isArray(schools) ? schools.slice(1) : [];
  };

  const getTeamMembers = (school) => {
    const players = [];
    // Get players from Unnamed: 3 to Unnamed: 7
    for (let i = 3; i <= 7; i++) {
      const player = school[`Unnamed: ${i}`];
      if (player && player.trim() !== '') {
        players.push(player.trim());
      }
    }
    return players;
  };

  const toggleSchool = (schoolName) => {
    setExpandedSchool(expandedSchool === schoolName ? null : schoolName);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className={`relative w-full max-w-full sm:max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg sm:rounded-2xl shadow-2xl ${
              isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            }`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Modal Header */}
            <div className={`px-6 py-4 border-b ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">2025 Tournament Overview</h2>
                <button
                  onClick={onClose}
                  className={`p-2 rounded-full hover:bg-opacity-10 ${
                    isDarkMode ? "hover:bg-white" : "hover:bg-black"
                  }`}
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                <button
                  onClick={() => setActiveTab('statistics')}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg transition-colors ${
                    activeTab === 'statistics'
                      ? isDarkMode
                        ? "bg-blue-600 text-white"
                        : "bg-blue-500 text-white"
                      : isDarkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Statistics
                </button>
                <button
                  onClick={() => setActiveTab('schools')}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg transition-colors ${
                    activeTab === 'schools'
                      ? isDarkMode
                        ? "bg-blue-600 text-white"
                        : "bg-blue-500 text-white"
                      : isDarkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Participating Schools
                </button>
              </div>

              {/* Statistics Tab */}
              <AnimatePresence mode="wait">
                {activeTab === 'statistics' && (
                  <motion.div
                    key="statistics"
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {/* Total Schools Card */}
                    <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                      <div className="flex items-center mb-4">
                        <FaSchool className={`text-3xl ${isDarkMode ? "text-blue-400" : "text-blue-500"} mr-3`} />
                        <h3 className="text-xl font-semibold">Total Schools</h3>
                      </div>
                      <p className="text-4xl font-bold">{statistics.totalSchools}</p>
                    </div>

                    {/* Regional Distribution */}
                    <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                      <div className="flex items-center mb-4">
                        <FaMapMarkerAlt className={`text-3xl ${isDarkMode ? "text-blue-400" : "text-blue-500"} mr-3`} />
                        <h3 className="text-xl font-semibold">Regional Distribution</h3>
                      </div>
                      <ul>
                        {Object.keys(statistics.regions).map((region, index) => (
                          <li key={index} className="py-2">
                            <span className="text-lg font-bold">{region}</span>: {statistics.regions[region]}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Schools Tab */}
                {activeTab === 'schools' && (
                  <motion.div
                    key="schools"
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="grid grid-cols-1 gap-6"
                  >
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {categories.map((category, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveCategory(category.id)}
                          className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg transition-colors ${
                            activeCategory === category.id
                              ? isDarkMode
                                ? "bg-blue-600 text-white"
                                : "bg-blue-500 text-white"
                              : isDarkMode
                              ? "text-gray-300 hover:bg-gray-700"
                              : "text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>

                    {/* Schools List */}
                    <div className="grid grid-cols-1 gap-6">
                      {getSchoolsForCategory(activeCategory).map((school, index) => (
                        <div key={index} className={`p-4 sm:p-6 rounded-lg sm:rounded-xl ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                          <div className="flex items-start mb-3 sm:mb-4">
                            <FaSchool className={`text-2xl sm:text-3xl ${isDarkMode ? "text-blue-400" : "text-blue-500"} mr-2 sm:mr-3 mt-1`} />
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg sm:text-xl font-semibold truncate">{school['Unnamed: 1'] || 'Unnamed School'}</h3>
                              {school['Unnamed: 2'] && (
                                <p className="text-xs sm:text-sm text-gray-500 truncate">{school['Unnamed: 2']}</p>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              {school['Unnamed: 8'] && (
                                <p className="text-xs sm:text-sm truncate">
                                  <span className="font-medium">Coach:</span> {school['Unnamed: 8']}
                                </p>
                              )}
                            </div>
                            <button
                              onClick={() => toggleSchool(school['Unnamed: 1'] || index.toString())}
                              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg transition-colors whitespace-nowrap ${
                                expandedSchool === (school['Unnamed: 1'] || index.toString())
                                  ? isDarkMode
                                    ? "bg-blue-600 text-white"
                                    : "bg-blue-500 text-white"
                                  : isDarkMode
                                  ? "text-gray-300 hover:bg-gray-700"
                                  : "text-gray-600 hover:bg-gray-100"
                              }`}
                            >
                              {expandedSchool === (school['Unnamed: 1'] || index.toString()) ? 'Hide Team' : 'Show Team'}
                            </button>
                          </div>
                          {expandedSchool === (school['Unnamed: 1'] || index.toString()) && (
                            <div className="mt-4 sm:mt-6">
                              <h4 className="text-base sm:text-lg font-bold mb-2">Team Members:</h4>
                              <ul className="space-y-1 sm:space-y-2">
                                {getTeamMembers(school).map((player, index) => (
                                  <li key={index} className="py-0.5 sm:py-1 pl-2 border-l-4 border-blue-400 text-sm sm:text-base">
                                    {player}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
