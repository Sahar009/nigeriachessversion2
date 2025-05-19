import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { Link } from 'react-router-dom';
import { FaChessKnight } from 'react-icons/fa';

export const NotFound = () => {
  const { isDarkMode } = useDarkMode();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <motion.div 
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <FaChessKnight className={`mx-auto text-9xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
        </motion.div>
        <motion.h1 
          className={`text-6xl font-bold mt-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
          variants={itemVariants}
        >
          404
        </motion.h1>
        <motion.p 
          className={`text-xl mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          variants={itemVariants}
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-8">
          <Link 
            to="/"
            className={`inline-block px-6 py-3 rounded-lg transition-colors ${
              isDarkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            Return to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};