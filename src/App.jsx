import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Connect from './components/Connect'; 
import './App.css'; 

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="main-content">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="connect">
          <Connect />
        </section>
      </main>
    </div>
  );
}

export default App;