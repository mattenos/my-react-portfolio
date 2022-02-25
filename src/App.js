import React from 'react';
import Header from './components/Header';
import About from './components/AboutMe/About';
import Projects from './components/MyProjects/Projects';
import Skills from './components/MySkill/Skills';
import Contact from './components/ContactMe/Contact';


function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
