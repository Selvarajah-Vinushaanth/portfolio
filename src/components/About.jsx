import React from 'react';
import resume from '../assets/document/Resume.pdf';

import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        <p className="about-intro">
        "Hi, I’m Vinushaanth, a Computer Science Engineering undergraduate at the University of Moratuwa.
         I have a passion for solving real-world problems using technology.
          I’m curious about exploring new ideas and working on smart, efficient solutions.
           I love learning about different areas of computer science, such as building intelligent systems, improving security,Networking related concepts and making technology more effective for everyone. 
           My goal is to create meaningful solutions that make a difference in how we live and work with technology."
        </p>
        <p className="about-details">
        "As a proactive and innovative problem solver, I thrive on learning and working with the latest technologies to develop creative solutions.
         Outside of coding, I enjoy exploring new interests and dedicating time to personal growth. 
         My goal is to design and implement impactful solutions that drive meaningful change and deliver value."
        </p>
        <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-link">
  View My Resume
</a>

      </div>
      
      <div className="about-image">
      <img src={require('../assets/images/WhatsApp Image 2024-12-22 at 14.46.31_c01aef45.jpg')} alt="Hero" />

      </div>
    </section>
  );
};

export default About;
