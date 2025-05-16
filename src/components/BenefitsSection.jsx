import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import { FaBrain, FaUsers, FaTrophy, FaGraduationCap } from "react-icons/fa";

export const BenefitsSection = () => {
  const { isDarkMode } = useDarkMode();

  const benefits = [
    {
      icon: <FaBrain />,
      title: "Cognitive Development",
      description: "Chess enhances problem-solving skills, critical thinking, and memory retention",
      video: "/videos/cognitive.mp4" // Add your video file
    },
    {
      icon: <FaUsers />,
      title: "Social Skills",
      description: "Players develop sportsmanship, teamwork, and communication abilities",
      video: "/videos/social.mp4" // Add your video file
    },
    {
      icon: <FaTrophy />,
      title: "Competitive Spirit",
      description: "Learn to handle pressure, set goals, and strive for excellence",
      video: "/videos/competitive.mp4" // Add your video file
    },
    {
      icon: <FaGraduationCap />,
      title: "Academic Performance",
      description: "Chess players often show improved concentration and academic results",
      video: "/videos/academic.mp4" // Add your video file
    }
  ];

  return (
    <section className={`py-8 sm:py-16 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Why Participate?
          </h2>
          <p className={`max-w-2xl mx-auto text-sm sm:text-base ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Discover the many benefits of participating in the National Schools Team Chess Championship
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-xl ${
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              {/* Video Background */}
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={benefit.video} type="video/mp4" />
              </video>

              <div className="relative p-4 sm:p-8 z-10 backdrop-blur-sm">
                <div className={`text-4xl sm:text-5xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{benefit.title}</h3>
                <p className={`text-sm sm:text-base ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};