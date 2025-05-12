import { useState } from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';

export const Register = () => {
  const [numPlayers, setNumPlayers] = useState(4);
  const { isDarkMode } = useDarkMode();
  
  const formVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`pt-24 min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-6 md:px-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold mb-8 text-center ${isDarkMode ? "text-white" : "text-gray-800"}`}
        >
          School Registration
        </motion.h1>

        <motion.form 
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className={`max-w-2xl mx-auto ${isDarkMode ? "bg-gray-800" : "bg-white"} p-8 rounded-xl shadow-lg`}
        >
          {/* School Information */}
          <motion.div variants={fieldVariants} className="mb-6">
            <label className={`block mb-2 font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>School Name</label>
            <input 
              type="text"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
              }`}
              placeholder="Official school name"
              required
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div variants={fieldVariants}>
              <label className={`block mb-2 font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Contact Number</label>
              <input 
                type="tel"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
                }`}
                placeholder="+234 XXX XXX XXXX"
                required
              />
            </motion.div>

            <motion.div variants={fieldVariants}>
              <label className={`block mb-2 font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>School Address</label>
              <input 
                type="text"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
                }`}
                placeholder="Full school address"
                required
              />
            </motion.div>
          </div>

          {/* Coach Information */}
          <motion.div variants={fieldVariants} className="mb-8">
            <label className={`block mb-2 font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Coach Name</label>
            <input 
              type="text"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
              }`}
              placeholder="Full name of chess coach"
              required
            />
          </motion.div>

          {/* Players Section */}
          <motion.div variants={fieldVariants} className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Players (4-5)</h3>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setNumPlayers(Math.min(5, numPlayers + 1))}
                  className={`px-3 py-1 rounded ${
                    isDarkMode 
                      ? "bg-blue-600 text-white hover:bg-blue-700" 
                      : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                  }`}
                  disabled={numPlayers >= 5}
                >
                  Add Player
                </button>
                <button
                  type="button"
                  onClick={() => setNumPlayers(Math.max(4, numPlayers - 1))}
                  className={`px-3 py-1 rounded ${
                    isDarkMode 
                      ? "bg-red-600 text-white hover:bg-red-700" 
                      : "bg-red-100 text-red-600 hover:bg-red-200"
                  }`}
                  disabled={numPlayers <= 4}
                >
                  Remove Player
                </button>
              </div>
            </div>

            {[...Array(numPlayers)].map((_, index) => (
              <div key={index} className="mb-4">
                <h4 className={`mb-2 font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Player {index + 1}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    className={`px-4 py-2 border rounded-lg ${
                      isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
                    }`}
                    placeholder="Full name"
                    required
                  />
                  <input
                    type="text"
                    className={`px-4 py-2 border rounded-lg ${
                      isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
                    }`}
                    placeholder="FIDE ID"
                    required
                  />
                  <select 
                    className={`px-4 py-2 border rounded-lg ${
                      isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
                    }`} 
                    required
                  >
                    <option value="">Select Class</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Payment Section */}
          <motion.div 
            variants={fieldVariants}
            className={`pt-6 mt-8 border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
          >
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Payment Details</h3>
            
            <div className="mb-4">
              <label className={`block mb-2 font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Payment Method</label>
              <select 
                className={`w-full px-4 py-2 border rounded-lg ${
                  isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
                }`} 
                required
              >
                <option value="">Select payment method</option>
                <option>Bank Transfer</option>
                <option>Credit/Debit Card</option>
                <option>Online Payment</option>
              </select>
            </div>

            <div className="mb-4">
              <label className={`flex items-center gap-2 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                <input type="checkbox" required />
                <span>I agree to the terms and conditions</span>
              </label>
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-lg transition-all ${
                isDarkMode 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Submit Registration (₦15,000)
            </button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
};