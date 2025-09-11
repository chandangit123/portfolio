import React from "react";
import "./About.css";
import myImage from "../myimage.jpg"; // <-- make sure this path is correct

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            Hi, I'm <span className="highlight">Chandan Gupta</span>, a passionate Full Stack Developer with expertise in JavaScript, React, Node.js, and other modern web technologies. I love building scalable, responsive, and user-friendly web applications that solve real-world problems.
With a strong foundation in both frontend and backend development, I enjoy working across the full stack — from designing intuitive UI/UX interfaces to implementing efficient server-side logic. I'm always exploring new technologies, frameworks, and best practices to enhance my skillset and deliver impactful solutions.
          </p>
          <p>
            I'm always eager to learn new technologies and take on challenging
            projects. My goal is to create user-friendly and visually appealing
            digital experiences.
          </p>
        </div>
        <div className="about-image">
           <img src={myImage} alt="Chandan Gupta" />        </div>
      </div>
    </section>
  );
}

export default About;
