import React, {useState} from 'react';
import Hero from './pages/Hero';
import Navigation from './components/Navigation';
import Hero3D from './pages/Hero3D';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <Hero3D />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
