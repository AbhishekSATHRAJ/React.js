import React from "react";
import './profolio.css'
function profolio(){
    return(
     <>
     {/* <!-- Navbar --> */}
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand" href="skk">Abhishek Sathraj</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
          <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    {/* <!-- Hero Section --> */}
    <div class="hero">
      <div class="hero-content">
        <h1>Hi, I'm Abhishek Sathraj</h1>
        <p>Full-Stack Developer | Problem Solver | Tech Enthusiast</p>
        <button>Contact Me</button>
      </div>
    </div>

    {/* <!-- About Section --> */}
    <div id="about">
      <h2>About Me</h2>
      <p>
        I'm a passionate developer with experience in creating dynamic, scalable web applications. I love learning new technologies and solving complex problems.
      </p>
    </div>

    {/* <!-- Skills Section --> */}
    <div id="skills">
      <h2>Skills</h2>
      <div class="skills-list">
        <div class="skill-item">
          <h3>JavaScript</h3>
          <p>Building interactive web apps.</p>
        </div>
        <div class="skill-item">
          <h3>React</h3>
          <p>Creating modern front-end interfaces.</p>
        </div>
        <div class="skill-item">
          <h3>Node.js</h3>
          <p>Building efficient server-side applications.</p>
        </div>
        <div class="skill-item">
          <h3>MongoDB</h3>
          <p>Scalable database solutions for modern apps.</p>
        </div>
      </div>
    </div>

    {/* <!-- Projects Section --> */}
    <div id="projects">
      <h2>Projects</h2>
      <div class="project-item">
        <h3>Project One</h3>
        <p>A full-stack web application with React and Node.js</p>
        <a href="ss">View Project</a>
      </div>
      <div class="project-item">
        <h3>Project Two</h3>
        <p>Interactive front-end dashboard with React</p>
        <a href="ss">View Project</a>
      </div>
      <div class="project-item">
        <h3>Project Three</h3>
        <p>Backend API built with Express and MongoDB</p>
        <a href="ss">View Project</a>
      </div>
    </div>

    {/* <!-- Contact Section --> */}
    <div id="contact">
      <h2>Get in Touch</h2>
      <button>Email Me</button>
    </div>
     </>
    )
}
export default profolio;