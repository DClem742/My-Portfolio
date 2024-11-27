import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="profile-image">
          <img src="/images/your-photo.jpg" alt="Your Name" />
        </div>
        <h1>Hi, I'm DC Isenberg</h1>
        <h2>Full Stack Developer</h2>
        <p>I build modern web applications with a focus on clean code and user experience</p>
        <button className="cta-button">View My Work</button>
      </div>
    </section>
  );
};

export default Hero;
