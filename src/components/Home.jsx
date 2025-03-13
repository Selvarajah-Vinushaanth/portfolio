import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Vinushaanth</h1>
        <p className="hero-subtitle">A Passionate Computer Science Engineer</p>
        <p className="hero-description">
        "Specializing in Computer Science and Network Systems, 
        I am dedicated to designing and implementing robust solutions that optimize performance, enhance security,
         and drive innovation across diverse technological landscapes."
        </p>
        <a href="projects" className="cta-button">View My Projects</a>
      </div>
      <div className="hero-image">
      <img src={require('../assets/images/WhatsApp Image 2024-12-22 at 14.40.58_0eabc4d2.jpg')} alt="Hero" />

      </div>
    </section>
  );
};

export default Home;
