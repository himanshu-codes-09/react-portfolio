import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <img
          src="https://via.placeholder.com/120"
          alt="Himanshu Tiwari"
          className="profile-img"
        />
        <h1>Himanshu Tiwari</h1>
        <p>Frontend Web Developer | React Learner</p>
        <a
          href="https://drive.google.com/your-resume-link"
          className="resume-btn"
          target="_blank"
          rel="noreferrer"
        >
          📄 Download Resume
        </a>
      </header>

      <section className="about">
        <h2>👨‍💻 About Me</h2>
        <p>
          I’m a B.Tech Computer Science (Data Science) student. I love building
          clean, responsive websites and exploring the latest frontend tech. Currently learning React.js and touch typing.
        </p>
      </section>

      <section className="skills">
        <h2>🛠️ Skills</h2>
        <div className="skills-grid">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Git & GitHub</span>
          <span>Bootstrap</span>
          <span>Touch Typing</span>
        </div>
      </section>

      <section className="projects">
        <h2>📂 Projects</h2>
        <ul>
          <li><strong>Todo List App</strong> – React-based task manager</li>
          <li><strong>Portfolio Website</strong> – This project!</li>
          <li><strong>Weather App</strong> – React + OpenWeather API</li>
        </ul>
      </section>

      <section className="contact">
        <h2>📬 Contact</h2>
        <p>Email: raghavtiwari060@gmail.com</p>
        <p>GitHub: <a href="https://github.com/himanshu-codes-09" target="_blank" rel="noreferrer">himanshu-codes-09</a></p>
      </section>

      <footer>
        <p>© 2025 Himanshu Tiwari. Built with ❤️ using React.js</p>
      </footer>
    </div>
  );
}

export default App;
