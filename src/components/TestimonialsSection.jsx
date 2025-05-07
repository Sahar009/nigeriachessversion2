import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import { FaQuoteLeft } from "react-icons/fa";

export const TestimonialsSection = () => {
  const { isDarkMode } = useDarkMode();

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "School Chess Team Captain",
      quote: "Participating in the championship was a life-changing experience. The competition helped me develop not just as a chess player, but as a leader.",
      school: "Victory International School"
    },
    {
      id: 2,
      name: "Michael Adebayo",
      role: "Chess Coach",
      quote: "The organization and level of competition at this championship is outstanding. It's the perfect platform for young talents to showcase their skills.",
      school: "Kings College"
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Parent",
      quote: "Watching my child grow through chess has been amazing. This championship provides excellent exposure and learning opportunities.",
      school: "Greenfield Academy"
    }
  ];

  return (
    <section className={`py-16 ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What People Say</h2>
          <p className={`max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Hear from our past participants and their experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg ${
                isDarkMode ? "bg-gray-700" : "bg-white"
              } shadow-lg`}
            >
              <FaQuoteLeft className={`text-3xl mb-4 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
              <p className={`mb-4 italic ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                "{testimonial.quote}"
              </p>
              <div className="mt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {testimonial.role}
                </p>
                <p className={`text-sm ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                  {testimonial.school}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};