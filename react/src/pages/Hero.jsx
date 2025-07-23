import React, { useState, useEffect } from 'react';
import Hero3D from './Hero3D';
import '../styles/Hero.css';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-container">
      <Hero3D />
      <div className={`hero-content ${visible ? 'fade-in' : ''}`}>
        <h1> <strong>I BUILD INTERFACES + INTELLIGENCE</strong></h1>
        <h2><strong>AARYA SONI</strong></h2>
      </div>

      <div className="scroll-cue" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
        scroll to explore ↓
      </div>

    </div>
  );
};

export default Hero;
