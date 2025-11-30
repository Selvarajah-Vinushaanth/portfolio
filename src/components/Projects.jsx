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
      description: "Voicify converts text into natural-sounding speech using tts technology. it allows users to add effects, download audio, and analyze word and character counts, making it useful for accessibility, narration, and automation.",
      link: "https://github.com/Selvarajah-Vinushaanth/Text-To-Voice-Converter"
    },
    {
      title: "Neura AI Chat Build",
      description: "A chat interface for text, file, and image analysis with text generation, image recognition, and real-time responses. users can choose models, toggle themes, use voice input, and manage chats. prompt templates available.",
      link: "https://github.com/Selvarajah-Vinushaanth/Neura-AI"
    },
    {
      title: "QuickPing",
      description: "This app measures the internet connection speed (download and upload speeds) by sending data packets to a server and calculating the time it takes for the data to travel back and forth. It then displays the results, such as download speed, upload speed, and ping (latency). The app communicates with a remote server to perform the speed tests and send data back for calculation.",
      link: "https://github.com/Selvarajah-Vinushaanth/QuickPing"
    },
    {
      title: "AI-Powered Medical Chatbot",
      description: "Developed an AI chatbot that answers medical questions strictly based on a given medical book using vector embeddings. Processed text into embeddings, stored in a vector database, and implemented semantic search for accurate responses. Ensured reliability by restricting answers to book content, enhancing precision in medical assistance.",
      link: "https://github.com/Selvarajah-Vinushaanth/medibot"
    },
    {
      title: "Interest Hub",
      description: "The chat interface page enables users to send and receive real-time messages in a sleek and user-friendly design. It includes features such as text, media sharing, and reactions, providing an interactive and dynamic messaging experience",
      link: "https://github.com/Selvarajah-Vinushaanth/InterestHub"
    },
    {
      title: "Cloud-Sync",
      description: "This cloud-based file management system allows users to efficiently upload, organize, and manage their files. The interface features a recent folders section and displays files with details like name, type, size, and modification date. Users can select, star, or delete files, and switch between list or icon views, ensuring quick access to frequently used files while keeping everything organized.",
      link: "https://github.com/Selvarajah-Vinushaanth/cloud-sync"
    },
    {
      title: "AI Vision Assistant Pro",
      description: "AI Vision Assistant Pro is a real-time object detection tool using OpenCV. It tracks selected objects like people, cars, and bicycles through a live camera feed, estimates their distance, and alerts users if they come too close. With features like customizable object tracking, distance estimation, adjustable settings, detection logs, dark mode, and full-screen support, it's ideal for surveillance and safety applications.",
      link: "https://github.com/Selvarajah-Vinushaanth/AI-Vision-Assistant-Pro"
    },
    {
      title: "MailFlow-Automator",
      description: "MailFlow Automator is a simple and user-friendly email sending interface built with a front-end form, connected to an automated workflow using n8n. It allows users to quickly compose emails, add optional attachments, and send them seamlessly through automation without manual backend handling.",
      link: "https://github.com/Selvarajah-Vinushaanth/MailFlow-Automator"
    },
    {
      title: "Credit Score Predictor",
      description: "This project is a machine learning web app that predicts a user's credit score category — Good, Standard, or Bad — based on financial and behavioral inputs. Built with Python, Flask, and Scikit-learn, it uses a trained Random Forest model with proper preprocessing to deliver predictions and confidence scores via a simple web interface.",
      link: "https://github.com/Selvarajah-Vinushaanth/Credit_Score_Predcitor"
    },
    {
      title: "Semantic Image Search",
      description: "Semantic Image Search is a web app that lets users upload images and search for them by typing natural language descriptions. It uses OpenAI’s CLIP model to understand the content of images and find matches based on text queries — no manual tagging needed. The app features a React frontend and a FastAPI backend with efficient vector search powered by FAISS.",
      link: "https://github.com/Selvarajah-Vinushaanth/Semantic-Image-Search/"
    },
    {
      title: "SecureVision Pro",
      description: "A modern, web-based CCTV monitoring solution built with FastAPI, OpenCV, and JavaScript, SecureVision Pro delivers real-time low-latency streaming, intelligent motion detection with auto-recording, and a fully responsive, mobile-ready interface. It includes robust camera management and a stats dashboard for total surveillance control.",
      link: "https://github.com/Selvarajah-Vinushaanth/SecureVision"
    },
    {
      title: "Landmark Location Finder",
      description: "Landmark Location Finder is an AI-powered web app that identifies landmarks from images, showing their names, locations, and history. Built with Flask and integrated with Google Vision and Gemini APIs, it offers real-time recognition and a clean, mobile-friendly interface.",
      link: "https://github.com/Selvarajah-Vinushaanth/Location-Finder/"
    },
    {
      title: "EMNIST Character Recognition Web App",
      description: "An interactive web application that uses deep learning to identify handwritten letters and digits. Users can draw characters on a canvas or upload images, and the system predicts the character using a trained CNN model on the EMNIST dataset. It features a clean UI with dark/light mode toggle and real-time recognition functionality.",
      link: "https://github.com/Selvarajah-Vinushaanth/EMNIST-Character-Recognition-Web-App"
    },
    {
      title: "AutoFlow Assistant (Mini Version)",
      description: "This intelligent automation workflow allows users to analyze data from Google Sheets, send personalized emails, and summarize calendar events efficiently. By integrating these tools, it streamlines data-driven communication and scheduling, helping users save time and stay organized effortlessly.",
      link: "https://drive.google.com/file/d/1CK_rZCZU1vHjky53AKUBV-ioAths-sp2/view"
    },
    {
      title: "VerseMind",
      description: "The Tamil Songwriting Assistant is a comprehensive platform that leverages cutting-edge AI to help users create, analyze, and enhance Tamil literary content. Whether you're a professional songwriter, poet, or enthusiast, this tool provides intelligent assistance for various aspects of Tamil creative writing.",
      link: "https://github.com/aaivu/tamil-songwriting-assistant.git"
    },
    {
      title: "Sri Lanka - Conductor Portal",
      description: "This is a mobile/web application designed for bus conductors in Sri Lanka to issue tickets easily and quickly.The app allows conductors to select the route, enter the number of passengers, and instantly generate a digital ticket. It also records all daily trips, income, and passenger details automatically, so conductors don’t need to write anything by hand.",
      link: "https://github.com/Selvarajah-Vinushaanth/bus-ticket-system-frontend"
    },
    {
      title: "YOLOvFeed - Intelligent Multi-Camera Surveillance System",
      description: "YOLOvFeed is a real-time object detection and monitoring platform that turns IP cameras into smart surveillance systems using YOLO technology. It offers live streaming with accurate object recognition, customizable confidence levels, and a red/green bounding box system for prioritized tracking. The platform provides analytics, a real-time dashboard, AI chat assistance, and cloud storage through Firebase. Built with React TypeScript, FastAPI, and WebSockets, it delivers a modern and powerful surveillance experience.",
      link: "https://github.com/Selvarajah-Vinushaanth/bus-ticket-system-frontend"
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
