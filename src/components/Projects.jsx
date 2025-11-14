import { useState, useEffect, useRef } from 'react';
import './Projects.css';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: 'MatAI - Intelligent Mathematics Learning System',
      category: 'ai',
      description: 'An AI-powered interactive math learning platform that transforms static equations into dynamic visual step-by-step animated explanations for deeper conceptual understanding.',
      tech: ['Python', 'React', 'Groq LLM', 'Flask', 'Manim'],
      image: '🧮',
      github: 'https://github.com/ajaymadhavan23',
      year: '2025'
    },
    {
      title: 'AI-Driven 3D Printing Optimization',
      category: 'ai',
      description: 'An AI-driven framework to optimize 3D printing parameters by applying ML models to predict surface finish, strength, and process efficiency using SHAP for actionable insights.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'SHAP'],
      image: '🖨️',
      github: 'https://github.com/ajaymadhavan23',
      year: '2025'
    },
    {
      title: 'GramaKart - Empowering Rural Sellers',
      category: 'mobile',
      description: 'A mobile app built to connect rural entrepreneurs with urban buyers for direct product sales, featuring dual interfaces, scheme suggestions, and a simple UI for easy access.',
      tech: ['Flutter', 'Dart', 'Firebase'],
      image: '🛍️',
      github: 'https://github.com/ajaymadhavan23',
      year: '2024'
    },
    {
      title: 'Weather App',
      category: 'web',
      description: 'A simple and clean weather forecast application built for learning purposes, featuring real-time weather data and intuitive UI design.',
      tech: ['React', 'Weather API', 'CSS'],
      image: '🌤️',
      github: 'https://github.com/ajaymadhavan23/Weatherapp-react-learning',
      year: '2024'
    },
    {
      title: 'Personal Portfolio Website',
      category: 'web',
      description: 'A modern, responsive portfolio website showcasing my projects, skills, and experience with smooth animations and interactive design elements.',
      tech: ['React', 'CSS3', 'JavaScript'],
      image: '💼',
      github: 'https://github.com/ajaymadhavan23',
      year: '2025'
    },
    {
        title: 'SatelliteApp - LLD for Satellite Management System',
        category: 'LLD - java',
        description: 'A Low-Level Design (LLD) project for a Satellite Management System using Java, focusing on object-oriented principles and design patterns to create a scalable architecture. - EI Study Placement Project',
        tech: ['Java', 'OOP', 'LLD','Design Patterns','Design Principles'],
        image: '🛰️',
        github: 'https://github.com/ajaymadhavan23/EI-Study',
        year: '2025'
      }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🎯' },
    { id: 'web', label: 'Web Apps', icon: '🌐' },
    { id: 'mobile', label: 'Mobile Apps', icon: '📱' },
    { id: 'ai', label: 'AI/ML', icon: '🤖' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects" ref={sectionRef}>
      <div className="projects-container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className={`filter-buttons ${isVisible ? 'visible' : ''}`}>
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="filter-icon">{cat.icon}</span>
              <span className="filter-label">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(project.github, '_blank')}
            >
              <div className="project-image">
                <div className="image-overlay"></div>
                <span className="project-emoji">{project.image}</span>
                <div className="project-year">{project.year}</div>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="github-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <span className="no-projects-icon">🔍</span>
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;