import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import MagneticButton from '../ui/MagneticButton';
import '../../styles/components/Contact.css';

const founders = [
  { name: 'DHACHU', role: 'Founder & CEO', image: '/assets/founder1.jpg' },
  { name: 'PRAVEEN', role: 'Co-Founder & CTO', image: '/assets/founder2.jpg' },
  { name: 'ARNALD', role: 'Co-Founder & Designer', image: '/assets/founder3.jpg' },
];

const Contact = () => {
  const [selectedFounder, setSelectedFounder] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'tcode.webs00@gmail.com',
      link: 'mailto:tcode.webs00@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91-9080176624',
      link: 'tel:+919080176624',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Coimbatore, India',
      link: '#',
    },
  ];

  return (
    <section className="contact-section" id="contact" ref={containerRef}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="section-description">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard className="contact-form-card" data-aos="fade-right" data-aos-delay="100">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows="4"
                    required
                  />
                </div>

                <MagneticButton
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="loading-spinner" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </MagneticButton>

                {submitStatus === 'success' && (
                  <motion.div
                    className="success-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✓ Message sent successfully!
                  </motion.div>
                )}
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="contact-info-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Info Cards */}
            <div className="contact-info-cards">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="info-card"
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                >
                  <span className="info-icon">{info.icon}</span>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Founders */}
            <div className="founders-section" data-aos="fade-up" data-aos-delay="200">
              <h3>Meet Our Founders</h3>
              <div className="founders-grid">
                {founders.map((founder, index) => (
                  <motion.div
                    key={index}
                    className="founder-card"
                    onClick={() => setSelectedFounder(founder)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="founder-image">
                      <img src={founder.image} alt={founder.name} />
                    </div>
                    <span className="founder-name">{founder.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Founder Modal */}
      <AnimatePresence>
        {selectedFounder && (
          <motion.div
            className="founder-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFounder(null)}
          >
            <motion.div
              className="founder-modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="founder-modal-image">
                <img src={selectedFounder.image} alt={selectedFounder.name} />
              </div>
              <h3>{selectedFounder.name}</h3>
              <p>{selectedFounder.role}</p>
              <button
                className="founder-modal-close"
                onClick={() => setSelectedFounder(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;