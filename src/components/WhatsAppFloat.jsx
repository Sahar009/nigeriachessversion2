import { FaWhatsapp } from 'react-icons/fa';
import { useDarkMode } from '../context/DarkModeContext';

export const WhatsAppFloat = () => {
  const { isDarkMode } = useDarkMode();
  const phoneNumber = "+2348133697123"
  const message = 'Hello! I would like to know more about the Chess Championship.';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
        isDarkMode 
          ? 'bg-green-600 hover:bg-green-700' 
          : 'bg-green-500 hover:bg-green-600'
      }`}
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </button>
  );
};