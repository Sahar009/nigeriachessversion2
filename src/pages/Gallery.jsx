import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { FaTimes, FaChessKing } from 'react-icons/fa';

export const Gallery = () => {
  const { isDarkMode } = useDarkMode();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Championship Finals 2023",
      category: "Tournaments",
      image: "/images/gallery/tournament1.jpg",
      description: "Final match of the 2023 National Schools Chess Championship"
    },
    {
      id: 2,
      title: "Youth Training Session",
      category: "Training",
      image: "/images/gallery/training1.jpg",
      description: "Young players learning advanced strategies"
    },
    {
      id: 3,
      title: "Grandmaster Workshop",
      category: "Events",
      image: "/images/gallery/workshop1.jpg",
      description: "Special workshop conducted by International Grandmaster"
    },
    {
        id: 4,
        title: "Grandmaster Workshop",
        category: "Events",
        image: "/images/gallery/workshop1.jpg",
        description: "Special workshop conducted by International Grandmaster"
      },
      {
        id: 5,
        title: "Grandmaster Workshop",
        category: "Events",
        image: "/images/gallery/workshop1.jpg",
        description: "Special workshop conducted by International Grandmaster"
      },
      {
        id: 6,
        title: "Grandmaster Workshop",
        category: "Events",
        image: "/images/gallery/workshop1.jpg",
        description: "Special workshop conducted by International Grandmaster"
      },
      {
        id: 7,
        title: "Grandmaster Workshop",
        category: "Events",
        image: "/images/gallery/workshop1.jpg",
        description: "Special workshop conducted by International Grandmaster"
      },
      {
        id: 8,
        title: "Grandmaster Workshop",
        category: "Events",
        image: "/images/gallery/workshop1.jpg",
        description: "Special workshop conducted by International Grandmaster"
      },
      {
        id: 9,
        title: "Grandmaster Workshop",
        category: "Events",
        image: "/images/gallery/workshop1.jpg",
        description: "Special workshop conducted by International Grandmaster"
      },
      {
        id: 10,
        title: "Grandmaster Workshop",
        category: "Events",
        image: "/images/gallery/workshop1.jpg",
        description: "Special workshop conducted by International Grandmaster"
      },
    // Add more gallery items as needed
  ];

  const categories = ["All", "Tournaments", "Training", "Events"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className={`min-h-screen pt-20 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}>
      {/* Header Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <FaChessKing className={`mx-auto text-5xl mb-4 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
          <h1 className="text-4xl font-bold mb-4">Championship Gallery</h1>
          <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Capturing moments of excellence in Nigerian school chess
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? isDarkMode
                    ? "bg-blue-600 text-white"
                    : "bg-blue-600 text-white"
                  : isDarkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`rounded-lg overflow-hidden shadow-lg ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div 
                className="relative h-64 cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.description}`}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute bottom-0 left-0 right-0 p-4 ${
                  isDarkMode 
                    ? "bg-gradient-to-t from-gray-900 to-transparent"
                    : "bg-gradient-to-t from-black/60 to-transparent"
                }`}>
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
              >
                <FaTimes />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-white">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="mt-2">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};