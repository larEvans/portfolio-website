// src/pages/Projects.js
import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ContactPopup from "../components/ContactPopup";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [showContact, setShowContact] = useState(false);

  const togglePopup = (state) => {
    setShowContact(state);
  };

  useEffect(() => {
    async function loadRepos() {
      try {
        const { data } = await octokit.repos.listForUser({
          username: "larEvans",
          per_page: 100,
        });
        setRepos(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load repositories.");
      }
    }
    loadRepos();
  }, []);

  if (error) return <p className="text-danger">{error}</p>;
  if (!repos.length) return <p>Loading projects…</p>;

  return (
    <section id="projects-page" className="container my-5">
      <br />
      <h2 className="section-title">My Projects</h2>
      <div className="row">
        {repos.map((repo) => (
          <div key={repo.id} className="col-md-6 mb-4">
            <div className="card h-100 neon-section">
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-link"
                  >
                    {repo.name}
                  </a>
                </h5>
                {repo.description && (
                  <p className="card-text">{repo.description}</p>
                )}
                <small className="text-muted">
                  ⭐ {repo.stargazers_count} • {repo.language || "—"}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer-section text-center py-5">
        <div className="container">
          <h2 className="footer-heading mb-3">
            From Concept to <span className="highlight">CREATION</span>
            <br />
            Let’s Make It <span className="highlight">HAPPEN!</span>
          </h2>

          <button
            type="button"
            className="btn btn-cta mb-4"
            onClick={() => togglePopup(true)}
          >
            Get In Touch <span className="btn-arrow">→</span>
          </button>

          <div className="social-icons mt-4">
            <a href="https://github.com/larEvans" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/larson-evans"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:larson.evans@example.com" aria-label="Email">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </footer>

      {showContact && <ContactPopup onClose={() => togglePopup(false)} />}
    </section>
  );
}
