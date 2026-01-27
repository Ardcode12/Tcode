import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import '../../styles/components/Services.css';

const services = [
  {
    icon: '🖥️',
    title: 'Responsive Web Design',
    description: 'Mobile-friendly, responsive designs that look great on all devices.',
  },
  {
    icon: '⚡',
    title: 'Full-Stack Development',
    description: 'End-to-end web application development using modern technologies.',
  },
  {
    icon: '☁️',
    title: 'Cloud Services',
    description: 'Secure cloud deployment, storage, and scaling solutions.',
  },
  {
    icon: '🔧',
    title: 'Maintenance & Support',
    description: 'Ongoing support and updates to keep your site running smoothly.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed for great user experience.',
  },
  {
    icon: '📈',
    title: 'SEO Optimization',
    description: 'Improve your search rankings and drive organic traffic.',
  },
];

const technologies = [
  { name: 'HTML5', icon: '/assets/html.png' },
  { name: 'CSS3', icon: '/assets/css.png' },
  { name: 'JavaScript', icon: '/assets/js.png' },
  { name: 'React', icon: '/assets/react.png' },
  { name: 'Node.js', icon: '/assets/node.png' },
  { name: 'MongoDB', icon: '/assets/mongo.png' },
];

const Services = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section className="services-section" id="services" ref={containerRef}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          <span className="section-subtitle">What We Offer</span>
          <h2 className="section-title">
            Our <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <GlassCard className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Technologies Section */}
        <motion.div
          className="tech-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="tech-title" data-aos="fade-up">Technologies We Use</h3>

          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-item"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.08 }}
                data-aos="flip-up"
                data-aos-delay={index * 80}
              >
                <div className="tech-icon-wrapper">
                  <img src={tech.icon} alt={tech.name} />
                </div>
                <span className="tech-name">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;