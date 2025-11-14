import React, { useEffect, useRef, useState } from 'react';
import './Education.css';

const Education = () => {
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

  const education = [
    {
      degree: 'Bachelors Degree',
      field: 'Artificial Intelligence & Data Science',
      institution: 'KLN College of Engineering',
      period: 'May 2026',
      score: 'GPA: 8.67/10',
      website: 'https://klnce.edu'
    },
    {
      degree: 'Higher Secondary',
      field: '',
      institution: 'SeventhDay Adventist Hr. Sec. School',
      period: 'April 2022',
      score: 'Percentage: 73.17',
      website: 'https://www.justdial.com/Madurai/Seventh-Day-Adventist-Matriculation-Higher-Secondary-School-Arasaradi/0452P452STD3002412_BZDET' // update with the real website if different
    }
  ];

  return (
    <section id="education" className="education-section" ref={sectionRef}>
      <div className={`container fade-in ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title gradient-text">Education</h2>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="education-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="education-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              
              <div className="education-content">
                <h3 className="education-degree">
                  {edu.degree}
                  {edu.field && <span className="education-field"> ({edu.field})</span>}
                </h3>
                <p className="education-institution">
                  {edu.institution}
                  {edu.website && (
                    <a
                      className="education-link-icon"
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit ${edu.institution} website`}
                      style={{ marginLeft: 8, verticalAlign: 'middle', display: 'inline-block' }}
                    >
                      {/* External Link Icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 3h3v3"></path>
                        <path d="M21 3l-12 12"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M3 21h18v-18"></path>
                      </svg>
                    </a>
                  )}
                </p>
                <div className="education-details">
                  <span className="education-period">{edu.period}</span>
                  <span className="education-score">{edu.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
