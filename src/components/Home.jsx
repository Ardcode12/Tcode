import React, { useEffect, useState } from 'react';
import './Home.css';


// Typing Text Component without Cursor
const TypingText = ({ fullText, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [fullText]);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, speed]);

  return <span>{displayedText}</span>; // Cursor removed
};

const Home = () => {
  const companyName = 'T code';
  const welcomeText = 'Welcome to T code';

  const bgImages = [
    '/assets/img1.jpg',
    '/assets/pic.jpg',
    '/assets/web1.jpg',
    '/assets/img2.jpg'
  ];

  const [bgIndex, setBgIndex] = useState(0);
  const [fadeToggle, setFadeToggle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
      setFadeToggle((prev) => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <>
      <header className="top-header">
        <div className="logo">
          <img src="/assets/Logo.jpg" alt="Logo" className="logo-img" />
          <TypingText fullText={companyName} speed={120} />
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#home" >Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#projects">Our Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="home-section" id="home" data-aos="fade-up">
        <div
          className={`bg-image ${fadeToggle ? 'visible' : 'hidden'}`}
          style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
          aria-hidden="true"
        ></div>
        <div
          className={`bg-image ${!fadeToggle ? 'visible' : 'hidden'}`}
          style={{ backgroundImage: `url(${bgImages[(bgIndex - 1 + bgImages.length) % bgImages.length]})` }}
          aria-hidden="true"
        ></div>

        <div className="floating-shape" style={{ top: '20%', left: '10%' }}></div>
        <div className="floating-shape" style={{ top: '70%', left: '80%' }}></div>

        <div className="home-content" data-aos="zoom-in">
          <h1><TypingText fullText={welcomeText} speed={90} /></h1>
          <p>Your One-Stop Solution for Modern Website Design & Development</p>
          <a href="#about" className="cta-button" role="button">Explore More</a>
        </div>
      </section>
    </>
  );
};

export default Home;
