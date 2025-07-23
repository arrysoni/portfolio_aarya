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
        <h1> I BUILD INTERFACES + INTELLIGENCE</h1>
        <h2>AARYA SONI</h2>
      </div>
    </div>
  );
};

export default Hero;
