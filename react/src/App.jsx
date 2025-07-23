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
      <About />
      <Experience />

      <section id="about" style={{ minHeight: '100vh', padding: '4rem 2rem', background: '#f8f8f8' }}>
        <h2>About Me</h2>
        <p>I’m Aarya Soni, a frontend developer + AI researcher...</p>
      </section>

      <section id="projects" style={{ minHeight: '100vh', padding: '4rem 2rem', background: '#fff' }}>
        <h2>Projects</h2>
        <p>Here are some cool things I’ve built...</p>
      </section>

      <section id="blogs" style={{ minHeight: '100vh', padding: '4rem 2rem', background: '#f8f8f8' }}>
        <h2>Blogs</h2>
        <p>My thoughts, tutorials, and experiments...</p>
      </section>

      <section id="contact" style={{ minHeight: '100vh', padding: '4rem 2rem', background: '#fff' }}>
        <h2>Contact</h2>
        <p>Let’s connect!</p>
      </section>

      
      
      {/* <About />
      <Experience />
      <Projects />
      <Contact />
      <Blogs /> */}
    </div>
  )
}

export default App
