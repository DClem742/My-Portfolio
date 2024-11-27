import React, { useState, useEffect } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark-mode');
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          // ... particle options from previous response ...
        }}
      />
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