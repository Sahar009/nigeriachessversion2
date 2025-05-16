import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import { FaTimes, FaSchool, FaTrophy, FaChessBoard, FaMapMarkerAlt, FaUser, FaUserTie,FaUsers,FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import schoolData from "../data/schools.json";

export const TournamentStatsModal = ({ isOpen, onClose }) => {
  const { isDarkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState('statistics');
  const [activeCategory, setActiveCategory] = useState('Primary');
  const [expandedSchool, setExpandedSchool] = useState(null);

  // Statistics from the Excel data
  const statistics = {
    totalSchools:245,
    regions: {
        Lagos: 176,
        Ogun: 18,
        Oyo: 16,
        FCT: 4,
        Osun: 3,
        Edo: 3,
        Ondo: 3,
        Anambra: 3,
        AkwaIbom: 3,
        Gombe: 2,   
        Ekiti: 2,
        Niger: 2,
        Kaduna: 2,
        Plateau: 1,
        Bayelsa: 1,
        Delta: 1,
        Ebonyi: 1,
        Imo: 1,
        Kogi: 1,
        Kwara: 1,
        CrossRiver: 1
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const tabVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const getSchoolsForCategory = (category) => {
    if (!schoolData[category]) return [];
    return schoolData[category].slice(1).filter(school => 
      school["ECOBANK NATIONAL SCHOOLS TEAM CHESS CHAMPIONSHIP 2024 - " + category.toUpperCase()] !== undefined
    );
  };

  const getTeamMembers = (school) => {
    const players = [];
    for (let i = 2; i <= 6; i++) {
      const key = `__EMPTY_${i}`;
      if (school[key]) {
        players.push(school[key]);
      }
    }
    return players;
  };

  const getCoach = (school) => {
    return school.__EMPTY_7 || 'Not specified';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`w-full max-w-4xl rounded-2xl shadow-2xl ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            } overflow-hidden`}
          >
            {/* Modal Header */}
            <div className={`px-6 py-4 border-b ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">2024 Tournament Overview</h2>
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
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => setActiveTab('statistics')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
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
                  className={`px-4 py-2 rounded-lg transition-colors ${
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
                      <div className="max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
                        <div className="space-y-2">
                          {Object.entries(statistics.regions).map(([region, count]) => (
                            <div key={region} className="flex justify-between items-center">
                              <span>{region}</span>
                              <span className="font-semibold">{count} schools</span>
                            </div>
                          ))}
                        </div>
                      </div>
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
                    className="space-y-6"
                  >
                    {/* Category Selection */}
                    <div className="flex space-x-4 mb-6">
                      {['Primary', 'Secondary', 'Tertiary'].map((category) => (
                        <button
                          key={category}
                          onClick={() => setActiveCategory(category)}
                          className={`px-4 py-2 rounded-lg transition-colors ${
                            activeCategory === category
                              ? isDarkMode
                                ? "bg-blue-600 text-white"
                                : "bg-blue-500 text-white"
                              : isDarkMode
                              ? "text-gray-300 hover:bg-gray-700"
                              : "text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>

                    {/* Schools List */}
                    <div className={`max-h-[60vh] overflow-y-auto ${
                      isDarkMode ? "scrollbar-dark" : "scrollbar-light"
                    }`}>
                      <div className="grid gap-4">
                        {schoolData[activeCategory]?.slice(1).map((school, index) => (
                          <div
                            key={index}
                            className={`p-6 rounded-lg ${
                              isDarkMode ? "bg-gray-700" : "bg-gray-50"
                            } cursor-pointer transition-all duration-300`}
                            onClick={() => setExpandedSchool(expandedSchool === index ? null : index)}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-xl font-semibold">{school.__EMPTY}</h3>
                                <p className={`text-sm ${
                                  isDarkMode ? "text-gray-300" : "text-gray-600"
                                }`}>
                                  {school.__EMPTY_1}
                                </p>
                              </div>
                              <motion.div
                                animate={{ rotate: expandedSchool === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <FaChevronDown className={`text-xl ${
                                  isDarkMode ? "text-gray-300" : "text-gray-600"
                                }`} />
                              </motion.div>
                            </div>

                            <AnimatePresence>
                              {expandedSchool === index && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden mt-4"
                                >
                                  <div className={`pt-4 border-t ${
                                    isDarkMode ? "border-gray-600" : "border-gray-200"
                                  }`}>
                                    {/* Coach */}
                                    <div className="mb-4">
                                      <div className="flex items-center gap-2">
                                        <FaUserTie className={
                                          isDarkMode ? "text-blue-400" : "text-blue-500"
                                        } />
                                        <span className="font-semibold">Coach/Tutor:</span>
                                        <span>{getCoach(school)}</span>
                                      </div>
                                    </div>

                                    {/* Players */}
                                    <div>
                                      <div className="flex items-center gap-2 mb-3">
                                        <FaUsers className={
                                          isDarkMode ? "text-blue-400" : "text-blue-500"
                                        } />
                                        <span className="font-semibold">Players:</span>
                                      </div>
                                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-6">
                                        {getTeamMembers(school).map((player, playerIndex) => (
                                          <li 
                                            key={playerIndex}
                                            className="flex items-center gap-2"
                                          >
                                            <FaUser className={`text-sm ${
                                              isDarkMode ? "text-blue-400" : "text-blue-500"
                                            }`} />
                                            <span>{player}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
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