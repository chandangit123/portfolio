import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">Chandan Gupta</span></h1>
        <p>A passionate Frontend Developer specializing in React & MERN Stack.</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
