import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
