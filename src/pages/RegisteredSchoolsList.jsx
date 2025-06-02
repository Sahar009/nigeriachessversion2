import { useState } from 'react';
import { schoolsData } from '../data/schoolsData';
import { useDarkMode } from '../context/DarkModeContext';
import './RegisteredSchoolsList.css';

export const RegisteredSchoolsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { isDarkMode } = useDarkMode();

  const filteredSchools = {
    primary: schoolsData.primary.filter(school => 
      school.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    secondary: schoolsData.secondary.filter(school => 
      school.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    tertiary: schoolsData.tertiary.filter(school => 
      school.toLowerCase().includes(searchTerm.toLowerCase())
    )
  };

  const handleDownload = (category) => {
    const schools = filteredSchools[category];
    const content = schools.map((school, index) => 
      `${index + 1}. ${school}`
    ).join('\n');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${category}-schools-list.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const renderSchoolsList = (schools, category) => {
    if (selectedCategory !== 'all' && selectedCategory !== category) return null;
    if (schools.length === 0) return null;

    return (
      <div className="schools-category ">
        <div className="category-header">
          <h3 className={isDarkMode ? 'dark' : ''}>
            {category.charAt(0).toUpperCase() + category.slice(1)} Schools
          </h3>
          <button 
            className={`download-btn ${isDarkMode ? 'dark' : ''}`}
            onClick={() => handleDownload(category)}
          >
            Download List
          </button>
        </div>
        <div className="schools-list">
          {schools.map((school, index) => (
            <div 
              key={index} 
              className={`school-item ${isDarkMode ? 'dark' : ''}`}
            >
              <span className="serial-number">{index + 1}.</span>
              <span className="school-name">{school}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`registered-schools-list mt-10 ${isDarkMode ? 'dark' : ''}`}>
      <div className="container">
        <h2 className={isDarkMode ? 'dark' : ''}>Registered Schools</h2>
        
        <div className="search-filter-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search schools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={isDarkMode ? 'dark' : ''}
            />
          </div>
          <div className="category-filter">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={isDarkMode ? 'dark' : ''}
            >
              <option value="all">All Categories</option>
              <option value="primary">Primary Schools</option>
              <option value="secondary">Secondary Schools</option>
              <option value="tertiary">Tertiary Institutions</option>
            </select>
          </div>
        </div>

        {renderSchoolsList(filteredSchools.primary, 'primary')}
        {renderSchoolsList(filteredSchools.secondary, 'secondary')}
        {renderSchoolsList(filteredSchools.tertiary, 'tertiary')}
      </div>
    </div>
  );
}; 