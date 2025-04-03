import { useState, useEffect } from "react";
import { SliderImg } from "../components/sliderprops";
import { GiChessKing, GiChessQueen } from "react-icons/gi";
import { SponsorsSection } from "../components/SponsorsSection";
import { useDarkMode } from "../context/DarkModeContext";
import { TournamentOverview } from "../components/TournamentOverview";

export const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { isDarkMode } = useDarkMode();
  
  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 4 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Use only the first 5 images from the SliderImg array
  const sliderImages = SliderImg.slice(0, 5);
  
  // Function to handle manual navigation
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };
  
  return (
    <>
      <div className={`pt-24 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Text Content - Left Side */}
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                National Schools Team Chess Championship
              </h1>
              <p className={`text-base sm:text-lg font-medium ${isDarkMode ? "text-blue-300" : "text-blue-600"}`}>
                Proudly sponsored by Ecobank
              </p>
              <div className="space-y-3">
                <p className={`text-sm sm:text-base ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Join the most prestigious scholastic chess competition in the country.
                </p>
                <p className={`text-sm sm:text-base ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Develop strategic thinking, boost academic performance, and compete for amazing prizes!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className={`px-6 py-3 rounded-lg transition-all text-white font-medium ${
                  isDarkMode 
                    ? "bg-blue-500 hover:bg-blue-600" 
                    : "bg-blue-600 hover:bg-blue-700"
                }`}>
                  Register Schools
                </button>
                <button className={`px-6 py-3 rounded-lg transition-all font-medium ${
                  isDarkMode 
                    ? "border border-gray-600 text-gray-200 hover:bg-gray-800" 
                    : "border border-dark-gray hover:bg-gray-100"
                }`}>
                  Tournament Details
                </button>
              </div>
            </div>
            
            {/* Image Slider - Right Side */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="relative overflow-hidden rounded-lg shadow-lg h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                {/* Chess King Icon - Top Right */}
                <div className="absolute top-4 right-4 z-10">
                  <GiChessKing className="text-3xl sm:text-4xl drop-shadow-lg animate-color-change-king" />
                </div>
                
                {/* Chess Queen Icon - Bottom Left */}
                <div className="absolute bottom-4 left-4 z-10">
                  <GiChessQueen className="text-3xl sm:text-4xl drop-shadow-lg animate-color-change-queen" />
                </div>
                
                {sliderImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Chess tournament ${index + 1}`} 
                      className={`w-full h-full object-cover ${isDarkMode ? "brightness-90" : ""}`}
                    />
                  </div>
                ))}
              </div>
              
              {/* Navigation Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? isDarkMode ? "bg-blue-500 w-5 sm:w-6" : "bg-blue-600 w-5 sm:w-6" 
                        : isDarkMode ? "bg-gray-600 hover:bg-gray-500" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sponsors Section */}
      <div className={isDarkMode ? "bg-gray-800" : ""}>
        <SponsorsSection />
      </div>
      <TournamentOverview />
    </>
  );
}; 