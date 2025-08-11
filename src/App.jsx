import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <section id="resume" className="resume-section">
        <h2>Resume</h2>
        <p>You can download my Resume for a detailed look at my skills.</p>
        <a href="/Priyanshu_Jain_Resume.pdf" download="Priyanshu_Jain_Resume.pdf" className="download-button">
          Download Resume
        </a>
      </section>
      <Contact />
    </div>
  );
};

export default App;