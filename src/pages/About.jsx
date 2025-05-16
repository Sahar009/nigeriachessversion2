import { useDarkMode } from '../context/DarkModeContext';
import { FaChessKing, FaTrophy, FaUsers, FaGraduationCap } from 'react-icons/fa';

export const About = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`pt-24 min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="container mx-auto px-6 md:px-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <FaChessKing className={`mx-auto text-5xl mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h1 className="text-4xl font-bold mb-4">About The Championship</h1>
          <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Welcome to the 2025 Ecobank National Schools' Team Chess Championship
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-2xl font-bold mb-4">Tournament Overview</h2>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              The Ecobank National Schools' Team Chess Championship is Nigeria's premier scholastic chess event, 
              bringing together talented young players from schools across the nation. This prestigious tournament 
              will take place from June 26th to June 28th, 2025, showcasing the best young chess talents in Nigeria.
            </p>
          </div>

          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our mission is to promote chess education in Nigerian schools, develop young talents, and create 
              a competitive platform that fosters strategic thinking, sportsmanship, and academic excellence 
              through the royal game of chess.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className={`text-center p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <FaTrophy className={`mx-auto text-4xl mb-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
            <h3 className="text-xl font-bold mb-2">Championship Format</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Team-based competition featuring 5 players per school, promoting collaborative strategy and team spirit.
            </p>
          </div>

          <div className={`text-center p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <FaUsers className={`mx-auto text-4xl mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h3 className="text-xl font-bold mb-2">Participation</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Open to schools nationwide, fostering national unity and competitive excellence in chess.
            </p>
          </div>

          <div className={`text-center p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <FaGraduationCap className={`mx-auto text-4xl mb-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
            <h3 className="text-xl font-bold mb-2">Educational Impact</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Developing critical thinking, problem-solving, and strategic planning skills among students.
            </p>
          </div>
        </div>

        {/* Partners Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-8">Our Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <p className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Proudly supported by Ecobank, FIDE, and the Nigeria Chess Federation (NCF)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};