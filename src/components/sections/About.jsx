import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import '../../styles/components/About.css';

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  const codeLines = [
    'const company = "T Code";',
    'const mission = "Build digital success";',
    'const services = [',
    '  "Web Design",',
    '  "Development",',
    '  "SEO"',
    '];',
    '',
    'export default success;',
  ];

  const stats = [
    { number: '50+', label: 'Projects', icon: '🚀' },
    { number: '30+', label: 'Clients', icon: '👥' },
    { number: '3+', label: 'Years', icon: '⭐' },
    { number: '100%', label: 'Dedication', icon: '💪' },
  ];

  return (
    <section className="about-section" id="about" ref={containerRef}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Who We Are</span>
          <h2 className="section-title">
            About <span className="text-gradient">T Code</span>
          </h2>
        </motion.div>

        <div className="about-content">
          {/* Info Section */}
          <motion.div
            className="about-info"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard className="about-card">
              <h3>Our Story</h3>
              <p>
                We are a team of passionate designers and developers dedicated to crafting
                modern, responsive, and visually stunning websites.
              </p>
              <p>
                With years of experience in front-end and back-end development, we blend
                creativity with technology to deliver exceptional web experiences.
              </p>
            </GlassCard>

            {/* Stats Grid */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <span className="stat-icon">{stat.icon}</span>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Code Animation */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="code-card">
              <div className="code-header">
                <div className="code-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="code-filename">about.js</span>
              </div>
              <div className="code-content">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    className="code-line"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.08 }}
                  >
                    <span className="line-number">{index + 1}</span>
                    <span className="line-code">{line}</span>
                  </motion.div>
                ))}
                <motion.span
                  className="typing-cursor"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;