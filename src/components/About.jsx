import { useEffect, useRef, useState } from 'react';
import './About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="about" ref={aboutRef}>
      <div className="about-container">
      <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-tag">Who Am I?</span>
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className={`about-layout ${isVisible ? 'visible' : ''}`}>
          {/* Left Side - Image/Avatar Section */}
          <div className="about-left">
            <div className="profile-card">
              <div className="profile-image">
                <div className="profile-circle">
                  <span className="profile-initial">AM</span>
                </div>
                <div className="profile-ring"></div>
              </div>
              <div className="profile-info">
                <h3>Ajay Madhavan K L K</h3>
                <p>AI & Data Science Student</p>
                <div className="profile-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Madurai, Tamil Nadu</span>
                </div>
              </div>
              <div className="quick-stats">
                <div className="quick-stat">
                  <span className="stat-value">8.67</span>
                  <span className="stat-text">GPA</span>
                </div>
                <div className="quick-stat">
                  <span className="stat-value">3+</span>
                  <span className="stat-text">Projects</span>
                </div>
                <div className="quick-stat">
                  <span className="stat-value">2</span>
                  <span className="stat-text">Internships</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content Section */}
          <div className="about-right">
            <div className="about-intro">
              <h3>Hello! 👋</h3>
              <p>
                I'm a <span className="text-highlight">highly motivated AI & Data Science undergraduate</span> with 
                a passion for building impactful solutions in education and technology.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <div className="detail-icon">🎯</div>
                <div className="detail-content">
                  <h4>Problem Solver</h4>
                  <p>Expert in analyzing complex problems and creating innovative solutions using cutting-edge technologies</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">💻</div>
                <div className="detail-content">
                  <h4>Full Stack Developer</h4>
                  <p>Proficient in React.js, Node.js, Flutter, and React Native for building web and mobile applications</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">🤖</div>
                <div className="detail-content">
                  <h4>AI & ML Enthusiast</h4>
                  <p>Working on ML models, data preprocessing, and AI-driven frameworks for real-world applications</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">🔬</div>
                <div className="detail-content">
                  <h4>Research Intern</h4>
                  <p>Currently at IIT Jammu, optimizing 3D printing parameters using AI and SHAP interpretability</p>
                </div>
              </div>
            </div>

            <div className="about-footer">
              <p className="footer-text">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source, 
                or brainstorming the next big innovation!
              </p>
              <a href="mailto:ajaymadhavan23@gmail.com" className="btn btn-primary">
                <span>Let's Talk</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;