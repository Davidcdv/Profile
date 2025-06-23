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
         I’m a dedicated <i><b>Full-Stack Software Engineer</b></i> with a strong foundation in both backend and frontend development. I specialize in building robust APIs and scalable systems using Node.js, MongoDB, PostgreSQL, GraphQL, NestJS, and Django, while currently expanding my knowledge in Spring Boot.

On the frontend, I enjoy creating clean, responsive, and interactive user interfaces using React, Next.js, Tailwind CSS, and TypeScript. I’m passionate about building full-featured applications that are not only functional under the hood but also intuitive and enjoyable to use.

While I lean toward backend architecture and data-driven systems, I equally value frontend craftsmanship and believe the best engineers can bridge both worlds. I’m also exploring the fields of  <i>Machine learning and AI</i>, aiming to eventually apply full-stack skills to intelligent systems.

Above all, I’m committed to continuous learning, writing clean code, and solving real-world problems through thoughtful, scalable solutions ✨🦾.
        </p>
      </div>
    </section>
  );
};
