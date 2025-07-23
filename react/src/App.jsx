import React, { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './pages/Hero';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blogs';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
