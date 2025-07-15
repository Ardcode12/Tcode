import React, { useEffect, useState } from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [selectedFounder, setSelectedFounder] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const founders = [
    {
      name: 'DHACHU',
      role: 'Founder',
      image: '/assets/founder1.jpg'
    },
    {
      name: 'PRAVEEN',
      role: 'Founder',
      image: '/assets/founder2.jpg'
    },
    {
      name: 'ARNALD',
      role: 'Founder',
      image: '/assets/founder3.jpg'
    }
  ];

  return (
    <section className="contact-section" id="contact" data-aos="zoom-in">
      <h2 data-aos="fade-right">Contact Us</h2>
      <p data-aos="fade-left">Have a project in mind? Reach out to us!</p>

      <div className="contact-card" data-aos="fade-up">
        <div className="contact-info">
          <p><strong>Email:</strong> tcode.webs00@gmail.com</p>
          <p><strong>Phone:</strong> +91-9080176624 || +91-9025874624 || +91-7708673148</p>
          <p><strong>Location:</strong> Coimbatore, India</p>
        </div>

        <div className="founders-container">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="circle-image"
              onClick={() => setSelectedFounder(founder)}
              data-aos="zoom-in"
            >
              <img src={founder.image} alt={`Founder ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {selectedFounder && (
        <div className="popup-overlay" onClick={() => setSelectedFounder(null)}>
          <div
            className="popup-content small"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedFounder.image} alt={selectedFounder.name} />
            <h3>{selectedFounder.name}</h3>
            <p>{selectedFounder.role}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
