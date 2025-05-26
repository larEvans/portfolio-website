import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/about.css";  // create this next
import bgImg from "./css/background.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function About() {
  return (
    <section className="about-page container py-5">
      {/* Title */}
      <br />
      <h2 className="section-title text-center mb-5">About Me</h2>
      {/* Two-column intro */}
      <div className="neon-section mb-5">
        <div className="row align-items-center">
          <div className="row align-items-center mb-5">
            <div className="col-md-4 text-center">
              <img
                src={bgImg}
                alt="Larson Evans"
                className="about-photo img-fluid rounded-circle shadow-sm"
              />
            </div>
            <div className="col-md-8">
              <p className="lead">
                Hi, I’m <strong>Larson Evans</strong>, a Full Stack Software
                Engineer with 3+ years building data-driven applications for the
                U.S. Air Force and Mercer Engineering Research Center. I love
                turning complex requirements into user-friendly tools and
                visualizing big data to drive better decisions.
              </p>
              <p>
                My expertise spans C#, .NET, React, Python, SQL/PLSQL, and
                modern DevOps tools (Docker, Azure DevOps). When I’m not coding,
                you’ll find me exploring synthwave design, improving my chess
                rating, or hiking trails around Atlanta.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Skill pills */}
      <div className="neon-section mb-5">
        <div className="row mb-5">
          <div className="col-12">
            <h4 className="mb-3">Skills & Technologies</h4>
            <div className="skill-pill">C# /.NET</div>
            <div className="skill-pill">React</div>
            <div className="skill-pill">Python</div>
            <div className="skill-pill">SQL / PL/SQL</div>
            <div className="skill-pill">Flask</div>
            <div className="skill-pill">Docker</div>
            <div className="skill-pill">Azure DevOps</div>
            <div className="skill-pill">Bootstrap</div>
          </div>
        </div>
      </div>
      <footer className="footer-section text-center py-5">
        <div className="container">
          <h2 className="footer-heading mb-3">
            From Concept to <span className="highlight">CREATION</span>
            <br />
            Let’s Make It <span className="highlight">HAPPEN!</span>
          </h2>
          <a href="#contact" className="btn btn-cta mb-4">
            Get In Touch <span className="btn-arrow">→</span>
          </a>

          {/* social icons */}
          <div className="social-icons mt-4">
            <a
              href="https://github.com/larEvans"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/larson-evans"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:larson.evans@example.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>

    </section>
    
  );
}
