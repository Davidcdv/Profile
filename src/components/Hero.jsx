import React from "react";
import "./Hero.css"; // Importing CSS file for styles
export const Hero = () => {
  return (
    <section id ="hero" className="hero">
      <div className="hero-content">
        <h1>
          👋 Hello My Name is <span className="name-highlight">David</span>, I
          am a
          <span className="role-highlight"> FullStack Software Engineer </span>
        </h1>
        <p>
          Highly dedicated Software Engineer with 2+ years of experience
          specializing in Node.js and other backend and frontend technologies.
        </p>
        <div className="hero-buttons">
          <a href="#resume" className="btn resume-btn">
            View Resume
          </a>
          <a href="#contact" className="btn contact-btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
