import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Booksky Web',
      description: 'BookSky is a simple to-do list application for managing and tracking books. Users can add, edit, and mark books as read, helping them stay organized with their reading goals.',
      link: 'https://github.com/Selvarajah-Vinushaanth/booksky',
    },
    {
      title: 'E-Commerce Platform',
      description: 'An online platform with real-time product management enables businesses to track and update product information instantly, ensuring accurate inventory, pricing, and order management in real time.',
      link: 'https://github.com/trinith01/ecommerce',
    },
    {
      title: 'A Mini Bus Reservation System',
      description: 'A Mini Bus Reservation System using HTML, CSS, and JavaScript allows users to book tickets online. The system manages seat availability, lets users select routes, and calculates the total fare.',
      link: 'https://github.com/Selvarajah-Vinushaanth/bus-basic-project',
    },
    {
      title: ' News Aggregator',
      description: 'Built a responsive news aggregator that displays real-time articles from multiple sources, allowing users to filter news by categories for easy browsing and updates.',
      link: 'https://github.com/Selvarajah-Vinushaanth/newaggregator',
    },
    {
      title: 'Benchmarking',
      description: 'Conducted benchmarking analysis across different laptop devices to evaluate performance variations, focusing on speed, processing power, and efficiency under various workloads.',
      link: 'https://github.com/Selvarajah-Vinushaanth/Benchmarking',
    },
    {
      title: 'Money Manager - Advanced Financial Management System',
      description: 'An advanced web application designed to help users manage their personal finances. It enables users to track income and expenses, visualize financial data through charts, and manage personal budgets securely, all in real time.',
      link: 'https://github.com/Selvarajah-Vinushaanth/moneymanager/tree/master',
    },
    {
      title: "Pong Game",
      description: "A simple two-player arcade game replicating the classic Pong. Players control paddles to bounce a ball back and forth, aiming to score points by getting the ball past the opponent. Designed with real-time player interaction and basic physics simulation.",
      link: "https://github.com/Selvarajah-Vinushaanth/pong-game"
    },
    {
      title: "Breakout Game",
      description: "An interactive arcade game where players control a paddle to break bricks with a bouncing ball. The game challenges users with increasing difficulty as bricks disappear and the ball speeds up. Features include smooth controls, visual effects, and score tracking.",
      link: "https://github.com/Selvarajah-Vinushaanth/Breakout-Game"
    },
    {
      title: "Talk Bot",
      description: "This project creates an interactive chatbot using the LLaMA 2 model, hosted on the Ollama server and designed to run locally. The chatbot provides users with intelligent and responsive conversations, suitable for various applications.",
      link: "https://github.com/Selvarajah-Vinushaanth/chat-bot-using-ollama"
    },
    {
      title: "Private Cloud-Drive",
      description: "This project sets up a personal cloud storage system, allowing users to store files remotely. The system uses MongoDB Atlas for file database management especially for PDFs and Cloudinary for efficient image and video storage.",
      link: "https://github.com/Selvarajah-Vinushaanth/Private-Cloud-Drive"
    },
    {
      title: "Weather World App",
      description: "A sleek, responsive weather app for both mobile and web. Get real-time weather updates, accurate forecasts, and location-based conditions ,all in a beautifully designed, easy-to-use interface. Stay prepared, rain or shine!.",
      link: "https://github.com/Selvarajah-Vinushaanth/Weather-with-api"
    },
    {
      title: "Voicify",
      description: "voicify converts text into natural-sounding speech using tts technology. it allows users to add effects, download audio, and analyze word and character counts, making it useful for accessibility, narration, and automation.",
      link: "https://github.com/Selvarajah-Vinushaanth/Text-To-Voice-Converter"
    },
    {
      title: "Neura AI Chat Build",
      description: "a chat interface for text, file, and image analysis with text generation, image recognition, and real-time responses. users can choose models, toggle themes, use voice input, and manage chats. prompt templates available.",
      link: "https://github.com/Selvarajah-Vinushaanth/Neura-AI"
    }
    
    
  ];

  return (
    <section className="projects">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
