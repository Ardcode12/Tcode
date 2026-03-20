import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// AOS Library
import AOS from 'aos';
import 'aos/dist/aos.css';

// UI Components
import LoadingScreen from './components/ui/LoadingScreen';
import Navbar from './components/ui/Navbar';
import ScrollProgress from './components/ui/ScrollProgress';

// Layout
import SmoothScroll from './components/layout/SmoothScroll';

// Sections
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 0,
      mirror: false,
    });
  }, []);

  // Refresh AOS when loading completes
  useEffect(() => {
    if (!isLoading) {
      AOS.refresh();
    }
  }, [isLoading]);

  useEffect(() => {
    const preloadImages = [
      '/assets/logo.png',
      '/assets/img1.jpg',
      '/assets/pic.jpg',
    ];

    Promise.all(
      preloadImages.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    ).then(() => {
      setTimeout(() => { }, 500);
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {/* Main Content */}
      {!isLoading && (
        <SmoothScroll>
          <div className="app">
            {/* Noise Overlay */}
            <div className="noise-overlay" />

            {/* Navigation */}
            <Navbar />

            {/* Scroll Progress */}
            <ScrollProgress />

            {/* Page Sections */}
            <main>
              <Home />
              <About />
              <Projects />
              <Services />
              <Contact />
            </main>

            {/* Footer */}
            <footer className="footer">
              <div className="footer-content">
                <p>© 2026 T Code. All rights reserved.</p>
                <p>Crafted with ❤️ in Coimbatore, India</p>
              </div>
            </footer>
          </div>
        </SmoothScroll>
      )}
    </>
  );
}

export default App;