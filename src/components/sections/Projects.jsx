import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import '../../styles/components/Projects.css';

const caseStudies = [
  {
    id: 1,
    title: 'Local Bakery Dominates Google Search',
    client: 'Sweet Treats Bakery, Coimbatore',
    problem: 'Zero online presence. Losing customers to competitors despite having better products. Only getting walk-in traffic.',
    solution: 'Complete digital transformation: Built SEO-optimized website, claimed and optimized Google My Business, ran targeted Facebook ads, implemented WhatsApp ordering system.',
    results: [
      '450% increase in monthly inquiries',
      'Ranked #1 for "bakery in Coimbatore"',
      '₹2.5L monthly revenue from online orders',
      'ROI of 380% in first 6 months'
    ],
    image: '/assets/Ulaago.png',
    category: 'Digital Marketing + SEO',
    duration: '6 months',
  },
  {
    id: 2,
    title: 'Startup Gets 100+ Qualified Leads Per Month',
    client: 'TechSolutions Startup',
    problem: 'New B2B SaaS startup with great product but no customers. Cold calling wasn\'t working. No inbound leads.',
    solution: 'Developed lead magnet strategy, built conversion-focused landing pages, Google Ads campaign, LinkedIn marketing, automated email nurture sequences.',
    results: [
      '120+ qualified B2B leads/month',
      '15-20 demo bookings monthly',
      '₹18L in MRR after 8 months',
      'Cost per lead reduced by 60%'
    ],
    image: '/assets/ecom.png',
    category: 'Lead Generation + Ads',
    duration: '8 months',
  },
  {
    id: 3,
    title: 'E-commerce Store 5X Revenue Growth',
    client: 'Fashion Retail Brand',
    problem: 'Slow website, poor mobile experience, low conversion rate (0.8%), high cart abandonment, expensive ad costs.',
    solution: 'Complete website redesign for speed + UX, advanced SEO, Facebook/Instagram shopping ads, email automation for cart recovery, influencer partnerships.',
    results: [
      'Website speed improved by 200%',
      'Conversion rate jumped to 4.2%',
      '500% revenue growth in 10 months',
      'Customer acquisition cost cut in half'
    ],
    image: '/assets/three.png',
    category: 'E-commerce + Marketing',
    duration: '10 months',
  },
];

const Projects = () => {
  const [selectedCase, setSelectedCase] = useState(null);
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
          <span className="section-subtitle">Real Results</span>
          <h2 className="section-title">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="section-description">
            See how we've helped businesses like yours achieve measurable growth through strategic digital marketing.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="projects-grid">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCase(caseStudy)}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              <div className="project-image">
                <img src={caseStudy.image} alt={caseStudy.title} />
                <div className="project-overlay">
                  <span className="view-text">View Case Study</span>
                </div>
              </div>
              <div className="project-info">
                <span className="case-category">{caseStudy.category}</span>
                <h3 className="project-title">{caseStudy.title}</h3>
                <p className="project-description">{caseStudy.client}</p>
                <div className="project-tech">
                  {caseStudy.results.slice(0, 2).map((result, idx) => (
                    <span key={idx} className="tech-tag">✓ {result}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCase(null)}
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
                onClick={() => setSelectedCase(null)}
              >
                ✕
              </button>

              <div className="modal-image">
                <img src={selectedCase.image} alt={selectedCase.title} />
                <div className="modal-badge">{selectedCase.category}</div>
              </div>

              <div className="modal-body">
                <h2>{selectedCase.title}</h2>
                <p className="modal-client">Client: {selectedCase.client}</p>

                <div className="case-section">
                  <h4>🎯 The Challenge</h4>
                  <p>{selectedCase.problem}</p>
                </div>

                <div className="case-section">
                  <h4>💡 Our Solution</h4>
                  <p>{selectedCase.solution}</p>
                </div>

                <div className="case-section">
                  <h4>📊 Results Achieved ({selectedCase.duration})</h4>
                  <ul className="results-list">
                    {selectedCase.results.map((result, index) => (
                      <li key={index}>✓ {result}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-actions">
                  <button
                    className="modal-btn primary"
                    onClick={() => {
                      setSelectedCase(null);
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        const offset = 80;
                        const elementPosition = contactSection.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                  >
                    Get Similar Results →
                  </button>
                  <button
                    className="modal-btn secondary"
                    onClick={() => setSelectedCase(null)}
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