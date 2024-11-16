import React from "react";
import "./Skills.css"; // Assuming you have a separate CSS file for styles
import { useTheme } from "../context/ThemeContext"; // Assuming your ThemeContext is available
export const Skills = () => {
  const skills = [
    {
      id: 1,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/typescript-programming-language-icon.png",
      paragraph: "TypeScript",
    },
    {
      id: 2,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/graphql-icon.png",
      paragraph: "GraphQL",
    },
    {
      id: 3,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.svg",
      paragraph: "React JS",
    },
    {
      id: 4,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/python-programming-language-icon.png",
      paragraph: "Python",
    },
    {
      id: 5,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png",
      paragraph: "JavaScript",
    },
    {
      id: 6,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/django-icon.png",
      paragraph: "Django (DRF)",
    },
    {
      id: 7,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png",
      paragraph: "Node.js (Express.js)",
    },
    {
      id: 8,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nest-js-icon.png",
      paragraph: "Nest.js",
    },
    {
      id: 9,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.svg",
      paragraph: "MongoDB",
    },
    {
      id: 10,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postgresql-icon.svg",
      paragraph: "PostgreSQL",
    },
    {
      id: 11,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.svg",
      paragraph: "Tailwind CSS",
    },
    {
      id: 12,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.svg",
      paragraph: "HTML",
    },
    {
      id: 13,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.svg",
      paragraph: "CSS",
    },
    {
      id: 14,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/java-programming-language-icon.png",
      paragraph: "Java",
    },
    {
      id: 15,
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mysql-icon.png",
      paragraph: "Mysql",
    },
    {
      id: 16,
      src: "data:image/png;base64,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",
      paragraph: "Spring",
    },
  ];
  const { theme } = useTheme(); // Accessing the theme from the context

  return (
    <div className={`skills-section ${theme}`}>
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-description">
          These are the technologies I've worked with 🛠️
        </p>
        <div className="skills-grid">
          {skills.map(({ id, src, paragraph }) => (
            <div key={id} className="skill-card">
              <img key={id} src={src} alt={paragraph} className="skill-icon" />
              <p className="skill-name">{paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


