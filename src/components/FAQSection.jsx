import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export const FAQSection = () => {
  const { isDarkMode } = useDarkMode();
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      id: 1,
      question: "When is the tournament?",
      answer: "The tournament takes place from June 25-28, 2025. Primary School Category on June 26th, Secondary School Category on June 27th, and Tertiary Institution Category on June 28th. Press conference and accreditation will be held on June 25th."
    },
    {
      id: 2,
      question: "Who can participate?",
      answer: "The tournament is open to all Primary, Secondary, and Tertiary institutions across Nigeria. Each institution can register multiple teams to participate in their respective categories."
    },
    {
      id: 3,
      question: "What's the team composition requirement?",
      answer: "Each team must consist of exactly 5 players. No reserve players are allowed. Teams must be from the same institution."
    },
    {
      id: 4,
      question: "How much is the registration fee?",
      answer: "The registration fee is ₦10,000 per team. This covers participation in the tournament, certificates, and access to all tournament facilities."
    },
    {
      id: 5,
      question: "What is the tournament format?",
      answer: "The tournament follows a Swiss System format with 6 rounds. Each game will be played with a time control of 10 minutes plus 3 seconds increment per move."
    },
    {
      id: 6,
      question: "Are there any equipment requirements?",
      answer: "No, all necessary chess equipment (boards, pieces, and clocks) will be provided at the venue. Players should not bring their own equipment unless specifically requested."
    },
    {
      id: 7,
      question: "Where is the tournament located?",
      answer: "The tournament will be held at the Pan African Centre, Ecobank Head Office, Plot 21, Ahmadu Bello Way, Victoria Island, Lagos State. The venue is easily accessible and provides ample parking space for participants and spectators."
    },
    {
      id: 8,
      question: "Is FIDE rating required?",
      answer: "No, a FIDE ID is not mandatory for participation. If players don't have one, it will be created during the registration process at no additional cost."
    },
    {
      id: 9,
      question: "What should participants bring?",
      answer: "Participants should bring their school ID, registration confirmation, and any necessary personal items. Lunch and refreshments will be provided."
    },
    {
      id: 10,
      question: "How can I contact the organizers?",
      answer: "You can reach us through email at nationalschoolsteamchess@gmail.com or call +234 813 369 7123. We're also available on WhatsApp at the same number."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FaQuestionCircle className={`text-4xl mx-auto mb-4 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Everything you need to know about the tournament
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {questions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between"
              >
                <span className="font-semibold">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaChevronDown className={`transform transition-transform ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className={`px-6 pb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};