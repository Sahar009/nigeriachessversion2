import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import { FaTrophy, FaChessBoard, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// Import images (update paths to your actual images)
import tournamentImage1 from "../assets/winner-primary.jpeg";
import tournamentImage2 from "../assets/winnersecondary.jpeg";
import tournamentImage3 from "../assets/winnertertiary.jpeg";

export const TournamentOverview = () => {
  const { isDarkMode } = useDarkMode();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
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

  return (
    <div className={`py-16 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tournament Overview</h2>
            <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              The National Schools Team Chess Championship brings together the brightest young minds from across the country in a celebration of strategy, intellect, and sportsmanship.
            </p>
          </motion.div>
          
          {/* Key Information Cards */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                September 15-18, 2024
              </p>
              <p className={`mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                Registration closes August 31, 2024
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
                Ecobank Conference Center
              </p>
              <p className={`mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                Independence Avenue, Accra
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
                Swiss System, 7 Rounds
              </p>
              <p className={`mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                Teams of 4 players + 1 reserve
              </p>
            </motion.div>
            
            {/* Prizes Card */}
            <motion.div 
              variants={itemVariants}
              className={`rounded-xl p-6 shadow-lg ${
                isDarkMode ? "bg-gray-800 hover:bg-gray-750" : "bg-pink-400 hover:bg-blue-50"
              } transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full ${isDarkMode ? "bg-blue-900" : "bg-blue-100"} mr-4`}>
                  <FaTrophy className={`text-xl ${isDarkMode ? "text-blue-300" : "text-blue-600"}`} />
                </div>
                <h3 className="text-xl font-semibold">Prizes</h3>
              </div>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                Over $5,000 in total prizes
              </p>
              <p className={`mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                Trophies, medals, and chess equipment
              </p>
            </motion.div>
          </motion.div>
          
          {/* Image Gallery */}
          <motion.div variants={containerVariants} className="mt-16">
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-center"
            >
              Previous Tournaments
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              </motion.div>
            </div>
          </motion.div>
          
          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-lg text-white font-medium text-lg ${
                isDarkMode ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-600 hover:bg-blue-700"
              } transition-all shadow-lg`}
            >
              Register Your School Now
            </motion.button>
            <p className={`mt-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              Limited spots available. Don't miss this opportunity!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}; 