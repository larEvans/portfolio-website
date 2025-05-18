// src/pages/Resume.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Resume() {
    const [resume, setResume] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/portfolio/resume')
            .then(response => setResume(response.data))
            .catch(error => console.error("Error fetching resume:", error));
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">My Resume</h2>
            
            {resume && (
                <div className="text-center mb-4">
                    <p>{resume.description}</p>
                    <a href={resume.filePath} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Download Resume
                    </a>
                </div>
            )}
            
            {/* Education Section */}
            <div className="card mb-3">
                <div className="card-body">
                    <h3 className="card-title">Education</h3>
                    <p className="card-text">Mercer University, BA in Computer Science</p>
                </div>
            </div>

            {/* Experience Section */}
            <div className="card mb-3">
                <div className="card-body">
                    <h3 className="card-title">Experience</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <strong>Software Engineer at Mercer Engineering Research Center</strong><br />
                            Developed and maintained full-stack applications, enhanced AIRCAT system performance, and worked on the AC-130 safety workflow.
                        </li>
                        {/* Add more experiences as needed */}
                    </ul>
                </div>
            </div>

            {/* Skills Section */}
            <div className="card mb-3">
                <div className="card-body">
                    <h3 className="card-title">Skills</h3>
                    <p className="card-text">C#, .NET, React, SQL, PostgreSQL, Python, Docker, DevOps practices, and more.</p>
                </div>
            </div>

            {/* Projects Section */}
            <div className="card mb-3">
                <div className="card-body">
                    <h3 className="card-title">Projects</h3>
                    <p className="card-text">Include a brief description of your most significant projects, or link to the Projects page if you have it.</p>
                </div>
            </div>
        </div>
    );
}

export default Resume;
