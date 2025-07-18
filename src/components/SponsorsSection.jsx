import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import { useState, useEffect } from "react";

// Import sponsor logos
import ecobankLogo from "../assets/image/sponsors/ecobank.png";
import fidelogo from '../assets/image/sponsors/fide.png';
import ncflogo from '../assets/image/sponsors/ncf old.png';
import schoolLogo from "../assets/image/sponsors/schoolmate.jpg"
import mtnLogo from "../assets/image/sponsors/mtn.png"



export const SponsorsSection = () => {
  const { isDarkMode } = useDarkMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const sponsors = [
    { id: 1, name: "Ecobank", logo: ecobankLogo },
    { id: 2, name: "MTN", logo: mtnLogo},
    { id: 3, name: "FIDE", logo: fidelogo},
    { id: 4, name: "NCF", logo: ncflogo},
    { id: 5, name: "SCHOOL", logo: schoolLogo},
    
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
    }, 3000); // Change logo every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: { x: 1000, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -1000, opacity: 0 },
  };

  return (
    <div className={`py-10 ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-black"}`}>
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-8">Our Sponsors</h2>
        
        <div className="overflow-hidden relative h-40">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className={`absolute left-0 right-0 mx-auto flex-shrink-0 w-48 h-40 rounded-lg shadow-sm flex items-center justify-center p-4 ${
                isDarkMode ? "bg-gray-700" : "bg-white"
              }`}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: "easeInOut"
              }}
            >
              <img 
                src={sponsors[currentIndex].logo} 
                alt={`${sponsors[currentIndex].name} logo`} 
                className={`max-w-full max-h-full object-contain mx-auto ${isDarkMode ? "brightness-110" : ""}`}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};