// src/pages/Projects.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header'; // Import the header


function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/portfolio/projects')
            .then(response => setProjects(response.data))
            .catch(error => console.error("Error fetching projects:", error));
    }, []);

    return (
        
        <div className="container">
            <h2>Projects</h2>
            <div className="row">
                {projects.map(project => (
                    <div className="col-md-4" key={project.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <p><strong>Technologies:</strong> {project.technologies}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
