import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import { FaNewspaper } from "react-icons/fa";

export const NewsSection = () => {
  const { isDarkMode } = useDarkMode();

  const news = [
    {
      id: 1,
      title: "Registration Now Open",
      date: "July 1, 2024",
      content: "Registration for the National Schools Team Chess Championship 2024 is now open. Early bird discounts available until July 31st.",
      image: "/images/news/registration.jpg"
    },
    {
      id: 2,
      title: "New Tournament Format",
      date: "June 28, 2024",
      content: "This year's championship will feature an improved Swiss System format with additional rounds for better competition.",
      image: "/images/news/tournament.jpg"
    },
    {
      id: 3,
      title: "Special Guest Announcement",
      date: "June 25, 2024",
      content: "International Grandmaster will be attending the championship as a special guest and commentator.",
      image: "/images/news/grandmaster.jpg"
    }
  ];

  return (
    <section className={`py-16 ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <FaNewspaper className={`mx-auto text-4xl mb-4 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
          <h2 className="text-3xl font-bold mb-4">Latest News & Updates</h2>
          <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Stay updated with the latest announcements and news about the championship
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className={`overflow-hidden rounded-lg shadow-lg ${
                isDarkMode ? "bg-gray-700" : "bg-white"
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute bottom-0 left-0 right-0 p-4 ${
                  isDarkMode 
                    ? "bg-gradient-to-t from-gray-900 to-transparent" 
                    : "bg-gradient-to-t from-white to-transparent"
                }`}>
                  <p className={`text-sm ${isDarkMode ? "text-blue-300" : "text-blue-600"}`}>
                    {item.date}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {item.content}
                </p>
                <button className={`mt-4 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isDarkMode 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "bg-blue-100 hover:bg-blue-200 text-blue-600"
                }`}>
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};