import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

export const TournamentResults = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Tournament Results</h1>
        <button><a href="https://chess-results.com/tnr1194716.aspx?lan=1&art=0" target='blank'>click here to open in external browser </a></button>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-600">
            <div className={`h-full w-full rounded-lg overflow-hidden ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <iframe
                src="https://chess-results.com/tnr1194716.aspx?lan=1&art=0"
                width="100%"
                height="800"
                title="Tournament Results"
                className="border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
