import { useEffect, useRef, useState } from 'react';
import './Skills.css';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const categories = [
    { id: 'all', label: 'All Skills', icon: '🎯' },
    { id: 'languages', label: 'Languages', icon: '💻' },
    { id: 'frameworks', label: 'Frameworks', icon: '⚡' },
    { id: 'tools', label: 'Tools', icon: '🛠️' },
    { id: 'database', label: 'Database', icon: '🗄️' }
  ];

  const skillsData = [
    { name: 'Python', level: 90, category: 'languages', icon: '🐍' },
    { name: 'Java', level: 85, category: 'languages', icon: '☕' },
    { name: 'JavaScript', level: 88, category: 'languages', icon: '⚡' },
    { name: 'Dart', level: 80, category: 'languages', icon: '🎯' },
    { name: 'C', level: 75, category: 'languages', icon: '💾' },
    { name: 'React.js', level: 90, category: 'frameworks', icon: '⚛️' },
    { name: 'Node.js', level: 85, category: 'frameworks', icon: '🟢' },
    { name: 'Flutter', level: 88, category: 'frameworks', icon: '📱' },
    { name: 'React Native', level: 82, category: 'frameworks', icon: '📲' },
    { name: 'Scikit-learn', level: 85, category: 'frameworks', icon: '🤖' },
    { name: 'Pandas', level: 88, category: 'frameworks', icon: '🐼' },
    { name: 'Matplotlib', level: 80, category: 'frameworks', icon: '📊' },
    { name: 'SHAP', level: 75, category: 'frameworks', icon: '🔍' },
    { name: 'Git', level: 90, category: 'tools', icon: '🔀' },
    { name: 'Figma', level: 85, category: 'tools', icon: '🎨' },
    { name: 'MongoDB', level: 85, category: 'database', icon: '🍃' },
    { name: 'Firebase', level: 88, category: 'database', icon: '🔥' },
    { name: 'SQL', level: 80, category: 'database', icon: '🗃️' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <div className="skills" ref={skillsRef}>
      <div className={`skills-container ${isVisible ? 'visible' : ''}`}>
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="title-underline"></div>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="cat-icon">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="skill-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <div className="skill-bar-container">
                <div 
                  className="skill-bar"
                  style={{ '--skill-level': `${skill.level}%` }}
                >
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="skills-footer">
          <div className="footer-card">
            <div className="footer-icon">🚀</div>
            <h3>Always Learning</h3>
            <p>Constantly exploring new technologies and staying updated with industry trends</p>
          </div>
          <div className="footer-card">
            <div className="footer-icon">💡</div>
            <h3>Problem Solving</h3>
            <p>Applying these skills to build innovative solutions for real-world challenges</p>
          </div>
          <div className="footer-card">
            <div className="footer-icon">🤝</div>
            <h3>Collaboration</h3>
            <p>Working effectively in teams and contributing to open-source projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;