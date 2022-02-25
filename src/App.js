import React from 'react';
import Header from './components/Header';
import About from './components/AboutMe/About';
import Projects from './components/MyProjects/Projects';
import Skills from './components/MySkill/Skills'


function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
