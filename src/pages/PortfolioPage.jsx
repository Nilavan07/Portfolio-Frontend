import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import SkillItem from '../components/SkillItem';
import Footer from '../components/Footer';
import { fetchPortfolioData } from '../services/api';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';
import resumePDF from '../assets/resume.pdf';
import '../styles/global.css';
import '../styles/theme.css';

const PortfolioPage = () => {
  const [data, setData] = useState({ projects: [], skills: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    const loadData = async () => {
      try {
        const portfolioData = await fetchPortfolioData();
        setData(portfolioData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div>
      <Header />
      <Hero />
      
      <main className="container">
        {/* About Section */}
        <section id="about" className="section">
          <div className="about-container">
            <div className="about-content">
              <h2 className="section-title">About Me</h2>
              <div className="about-text">
                <p>
                I'm a passionate web developer focused on building clean, responsive, and user-centered digital experiences. With a blend of creativity and strong technical skills, I develop websites and applications that are both visually engaging and functionally reliable. I’m committed to writing quality code, paying attention to detail, and continuously improving my craft. Whether it’s a sleek landing page or a full-scale web application, I strive to deliver modern, efficient solutions that bring real value to users and clients alike.
                  
                </p>
                <a 
                  href={resumePDF} 
                  download="YourName_Resume.pdf"
                  className="resume-button"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {data.projects.map(project => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {data.skills.map(skill => (
              <SkillItem key={skill._id} skill={skill} />
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p>I'm currently looking for new opportunities. Feel free to reach out!</p>
            <a href="mailto:nilavan0710@gmail.com" className="contact-button">
              Contact Me
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;