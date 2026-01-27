import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import '../../styles/components/Projects.css';

const projects = [
  {
    id: 1,
    title: 'UlaaGo Travel',
    description: 'A full-featured travel booking platform with destination filters, booking form, and animated UI.',
    tech: ['React', 'PHP', 'MySQL', 'CSS'],
    image: '/assets/Ulaago.png',
    link: 'https://ulaago-travel.netlify.app/',
    category: 'web',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A personal portfolio site showcasing projects, resume, and contact form with scroll animations.',
    tech: ['React', 'AOS', 'Framer Motion'],
    image: '/assets/portfolio.png',
    link: 'https://dhakshanesh.netlify.app/',
    category: 'web',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'An online store with product listings, cart, user login, and admin dashboard.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: '/assets/ecom.jpg',
    link: '#',
    category: 'fullstack',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section className="projects-section" id="projects" ref={containerRef}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          <span className="section-subtitle">Our Work</span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-description">
            Check out some of our featured projects that showcase our creativity and dedication.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="view-text">View Details</span>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <div className="modal-body">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>

                <div className="modal-tech">
                  <h4>Technologies:</h4>
                  <div className="tech-list">
                    {selectedProject.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn primary"
                  >
                    Visit Website →
                  </a>
                  <button
                    className="modal-btn secondary"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;