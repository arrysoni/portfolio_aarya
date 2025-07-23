import React, {useState} from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blogs from './components/Blogs';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <Hero3D />
      <Hero />
      
      {/* <About />
      <Experience />
      <Projects />
      <Contact />
      <Blogs /> */}
    </div>
  )
}

export default App
