import { useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";

// Import sponsor logos (you'll need to replace these with your actual sponsor logos)
import ecobankLogo from "../assets/image/sponsors/ecobank.png";
import fidelogo from '../assets/image/sponsors/fide.png';
// Add more sponsor logos as needed

export const SponsorsSection = () => {
  const { isDarkMode } = useDarkMode();
  const marqueeRef = useRef(null);
  const speedSpring = useSpring(1, { damping: 40, stiffness: 90, mass: 5 });

  // You can replace these with your actual sponsor logos
  const sponsors = [
    { id: 1, name: "Ecobank", logo: ecobankLogo },
    { id: 2, name: "Sponsor 2", logo: fidelogo}
    // { id: 3, name: "Sponsor 3", logo: ecobankLogo },
    // { id: 4, name: "Sponsor 4", logo: ecobankLogo },
    // { id: 5, name: "Sponsor 5", logo: ecobankLogo },
    // { id: 6, name: "Sponsor 6", logo: ecobankLogo },
    // // Duplicate for continuous flow
    // { id: 7, name: "Ecobank", logo: ecobankLogo },
    // { id: 8, name: "Sponsor 2", logo: ecobankLogo },
    // { id: 9, name: "Sponsor 3", logo: ecobankLogo },
  ];

  // Simple marquee animation
  const marqueeVariants = {
    animate: {
      x: [0, -1500],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className={`py-10 ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-black"}`}>
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-8">Our Sponsors</h2>
        
        <div className="overflow-hidden" ref={marqueeRef}>
          <motion.div
            className="flex items-center"
            variants={marqueeVariants}
            animate="animate"
          >
            {sponsors.map((sponsor) => (
              <div 
                key={sponsor.id} 
                className={`mx-8 flex-shrink-0 w-32 h-20 rounded-lg shadow-sm flex items-center justify-center p-4 ${
                  isDarkMode ? "bg-gray-700" : "bg-white"
                }`}
              >
                <img 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} logo`} 
                  className={`max-w-full max-h-full object-contain ${isDarkMode ? "brightness-110" : ""}`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 