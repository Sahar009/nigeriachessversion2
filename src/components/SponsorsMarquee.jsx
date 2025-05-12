import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

// Import sponsor logos (you'll need to replace these with your actual sponsor logos)
import ecobankLogo from "../assets/image/sponsors/ecobank.png";
import fidelogo from '../assets/image/sponsors/fide';
// Add more sponsor logos as needed

export const SponsorsMarquee = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  // You can replace these with your actual sponsor logos
  const sponsors = [
    { id: 1, name: "Ecobank", logo: ecobankLogo },
    { id: 2, name: "Sponsor 2", logo: fidelogo },
    { id: 3, name: "Sponsor 3", logo: ecobankLogo },
    // { id: 4, name: "Sponsor 4", logo: ecobankLogo },
    // { id: 5, name: "Sponsor 5", logo: ecobankLogo },
    // { id: 6, name: "Sponsor 6", logo: ecobankLogo },
    // // Duplicate sponsors to ensure continuous flow
    // { id: 7, name: "Ecobank", logo: ecobankLogo },
    // { id: 8, name: "Sponsor 2", logo: ecobankLogo },
    // { id: 9, name: "Sponsor 3", logo: ecobankLogo },
  ];

  return (
    <div className="bg-gray-50 py-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-8">Our Sponsors</h2>
        
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center space-x-16"
            variants={marqueeVariants}
            animate="animate"
          >
            {sponsors.map((sponsor) => (
              <div 
                key={sponsor.id} 
                className="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-4"
              >
                <img 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} logo`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 