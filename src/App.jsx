import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';  
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Hero />
      <Projects />
      <ContactForm /> 
      <Footer />
    </div>
  );
}

export default App;
