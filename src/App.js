import React from 'react';
import Header from './components/Header';
import About from './components/AboutMe/About';
import Projects from './components/MyProjects/Projects';
import Skills from './components/MySkill/Skills';
// import Contact from './components/ContactMe/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Skills />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
