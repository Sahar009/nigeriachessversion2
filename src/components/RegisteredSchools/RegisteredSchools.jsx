import { useState } from 'react';
import { schoolsData } from '../../data/schoolsData';
import { useDarkMode } from '../../context/DarkModeContext';
import './RegisteredSchools.css';

export const RegisteredSchools = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { isDarkMode } = useDarkMode();

  // Color palette for school cards
  const cardColors = [
    'var(--card-color-1)',
    'var(--card-color-2)',
    'var(--card-color-3)',
    'var(--card-color-4)',
    'var(--card-color-5)',
    'var(--card-color-6)'
  ];

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

  const renderSchoolsList = (schools, category) => {
    if (selectedCategory !== 'all' && selectedCategory !== category) return null;
    
    return (
      <div className="schools-category">
        <h3 className={isDarkMode ? 'dark' : ''}>
          {category.charAt(0).toUpperCase() + category.slice(1)} Schools
        </h3>
        <div className="schools-grid">
          {schools.map((school, index) => (
            <div 
              key={index} 
              className={`school-card ${isDarkMode ? 'dark' : ''}`}
              style={{ 
                backgroundColor: cardColors[index % cardColors.length],
                '--hover-color': cardColors[(index + 1) % cardColors.length]
              }}
            >
              <span className="school-name">{school}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className={`registered-schools ${isDarkMode ? 'dark' : ''}`}>
      <div className="container">
        <h2 className={isDarkMode ? 'dark' : ''}>Registered Schools for 2024 Event</h2>
        
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

        <div className="schools-container">
          {renderSchoolsList(filteredSchools.primary, 'primary')}
          {renderSchoolsList(filteredSchools.secondary, 'secondary')}
          {renderSchoolsList(filteredSchools.tertiary, 'tertiary')}
        </div>
      </div>
    </section>
  );
}; 