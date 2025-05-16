import { FaWhatsapp } from 'react-icons/fa';
import { useDarkMode } from '../context/DarkModeContext';
import { motion } from 'framer-motion';

export const WhatsAppFloat = () => {
  const { isDarkMode } = useDarkMode();
  const phoneNumber = '2348133697123'; 
  const message = 'Hello! I would like to know more about the Chess Championship.';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg ${
        isDarkMode 
          ? 'bg-green-600 text-white' 
          : 'bg-green-500 text-white'
      }`}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0px 0px 8px rgba(0,0,0,0.3)"
      }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl" />
      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
        1
      </span>
    </motion.button>
  );
};