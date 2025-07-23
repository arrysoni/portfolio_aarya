import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Let’s Connect</h2>
      <p className="contact-description">
        Whether you’re building something ambitious, want to collaborate, or just say hi — drop me a line!
      </p>

      <div className="contact-icons">
        <a
          href="mailto:abs7346@psu.edu"
          aria-label="Email"
          className="contact-icon-link"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/aaryasoni/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="contact-icon-link"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/arrysoni"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="contact-icon-link"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Contact;
