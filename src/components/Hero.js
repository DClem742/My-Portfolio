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
              <p>
                I'm a software developer who transforms ideas into reality through modern web applications. 
                With a focus on clean code and exceptional user experience, I create digital solutions that make 
                a difference. My passion for technology is matched by my love for Magic: The Gathering and Marvel, 
                bringing a unique blend of creativity and technical expertise to every project. I thrive on bringing 
                both my own visions and others' ideas to life, turning complex challenges into elegant solutions.
              </p>
        <button className="cta-button">View My Work</button>
      </div>
    </section>
  );
};

export default Hero;
