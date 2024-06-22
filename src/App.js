import React from 'react';
import './App.css';
import About from './components/About Section/About';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home Section/Home';
import Project from './components/Projects Section/Project';
import Skills from './components/Skills Section/Skills';
import Contact from './components/Contact Section/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <Navbar/>
    
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
 </>
    
);
}

export default App;
