import { useState, useEffect } from "react";
import { SliderImg } from "../components/sliderprops";
import { GiChessKing, GiChessQueen } from "react-icons/gi";
import { SponsorsSection } from "../components/SponsorsSection";
import { useDarkMode } from "../context/DarkModeContext";
import { TournamentOverview } from "../components/TournamentOverview";
import { NewsSection } from "../components/NewsSection";
import { BenefitsSection } from "../components/BenefitsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { Link } from 'react-router-dom';

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
  const sliderImages = SliderImg.slice(2,11);
  
  // Function to handle manual navigation
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };
  
  return (
    <>
      <main className={`pt-24 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <article className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-8 md:py-12">
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
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_RAOv2twjRa80U0aqiScz3idEWs20zrx81I-1NXXy12olNQ/viewform" target="_blank" rel="noopener noreferrer">
                  <button className={`px-6 py-3 rounded-lg transition-all text-white font-medium ${
                    isDarkMode 
                      ? "bg-blue-500 hover:bg-blue-600" 
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}>
                    Register Schools
                  </button>
                </a>
                <Link to="/tournament-details">
                  <button className={`px-6 py-3 rounded-lg transition-all font-medium ${
                    isDarkMode 
                      ? "border border-gray-600 text-gray-200 hover:bg-gray-800" 
                      : "border border-dark-gray hover:bg-gray-100"
                  }`}>
                    Tournament Details
                  </button>
                </Link>
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
        </article>
      </main>
      
      {/* Video Section */}
      <section className={`py-16 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Watch Our Tournament Highlights
            </h2>
            <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Experience the excitement and intensity of our chess championships
            </p>
          </div>
          
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://res.cloudinary.com/do537qymc/video/upload/v1747139769/WhatsApp_Video_2024-05-28_at_20.41.16_7b82ad10_nhopfx.mp4"
              title="Chess Championship Highlights"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <div className={isDarkMode ? "bg-gray-800" : ""}>
        <SponsorsSection />
      </div>
      <TournamentOverview />

      <BenefitsSection/>
      <NewsSection/>
      <TestimonialsSection/>
     
    </>
  );
};