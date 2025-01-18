import React from 'react';
import Projects from '../components/Projects';
import resumeData from '../data/resume.json';
import '../styles/resume.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <div className="portfolio-container">
        <h1>Portfolyo</h1>
        <Projects projects={resumeData.projects} />
      </div>
    </div>
  );
};

export default Portfolio; 