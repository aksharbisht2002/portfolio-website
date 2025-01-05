import React from 'react';
import Header from './components/Header/Header.js';
import Body from './components/Body/Body.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import Skills from './components/Skills/Skills.js';
import Projects from './components/Projects/Projects.js';
import Certificates from './components/Certificates/Certificates.js';
import ContactForm from './components/Contact/ContactForm.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <>
      <Header/>
      <Body/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Certificates/>
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default App;
