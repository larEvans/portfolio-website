// src/pages/Projects.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header'; // Import the header
// src/components/Projects.js
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Octokit } from "@octokit/rest";

// instantiate Octokit with a token (to avoid strict rate-limits)
const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN
});

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadRepos() {
      try {
        // if you want org repos:

        // if you wanted a user’s repos instead, use:
        const { data } = await octokit.repos.listForUser({ username: "larEvans", per_page: 100 });

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

    </section>
  );
}
