import React, {useState, useEffect} from 'react';
import '../styles/Hero.css';

const Hero = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Delay the appearance of the image to simulate a transition
        const timer = setTimeout(() => {
            setVisible(true);
        }, 300); 

        return () => clearTimeout(timer);
    }, []);

  return (
    <div className="hero-container">
      <div className={`background-splash ${visible ? 'fade-in' : ''}`}></div>

      <div className="hero-content">
        <h1>Frontend Developer + AI Researcher</h1>
        <p>Aarya Soni</p>
      </div>
    </div>
  );
};

export default Hero;