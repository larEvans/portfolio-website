
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
const Resume = () => {
  return (
    <div className="container mt-5 mb-5 ">
      {/* Background Section */}
      <div classname="bg-container">
        <div className=" introductionDiv  text-center text-white">
          <div className="overlay">
            <h1 classname="">Larson Evans</h1>
            <h4>Skilled Software Developer</h4>
            <p>
              Dedicated to using my experience and expertise to help companies
              achieve their goals and deliver impactful solutions
            </p>
          </div>
        </div>

        {/* About Me Section */}
        <div className="card  pt-4 mt-8">
          <div className="card-body">
            <p className="fw-bold">
              I'm a Full Stack Software Engineer with over 3 years of experience
              building scalable, data-driven applications across web and cloud
              platforms. I specialize in C#, Python, and JavaScript, with
              hands-on expertise in frameworks like ASP.NET, React, and Flask.
              My focus is on delivering clean, maintainable code and intuitive
              user experiences, whether I'm designing backend APIs, automating
              data workflows, or developing custom visualizations. This site
              showcases my technical skills, past projects, and commitment to
              creating impactful software solutions.
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* Education Section */}
      <div className="section-title mt-5">
        <h3>Education</h3>
      </div>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Mercer University</h5>
          <p>Bachelor's in Computer Science (Graduation May 2023)</p>
          <p>
            <strong>Programming Languages:</strong> C#, CSS, Java, JavaScript,
            HTML, PHP, Python, PL/SQL, SQL
          </p>
          <p>
            <strong>Frameworks & Libraries:</strong> Spring Boot, React,
            Selenium, PostgreSQL
          </p>
          <p>
            <strong>Development Tools:</strong> Azure DevOps, Ubuntu, Docker,
            Git
          </p>
          <p>
            <strong>Security Clearance:</strong> Secret
          </p>
        </div>
      </div>
      {/* Professional Summary Section */}
      <div className="section-title mt-5">
        <h3>Professional Summary</h3>
      </div>
      <div className="card shadow-sm">
        <div className="card-body">
          <p>
            Experienced in designing, developing, and optimizing web
            applications with front-end and back-end technologies. Skilled in
            data processing, database integration, and user interface
            enhancements for high-performance applications.
          </p>
        </div>
      </div>
      {/* Work Experience Section */}
      <div className="section-title mt-5">
        <h3>Work Experience</h3>
      </div>
      {/* MERC */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">
            Mercer Engineering Research Center - Software Developer
          </h5>
          <p>
            <em>June 2023 – November 2024</em>
          </p>
          <ul>
            <li>
              using C#, HTML, SQL, PL/SQL, and Python modules i created multiple
              multiple new pages
            </li>
            <li>
              Designed a workflow for managing critical safety items for the
              C-130 aircraft.
            </li>
            <li>Enhanced AIRCAT's DTADS DASHBOARD for better data analysis.</li>
            <li>
              Developed a model accuracy truth table and containerized an AI
              model using Docker.
            </li>
          </ul>
        </div>
      </div>
      {/* Warner Robins AFB */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">
            Warner Robins Air Force Base - Software Developer Intern
          </h5>
          <p>
            <em>May 2021 – May 2023</em>
          </p>
          <ul>
            <li>
              Preprocessed data and trained ML models for SOA-ESB to prevent
              server crashes.
            </li>
            <li>
              Enhanced PEER, a satellite analysis platform, by adding a session
              chat feature with Spring Boot, React, and MongoDB.
            </li>
          </ul>
        </div>
      </div>
      {/* STEM Teacher Volunteer */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">
            Mercer on Mission - STEM Teacher Volunteer, South Africa
          </h5>
          <p>
            <em>June 2022 - July 2022</em>
          </p>
          <ul>
            <li>
              Taught programming using Jeroo, Python, Google Scripts, and Python
              turtles to middle and high school students.
            </li>
          </ul>
        </div>
      </div>
      {/* Projects Section */}
      <div className="section-title mt-5">
        <h3>Projects</h3>
      </div>
      {/* Stock Predictor */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Long Short-Term Memory Stock Predictor</h5>
          <p>
            <em>Spring 2023</em>
          </p>
          <ul>
            <li>
              Built a neural network with TensorFlow to predict stock price
              movements.
            </li>
            <li>
              Achieved 48% accuracy using moving averages and technical
              indicators.
            </li>
          </ul>
        </div>
      </div>
      {/* Job Queue Simulation */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Job Queue Simulation</h5>
          <p>
            <em>Spring 2022</em>
          </p>
          <ul>
            <li>
              Simulated an OS job queue with metrics like arrival and wait
              times.
            </li>
            <li>
              Used linked lists, pointers, and the Queue ADT for job processing.
            </li>
          </ul>
        </div>
      </div>
      {/* Employee Database */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Employee Database</h5>
          <p>
            <em>Spring 2022</em>
          </p>
          <ul>
            <li>
              Developed a personnel database for employee wages and payroll.
            </li>
            <li>Designed with object-oriented principles for scalability.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
