import React from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = ({ isDark, toggleDark }) => {
  return (
    <div className="dark-mode-toggle">
      <input
        type="checkbox"
        id="dark-mode"
        checked={isDark}
        onChange={toggleDark}
      />
      <label htmlFor="dark-mode">
        <span className="toggle-track">
          <span className="toggle-indicator">
            {/* Sun/Moon icons */}
            {isDark ? '🌙' : '☀️'}
          </span>
        </span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
