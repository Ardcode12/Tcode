import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import MagneticButton from '../ui/MagneticButton';
import '../../styles/components/Pricing.css';

const pricingPlans = [
  {
    name: 'Starter',
    price: '₹5,000',
    period: '/month',
    description: 'Perfect for new businesses getting started',
    popular: false,
    features: [
      '5-Page Professional Website',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      'Social Media Links',
      'Free Domain & Hosting Setup',
      '2 Rounds of Revisions',
      'Email Support',
    ],
  },
  {
    name: 'Growth',
    price: '₹10,000',
    period: '/month',
    description: 'For businesses ready to scale',
    popular: true,
    features: [
      'Everything in Starter, plus:',
      'Google My Business Optimization',
      'Local SEO (Rank in Coimbatore)',
      'Monthly Blog Content (2 posts)',
      'Social Media Management (3 platforms)',
      'Google Analytics Setup',
      'Monthly Performance Reports',
      'WhatsApp Business Integration',
      'Priority Support',
    ],
  },
  {
    name: 'Pro',
    price: '₹20,000',
    period: '/month',
    description: 'Complete digital domination',
    popular: false,
    features: [
      'Everything in Growth, plus:',
      'Advanced SEO (National Rankings)',
      'Google Ads Management (PPC)',
      'Facebook & Instagram Ads',
      'Weekly Content Creation',
      'Email Marketing Campaigns',
      'Lead Management Automation',
      'CRM Integration',
      'Conversion Rate Optimization',
      'Dedicated Account Manager',
      '24/7 Priority Support',
    ],
  },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};

const Pricing = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section className="pricing-section" id="pricing" ref={containerRef}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          <span className="section-subtitle">Transparent Pricing</span>
          <h2 className="section-title">
            Plans That <span className="text-gradient">Fit Your Budget</span>
          </h2>
          <p className="section-description">
            No hidden fees. No surprises. Choose the plan that matches your growth goals.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="pricing-card-wrapper"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <GlassCard className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && (
                  <div className="popular-badge">
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="pricing-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                  <div className="price-wrapper">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                </div>

                <div className="features-list">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="feature-item"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                    >
                      <span className="check-icon">✓</span>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <MagneticButton
                  className={`cta-btn ${plan.popular ? 'primary' : 'secondary'}`}
                  onClick={() => scrollToSection('contact')}
                >
                  <span>Get Started</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </MagneticButton>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="pricing-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p className="pricing-note">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            All plans include free setup, training, and 30-day money-back guarantee. Need a custom solution? Contact us for a personalized quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
