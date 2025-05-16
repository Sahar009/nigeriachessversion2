import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import { FaTrophy, FaChessBoard, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight,FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TournamentStatsModal } from "./TournamentStatsModal";

// Remove the imports and declare the URLs as constants
const tournamentImage1 = "https://res.cloudinary.com/do537qymc/image/upload/v1747374682/winner-primary_xrhs2s.jpg";
const tournamentImage2 = "https://res.cloudinary.com/do537qymc/image/upload/v1747374683/winnersecondary_zc5r4w.jpg";
const tournamentImage3 = "https://res.cloudinary.com/do537qymc/image/upload/v1747374682/winnertertiary_yagcjt.jpg";

export const TournamentOverview = () => {
  const { isDarkMode } = useDarkMode();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  {/* Stats Modal */}

  return (
    <>
      <div className={`py-16 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="space-y-12"
          >
            {/* Section Header with Link */}
            <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tournament Overview</h2>
              <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                The National Schools Team Chess Championship brings together the brightest young minds from across the country.
              </p>
            </motion.div>
            
            {/* Key Information Cards */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {/* Date Card */}
              <motion.div 
                variants={itemVariants}
                className={`rounded-xl p-6 shadow-lg ${
                  isDarkMode ? "bg-gray-800 hover:bg-gray-750" : "bg-pink-100 hover:bg-blue-50"
                } transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${isDarkMode ? "bg-blue-900" : "bg-blue-100"} mr-4`}>
                    <FaCalendarAlt className={`text-xl ${isDarkMode ? "text-blue-300" : "text-blue-600"}`} />
                  </div>
                  <h3 className="text-xl font-semibold">Dates</h3>
                </div>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  25th - 28th June, 2025
                </p>
              </motion.div>
              
              {/* Location Card */}
              <motion.div 
                variants={itemVariants}
                className={`rounded-xl p-6 shadow-lg ${
                  isDarkMode ? "bg-gray-800 hover:bg-gray-750" : "bg-pink-200 hover:bg-blue-50"
                } transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${isDarkMode ? "bg-blue-900" : "bg-blue-100"} mr-4`}>
                    <FaMapMarkerAlt className={`text-xl ${isDarkMode ? "text-blue-300" : "text-blue-600"}`} />
                  </div>
                  <h3 className="text-xl font-semibold">Venue</h3>
                </div>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Pan African Centre, Lagos
                </p>
              </motion.div>
              
              {/* Format Card */}
              <motion.div 
                variants={itemVariants}
                className={`rounded-xl p-6 shadow-lg ${
                  isDarkMode ? "bg-gray-800 hover:bg-gray-750" : "bg-pink-300 hover:bg-blue-50"
                } transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${isDarkMode ? "bg-blue-900" : "bg-blue-100"} mr-4`}>
                    <FaChessBoard className={`text-xl ${isDarkMode ? "text-blue-300" : "text-blue-600"}`} />
                  </div>
                  <h3 className="text-xl font-semibold">Format</h3>
                </div>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Swiss System, 6 Rounds
                </p>
              </motion.div>
              
              {/* Categories Card */}
              <motion.div 
                variants={itemVariants}
                className={`rounded-xl p-6 shadow-lg ${
                  isDarkMode ? "bg-gray-800 hover:bg-gray-750" : "bg-pink-400 hover:bg-blue-50"
                } transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${isDarkMode ? "bg-blue-900" : "bg-blue-100"} mr-4`}>
                    <FaUsers className={`text-xl ${isDarkMode ? "text-blue-300" : "text-blue-600"}`} />
                  </div>
                  <h3 className="text-xl font-semibold">Categories</h3>
                </div>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Primary, Secondary & Tertiary
                </p>
              </motion.div>
            </motion.div>
            
            {/* Image Gallery */}
            <motion.div variants={containerVariants} className="mt-8 sm:mt-16">
              <motion.h3 
                variants={itemVariants}
                className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8 text-center"
              >
                Previous Tournaments
              </motion.h3>
              
              {/* Add Stats Button */}
              <motion.div
                variants={itemVariants}
                className="text-center mb-4 sm:mb-8"
              >
                <button
                  onClick={() => setIsStatsModalOpen(true)}
                  className={`w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all ${
                    isDarkMode 
                      ? "bg-blue-500 hover:bg-blue-600" 
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white font-medium`}
                >
                  View 2024 Tournament Statistics
                </button>
              </motion.div>
  
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <motion.div 
                  variants={imageVariants}
                  whileHover={{ scale: 1.03 }}
                  className="overflow-hidden rounded-xl shadow-lg"
                >
                  <img 
                    src={tournamentImage1} 
                    alt="Students playing chess at previous tournament" 
                    className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                    <h4 className="font-bold mb-2">PRIMARY</h4>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>marvelvine Montessori School</li>
                      <li>Scholars Academy, Ibadan</li>
                      <li>Okikioluwa Junior Academy</li>
                    </ol>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={imageVariants}
                  whileHover={{ scale: 1.03 }}
                  className="overflow-hidden rounded-xl shadow-lg"
                >
                  <img 
                    src={tournamentImage2} 
                    alt="Award ceremony from last year's tournament" 
                    className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                    <h4 className="font-bold mb-2">SECONDARY</h4>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Dayspring Schools</li>
                      <li>Platform Schools</li>
                      <li>Ireti Senior Grammar School</li>
                    </ol>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={imageVariants}
                  whileHover={{ scale: 1.03 }}
                  className="overflow-hidden rounded-xl shadow-lg"
                >
                  <img 
                    src={tournamentImage3} 
                    alt="Students analyzing chess positions" 
                    className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                    <h4 className="font-bold mb-2">TERTIARY</h4>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>University of Lagos</li>
                      <li>University Of Benin</li>
                      <li>Chess in Slums Africa</li>
                    </ol>
                  </div>
                </motion.div>
              </div>
            </motion.div>
  
            {/* Register Button */}
            <motion.div variants={itemVariants} className="text-center mt-8 sm:mt-12">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_RAOv2twjRa80U0aqiScz3idEWs20zrx81I-1NXXy12olNQ/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full sm:w-auto sm:inline-block"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-medium text-base sm:text-lg ${
                    isDarkMode ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-600 hover:bg-blue-700"
                  } transition-all shadow-lg`}
                >
                  Register Your School Now
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <TournamentStatsModal 
        isOpen={isStatsModalOpen} 
        onClose={() => setIsStatsModalOpen(false)} 
      />
    </>
  );
};