import React from "react";
import { useTheme } from "../context/ThemeContext"; // Assuming your ThemeContext is available
import "./About.css"; // Importing the CSS file

export const About = () => {
  const { theme } = useTheme(); // Accessing the theme from the context

  return (
    <section id="about" className={`about-section ${theme}`}>
      <div className="about-content">
        <h2>About</h2>
        <p>
          A highly dedicated Backend Engineer with 2+ years of experience
          specializing in Node.js and other backend and frontend technologies.
          Proficient in building robust APIs and scalable systems using MongoDB,
          PostgreSQL, GraphQL, NestJS, and Django. Currently expanding knowledge
          in SpringBoot, with a passion for deepening expertise in backend
          development. While skilled in frontend technologies like React,
          Tailwind, NextJS, and TypeScript, my primary focus is on backend
          development, aiming to eventually transition into the machine learning
          space. Dedicated to continuous learning and tackling complex
          challenges.
        </p>
      </div>
    </section>
  );
};
