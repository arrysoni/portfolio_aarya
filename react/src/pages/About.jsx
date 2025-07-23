import React from 'react';
import '../styles/About.css';
import profileImage from '../assets/aarya.jpeg';
import RevealOnScroll from '../components/RevealOnScroll';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <RevealOnScroll delay={0}>
          <img src={profileImage} alt="Aarya Soni" className="about-image" />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="about-title">About Me</h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="about-intro">
            Hi, I’m <strong>Aarya Soni</strong> — a frontend developer with a passion for precision and an AI researcher driven by curiosity. Currently pursuing a B.S. in Computer Science with a minor in Economics at Penn State, I specialize in crafting sleek user experiences and experimenting with intelligent systems.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <p className="about-body">
            I’ve built intelligent dashboards, optimized portfolio tools, and led design-driven hackathon projects — all with the same philosophy: <strong>code should solve real problems beautifully</strong>. Whether I’m designing an interface in React or experimenting with LSTM-based disease prediction models, I love the challenge of translating complex ideas into impactful solutions.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <p className="about-footer">
            Beyond the code, I’m a design tinkerer, a community builder (Girls Who Code), and a firm believer in interdisciplinary thinking. If you’re building something bold — let’s connect.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.5}>
          <a
            href="https://www.linkedin.com/in/aaryasoni/"
            target="_blank"
            rel="noreferrer"
            className="about-btn"
          >
            Connect on LinkedIn →
          </a>
        </RevealOnScroll>
        
      </div>
    </section>
  );
};

export default About;
