import "./App.css";
import profile from "./assets/profile.jpg";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>Haneefa</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">

        <div className="hero-text">

          <h1>Haneefa Abdul Bari</h1>

          <h2>Computer Engineering Student</h2>

          <p>
            Aspiring Full Stack Developer passionate about web development,
            cybersecurity, and building modern applications.
          </p>

          <div className="hero-buttons">

            <a href="#projects">
              <button>View Projects</button>
            </a>

            <a
              href="https://github.com/Haneefa-007"
              target="_blank"
            >
              <button className="secondary-btn">
                GitHub
              </button>
            </a>

          </div>

        </div>

        <div className="hero-image">
          <img src={profile} alt="Profile" />
        </div>

      </section>

      <section id="about" className="about">

        <h2>About Me</h2>

        <p>
          I am a Computer Engineering student passionate about full stack
          development, cybersecurity, and modern web technologies.
          I enjoy building responsive and interactive applications while
          continuously improving my programming skills. I am also interested in emerging technologies and problem solving.
           Currently learning Java and exploring AI concepts. Interested in building real-world projects and seeking opportunities to grow skills and gain practical experience.
        </p>

      </section>

      <section id="skills" className="skills">

        <h2>Skills</h2>

        <div className="skills-container">

          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Java</div>
          <div className="skill-card">GitHub</div>

        </div>

      </section>

      <section id="projects" className="projects">

        <h2>Projects</h2>

        <div className="projects-container">

          <div className="project-card">

            <h3>Portfolio Website</h3>

            <p>
              Personal portfolio website built using React.js and CSS.
            </p>

            <a
              href="https://github.com/Haneefa-007/FUTURE_FS_01"
              target="_blank"
            >
              View Project
            </a>

          </div>

          <div className="project-card">

            <h3>Calculator App</h3>

            <p>
              A simple calculator application using JavaScript.
            </p>

            <a href="#">
              View Project
            </a>

          </div>

          <div className="project-card">

            <h3>Weather App</h3>

            <p>
              Weather application using API integration.
            </p>

            <a href="#">
              View Project
            </a>

          </div>

        </div>

      </section>

      <section id="contact" className="contact">

        <h2>Contact</h2>

        <p>Email: 007.haneefa.a.b@gmail.com</p>
        <p>Linkdin: https://www.linkedin.com/in/haneefa-abdul-bari-007</p>

        <a
          href="https://github.com/Haneefa-007"
          target="_blank"
        >
          Visit My GitHub
        </a>

      </section>

      <footer>
        <p>© 2026 Haneefa Abdul Bari. All rights reserved.</p>
      </footer>

    </>
  );
}

export default App;