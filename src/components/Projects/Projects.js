import React from 'react';
import './Projects.css';
import LazyLoad from 'react-lazyload';

const Projects = () => {
  const projectData = [
    {
      title: 'Book My Event',
      issuedBy: 'Personal Project',
      description: 'A mobile app for discovering and booking events. Designed an event discovery and booking platform with real-time backend powered by Firebase, managing data for over 500 events.',
      technologies: 'Kotlin, Firebase, Google Map API , Razor pay, SQLite, Coroutines, Retrofit and Jetpack Compose',
      link: 'https://github.com/aksharbisht2002/BookMyEvent',
    },
    {
      title: 'Cloud Kitchen Application',
      issuedBy: 'Freelance Project',
      description: 'This Android application falls under the E-commerce category and aims to provide customers with the convenience of viewing menus, ordering food, receiving deliveries at their doorstep, and providing feedback if needed.',
      technologies: 'Java / Kotlin, Firebase , Razor pay , Google Map API, Coroutines, Retrofit and Jetpack Compose',
      link: 'https://github.com/aksharbisht2002/Cloud-Kitchen-Application',
    },
    {
      title: 'SpaceIn',
      issuedBy: 'Personal Project',
      description: 'SpaceIn is an all-in-one Android app that offers captivating animations, games, and real-time updates on planets, celestial objects, and space news. With SpaceIn, users can explore the wonders of the universe right from their mobile devices.',
      technologies: 'Kotlin, Firebase, SQLite, Coroutines, API, Retrofit, Jetpack Compose, Unity(Game engine)',
      link: 'https://github.com/aksharbisht2002/Space-In-App',
    },
    {
      title: 'Syncwave Web App',
      issuedBy: 'University Project',
      description: 'A web service Designed and developed a Fully Functional real-time communication using MERN Stack.Built a real-time chat platform using Web Sockets, ReactJS, and JWT authentication, enabling secure text communication for over 100 concurrent users. Planned features include AI-powered chat, voice/video calls, and scalable MongoDB database to support 10,000+ users.',
      technologies: 'MERN Stack (MongoDB, Express, React, Node.js)',
      link: '#',
    },
    {
      title: 'Live Weather Data Dashboard',
      issuedBy: 'Personal Project',
      description: 'Welcome to the Live Weather Data Dashboard repository! This project provides a dynamic and visually appealing dashboard for displaying real-time weather information, including temperature, wind speed, humidity, and current weather conditions.',
      technologies: 'MERN Stack (MongoDB, Express, React, Node.js)',
      link: 'https://github.com/aksharbisht2002/Live-Weather-Report-App',
    },

    
  ];

  return (
    <section className="projects" id="projects">
      <LazyLoad height={200} offset={100} once>
        <h2>Projects</h2>
        <div className="projects-container">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-issued-by">Issued by: {project.issuedBy}</p>
                <p className="project-description">{project.description}</p>
                <p className="project-technologies">
                  <strong>Technologies:</strong> {project.technologies}
                </p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </LazyLoad>
    </section>
  );
};

export default Projects;
