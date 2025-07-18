import React, { useEffect, useState } from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: "UlaaGo(Travel Website)",
    description: "A full-featured travel booking platform with destination filters, booking form, and animated UI.",
    tech: "React, PHP, MySQL, CSS",
    image: "/assets/Ulaago.png",
    link: "https://ulaago-travel.netlify.app/"
  },
  {
    title: "Portfolios",
    description: "A personal portfolio site showcasing projects, resume, and contact form with scroll animations.",
    tech: "React, AOS, HTML/CSS",
    image: "/assets/portfolio.png",
    link: "https://dhakshanesh.netlify.app/"
  },
  {
    title: "E-commerce Website",
    description: "An online store with product listings, cart, user login, and admin dashboard.",
    tech: "MERN Stack",
    image: "/assets/ecom.jpg",
    link: "https://www.shopify.com/in/free-trial?utm_medium=cpc&utm_source=yabing&jk=shopify&utm_source=yabing&utm_medium=cpc&utm_campaign=429206057&bingadgroupid=1240249368205166&bingadid=77515733600626&bingkeywordid=77515791712154&bingnetwork=o&BOID=brand&msclkid=7ac241a56d521814cb6b29d33e981977&utm_term=shopify&utm_content=Brand%20-%20Shopify"
  }
];

// Animated icon styles
const iconStyles = {
  display: 'inline-block',
  verticalAlign: 'bottom',
  marginLeft: '8px',
  width: '24px',
  height: '24px',
  position: 'relative',
  fill: '#00ffee',
};

// Animated icons
const CarIcon = () => (
  <svg style={iconStyles} viewBox="0 0 64 32" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="15" width="50" height="10" rx="3" ry="3" />
    <circle cx="15" cy="27" r="5" />
    <circle cx="45" cy="27" r="5" />
    <animateMotion dur="2s" repeatCount="indefinite" path="M0 0 L10 0" />
  </svg>
);

const ManIcon = () => (
  <svg style={iconStyles} viewBox="0 0 32 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="10" r="8" />
    <rect x="10" y="18" width="12" height="30" rx="4" ry="4" />
    <animateMotion dur="2s" repeatCount="indefinite" path="M0 0 L0 8" />
  </svg>
);

const CartIcon = () => (
  <svg style={iconStyles} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="20" width="40" height="25" rx="3" ry="3" />
    <circle cx="20" cy="50" r="6" />
    <circle cx="45" cy="50" r="6" />
    <animateMotion dur="2s" repeatCount="indefinite" path="M0 0 L10 0" />
  </svg>
);

// Typing animation component
const TypingText = ({ fullText, speed = 75, iconType }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setText('');
    setIndex(0);
  }, [fullText]);

  useEffect(() => {
    if (!fullText || index >= fullText.length) return;
    const timeout = setTimeout(() => {
      setText((prev) => prev + fullText[index]);
      setIndex((prev) => prev + 1);
    }, speed);
    return () => clearTimeout(timeout);
  }, [index, fullText, speed]);

  const renderIcon = () => {
    if (index < fullText.length) {
      switch (iconType) {
        case 'car': return <CarIcon />;
        case 'man': return <ManIcon />;
        case 'cart': return <CartIcon />;
        default: return <span className="cursor">|</span>;
      }
    }
    return null;
  };

  return (
    <>
      {text}
      {renderIcon()}
    </>
  );
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="projects-section" id="projects" data-aos="fade-up">
      <h2 data-aos="fade-down">Our Projects</h2>
      <p className="projects-intro" data-aos="fade-right">
        Check out some of our featured projects that showcase our creativity, innovation, and dedication to client satisfaction.
      </p>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div
            className="project-card"
            key={index}
            data-aos="fade-up"
            onClick={() => setActiveProject(proj)}
          >
            <img src={proj.image} alt={proj.title} className="project-img" />
            <div className="project-base">
              <h3 className="project-title">
                <TypingText
                  fullText={proj.title}
                  iconType={
                    index === 0 ? 'car' :
                    index === 1 ? 'man' :
                    index === 2 ? 'cart' : undefined
                  }
                />
              </h3>
              <p className="project-tagline">Click to view details</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {activeProject && (
        <div className="popup-overlay" onClick={() => setActiveProject(null)}>
          <div
            className="popup-content"
            data-aos="zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{activeProject.title}</h2>
            <img src={activeProject.image} alt={activeProject.title} className="popup-img" />
            <p>{activeProject.description}</p>
            <p><strong>Tech:</strong> {activeProject.tech}</p>

            <div className="popup-buttons">
              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-btn"
              >
                🔗 Click Here to Visit
              </a>
              <button onClick={() => setActiveProject(null)} className="close-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
