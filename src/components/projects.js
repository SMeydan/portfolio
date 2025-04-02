import React, { useEffect, useState } from 'react';
import '../App.css';
import projectsData from '../data/projects.json';
import '../styles/projects.css';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="projects-page">
      <img src={require('../assets/6.gif')} alt="loading..." />  
      <div className="projects-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project"
            style = {{
                alignSelf : project.position,
                }}
          >
            <h3>{project.title}</h3>
            <img src={require('../assets/7.gif')} alt="loading..." /> 
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
