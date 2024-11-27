import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark-mode');
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  return (
    <div className="App">
      <DarkModeToggle isDark={isDark} toggleDark={toggleDark} />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;