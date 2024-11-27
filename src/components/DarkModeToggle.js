import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './DarkModeToggle.css';

const DarkModeToggle = ({ isDark, toggleDark }) => {
  return (
    <div className="dark-mode-toggle">
      <FontAwesomeIcon 
        icon={isDark ? faMoon : faSun}
        onClick={toggleDark}
        className="theme-icon"
      />
    </div>
  );
};

export default DarkModeToggle;