import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about" data-aos="fade-up">
      <div className="about-container">
        <div className="about-card" data-aos="fade-right">
          <h2>About Us</h2>
          <p>
            We are a team of passionate designers and developers dedicated to crafting
            modern, responsive, and visually stunning websites. Our mission is to help businesses
            and startups stand out in the digital space with impactful, user-friendly solutions.
          </p>
          <p>
            With years of experience in front-end and back-end development, we blend creativity
            with technology to deliver exceptional web experiences.
          </p>
        </div>
        <div className="about-animation" data-aos="fade-left">
          <div className="code-box">
            <code>
              <span className="line">{`const company = "WebBuilders";`}</span>
              <span className="line">{`const services = ["Web Design", "Development", "SEO"];`}</span>
              <span className="line">{`const mission = "Build digital success stories.";`}</span>
              <span className="line">{`services.forEach(service => console.log(service));`}</span>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
