import React, { useEffect, useState } from "react";
import "./Hero.css";

export const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = [
    { text: "👋 Hello My Name is " },
    { text: "David", class: "name-highlight" },
    { text: ", I am a " },
    { text: "FullStack Software Engineer.", class: "role-highlight" },
  ];

  useEffect(() => {
    let partIndex = 0;
    let charIndex = 0;
    let tempText = "";

    const typeWriter = () => {
      if (partIndex < fullText.length) {
        const part = fullText[partIndex];
        if (charIndex < part.text.length) {
          // Add text for each part
          if (part.class) {
            tempText += `<span class="${part.class}">${part.text.charAt(
              charIndex
            )}</span>`;
          } else {
            tempText += part.text.charAt(charIndex);
          }
          setDisplayedText(tempText); // Update the text to be displayed
          charIndex++;
          setTimeout(typeWriter, 80); // Adjust speed here
        } else {
          partIndex++;
          charIndex = 0;
          setTimeout(typeWriter, 50);
        }
      }
    };

    typeWriter();
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>
          <span dangerouslySetInnerHTML={{ __html: displayedText }}></span>
          <span className="blink-cursor"></span>{" "}
          {/* Add the blinking cursor here */}
        </h1>
        <p>
          Highly dedicated Software Engineer
          specializing in React.js and other frontend and backend technologies.
        </p>
        <div className="hero-buttons">
          <a href="https://drive.google.com/file/d/1HiKRGvtkK5fCC4lshj99GqmVWArsxXbs/view?usp=drivesdk" className="btn resume-btn">
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












