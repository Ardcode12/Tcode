import React, { useEffect } from 'react';
import './Service.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: 'Responsive Web Design',
    description: 'We create mobile-friendly, responsive designs that look great on all devices.',
    icon: '🖥️',
    aos: 'fade-up',
  },
  {
    title: 'Cloud Services',
    description: 'Secure cloud deployment, storage, and scaling solutions to enhance your infrastructure.',
    icon: '☁️',
    aos: 'fade-left',
  },
  {
    title: 'Maintenance & Support',
    description: 'We offer ongoing support and updates to keep your site running smoothly.',
    icon: '🛠️',
    aos: 'zoom-in-up',
  },
];

// ✅ Using image URLs from public folder
const technologies = [
  { name: 'HTML5', icon: '/assets/html.png' },
  { name: 'CSS3', icon: '/assets/css.png' },
  { name: 'JavaScript', icon: '/assets/js.png' },
  { name: 'React', icon: '/assets/react.png' },
  { name: 'Node.js', icon: '/assets/node.png' },
  { name: 'MongoDB', icon: '/assets/mongo.png' },
];

const ServicesAndTech = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <section className="services-section" id="services" data-aos="fade-up">
        <h2 className="section-title" data-aos="zoom-in">Services We Provide</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index} data-aos={service.aos}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="services-section" id="technologies">
        <h2 className="section-title" data-aos="zoom-in">Technologies We Use</h2>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div
              className="tech-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="tech-icon">
                <img src={tech.icon} alt={tech.name} />
              </div>
              <h3 className="tech-name">{tech.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesAndTech;
