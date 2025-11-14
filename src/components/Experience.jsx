import { useEffect, useRef, useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const experiences = [
    {
      title: 'Research Intern',
      company: 'IIT Jammu',
      location: 'Indian Institute of Technology, Jammu',
      period: 'July 7 – July 20, 2025',
      description: 'Worked on the development of an AI-driven framework to optimize 3D printing parameters using ML models, data preprocessing, and SHAP-based interpretability.',
      icon: '🔬'
    },
    {
      title: 'Research and Development Intern (IRP- KLNCE)',
      company: 'Innovation and Research Park, KLNCE',
      location: 'KLNCE',
      period: 'Jan 2024 – Present',
      description: 'Active member of IRP contributing to research-based projects through ongoing on-campus internship.',
      icon: '🔭'
    },
    {
      title: 'App Development Intern',
      company: 'Jeyashree Spun Bond',
      location: 'Remote',
      period: 'Sep 2024 – Present',
      description: 'Worked on developing the Employee Performance Analysis System, a mobile app to track employee performance and company productivity in real time.',
      icon: '📱'
    }
  ];

  return (
    <div className="experience" ref={sectionRef}>
      <div className="experience-container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">My Journey</span>
          <h2 className="section-title">
            Professional <span className="highlight">Experience</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className={`timeline ${isVisible ? 'visible' : ''}`}>
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot">
                <div className="dot-outer">
                  <div className="dot-inner"></div>
                </div>
              </div>

              <div className="timeline-content">
                <div className="experience-card">
                  <div className="card-header">
                    <div className="experience-icon">
                      <span>{exp.icon}</span>
                    </div>
                    <div className="experience-meta">
                      <h3 className="experience-title">{exp.title}</h3>
                      <p className="experience-company">{exp.company}</p>
                      {exp.location && (
                        <p className="experience-location">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          {exp.location}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="experience-period">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{exp.period}</span>
                  </div>

                  <p className="experience-description">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;