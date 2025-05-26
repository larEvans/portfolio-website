import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import ContactPopup from "../components/ContactPopup";
const Home = () => {
  const [showContact, togglePopup] = useState(false);
  return (
    <>
      <section className="hero-section d-flex">
        <div className="hero-section__overlay" />

        <div className="container hero-content text-center">
          <div
            className="row justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-lg-8 col-md-10">
              <h1>
                <b>Larson Evans</b>
              </h1>
              <p className="lead">
                Skilled Software Developer
                <br />
                Dedicated to using my experience and expertise to help companies
                achieve their goals and deliver impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        {/* Education */}
        <div className="section-title">
          <h3>Education</h3>
        </div>
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h5 className="card-title">Mercer University</h5>
            <p>
              <strong>Bachelor’s:</strong> Computer Science
            </p>
            <p>
              <strong>Minor:</strong> Information Technology
            </p>
            <p>
              <strong>Languages:</strong> C#, CSS, Java, JavaScript, HTML,
              Python, PL/SQL, SQL
            </p>
            <p>
              <strong>Frameworks & Libraries:</strong> Spring Boot, React,
              Selenium, PostgreSQL, Flask
            </p>
            <p>
              <strong>Methodologies:</strong> Agile/Scrum
            </p>
            <p>
              <strong>Tools:</strong> Azure DevOps, Ubuntu, Docker, Git
            </p>
            <p>
              <strong>Clearance:</strong> Active Secret
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                size={75}
                href="https://github.com/larEvans"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </p>
          </div>
        </div>
        {/* Professional Summary */}
        <div className="section-title">
          <h3>Professional Summary</h3>
        </div>
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <p>
              As a Software Engineer, I bring extensive Full Stack Web
              Development experience from my work with the U.S. Air Force and
              Mercer Engineering Research Center. During my time in the
              military-industrial sector, I deepened my expertise in HTML, CSS,
              JavaScript, C#, SQL, and PL/SQL by contributing to AIRCAT— a
              mission-critical aircraft maintenance suite. I develop dynamic,
              user-friendly interfaces, optimize server-side logic, and design
              complex database structures. My Python skills in data manipulation
              and visualization let me turn raw data into actionable insights
              that drive better decision-making.
            </p>
          </div>
        </div>
        {/* Work Experience */}
        <div className="section-title">
          <h3>Work Experience</h3>
        </div>
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h5 className="card-title">
              Mercer Engineering Research Center – Software Developer
            </h5>
            <p>
              <em>June 2023 – Feb 2025</em> | Warner Robins, GA
            </p>
            <ul>
              <li>
                Full-stack C#/.NET, HTML, SQL/PLSQL & Python development on
                AIRCAT.
              </li>
              <li>
                Built RESTful APIs, maintained MVC patterns & integrated legacy
                SOAP services.
              </li>
              <li>
                Authored Selenium tests for DTADS Dashboard to automate UI
                regression checks.
              </li>
              <li>
                Collaborated on Agile Scrum teams to track military asset
                workflows via AC-130 data.
              </li>
              <li>
                Optimized complex SQL queries for multi-source reporting &
                performance tuning.
              </li>
              <li>
                Used Python (Pandas, seaborn, matplotlib, CUDA) to generate
                data-viz & Dockerized CI/CD models.
              </li>
              <li>
                Supported Air Force FOT&E by building safety-item analysis
                tools, boosting compliance.
              </li>
            </ul>
          </div>
        </div>
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h5 className="card-title">
              Warner Robins AFB – Software Developer Intern
            </h5>
            <p>
              <em>May 2021 – May 2023</em>
            </p>
            <ul>
              <li>
                Preprocessed data & trained ML models for SOA-ESB; automated
                crash-prevention workflows.
              </li>
              <li>
                Enhanced PEER platform (Spring Boot, React, Java, MongoDB) by
                adding a session chat feature.
              </li>
            </ul>
          </div>
        </div>
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h5 className="card-title">
              Mercer on Mission – STEM Teacher Volunteer (South Africa)
            </h5>
            <p>
              <em>June 2022 – July 2022</em>
            </p>
            <ul>
              <li>
                Taught introductory programming (Jeroo, Python, Google Scripts,
                Turtle) to middle & high schoolers.
              </li>
            </ul>
          </div>
        </div>
        {/* Projects */}
        <div className="section-title">
          <h3>Projects</h3>
        </div>
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h5 className="card-title">La Tax and Budget Calculator</h5>
            <p>
              <em>Spring 2025</em>
            </p>
            <ul>
              <li>
                Full-stack Flask/Pandas/SQLAlchemy app to track 1099-NEC & W-2
                incomes and calculate taxes.
              </li>
              <li>
                Dynamic forms (Jinja2 & JS) for multi-step entries; data
                persisted in SQLite.
              </li>
              <li>
                Pandas aggregations & Chart.js for interactive summaries;
                OpenPyXL for Excel exports.
              </li>
              <li>Responsive light/dark UI for seamless CRUD operations.</li>
            </ul>
          </div>
        </div>
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h5 className="card-title">LSTM Stock Predictor Application</h5>
            <p>
              <em>Spring 2023</em>
            </p>
            <ul>
              <li>
                Built TensorFlow NN for stock price direction prediction (48%
                accuracy).
              </li>
              <li>
                Engineered features from moving averages & technical indicators;
                tuned hyperparameters.
              </li>
              <li>
                Evaluated via accuracy & MSE; containerized training pipeline.
              </li>
            </ul>
          </div>
        </div>
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h5 className="card-title">Job Queue Simulator</h5>
            <p>
              <em>Spring 2022</em>
            </p>
            <ul>
              <li>
                Simulated OS job scheduling with linked lists & Queue ADT;
                tracked wait/turnaround times.
              </li>
              <li>
                Displayed metrics (CPU usage, idle time, job status) for
                real-time analysis.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}

      {/* Footer CTA */}
      {/* Footer CTA */}
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

          {/* social icons… */}
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
      {/* render the popup when triggered */}
      {showContact && <ContactPopup onClose={() => togglePopup(false)} />}
    </>
  );
};

export default Home;
