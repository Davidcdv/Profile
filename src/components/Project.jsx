import React from "react";
import SpotifyClone from "../assets/Spotify-clone-app.webp";
import WeatherApp from "../assets/weather.png";
import Manage from "../assets/manage.jpeg";
import "./index.css";
import { useTheme } from "../context/ThemeContext"; 

const Project = () => {
  const projects = [
    {
      id: 1,
      src: SpotifyClone,
      name: "Spotify Clone (Music player)",
      description:
        "A music streaming application that mimics the features of Spotify, allowing users to discover, play, and manage their favorite songs, albums, and playlists. The app provides an intuitive interface for users to search for artists, tracks, and genres, create and share playlists, and enjoy high-quality audio streaming. With personalized recommendations, seamless playback, and a responsive design, the Spotify Clone app offers a rich music experience on any device.",
      live: "https://frontendspotify1.onrender.com",
      Github1: "https://github.com/Davidcdv/FrontEndSpotify",
      Github2: "https://github.com/Davidcdv/BackEndSpotify",
      stack: "M.E.R.N (MONGODB,EXPRESS,REACT & NODEJS)",
    },
    {
      id: 2,
      src: WeatherApp,
      name: "Weather App",
      description:
        "A user-friendly weather application that provides real-time weather updates and forecasts. With this app, users can easily check the current weather conditions, view hourly and weekly forecasts, and access detailed information like temperature, humidity, wind speed, and more. The app features a sleek, intuitive interface, making it simple to search for weather data by city or automatically detect the user's location. Powered by reliable weather APIs, it ensures accurate and up-to-date weather information for any location around the world.",
      live: "https://weatherapp-0sw9.onrender.com",
      Github: "https://github.com/Davidcdv/WeatherApp",
      stack: "HTML,CSS & JavaScript",
    },
    {
      id: 3,
      src: Manage,
      name: "Manage Website",
      description:
        "A website to express my Front-End Skills in designing and captivating User Experience ",
      live: "https://manage2.onrender.com/",
      Github: "https://github.com/Davidcdv/Manage",
      stack: "React,CSS(TailWind CSS) & JavaScript",
    },

    // Add the rest of the projects here
  ];
  const { theme } = useTheme(); 
  return (
    <div className={`projects-container ${theme}`}>
      <div className="projects-wrapper">
        <div className="projects-header">
          <p className="projects-title">Projects</p>
          <p className="projects-description">
            Check out some of the projects I have worked on👨🏿‍💻
            <br />
            Includes personal and non-personal projects.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map(
            ({
              id,
              src,
              name,
              description,
              live,
              Github,
              Github1,
              Github2,
              stack,
            }) => (
              <a
                key={id}
                href={live}
                target="_blank"
                rel="noreferrer"
                className="project-card-link"
              >
                <div className={`project-card ${id === 3 ? 'manage-card' : ''}`}>
                  <img src={src} alt={name} className="project-image" />
                  <div className="project-details">
                    <h1 className="project-name">{name}</h1>
                    <p className="project-description">{description}</p>
                    <p className="project-stack">{stack}</p>
                  </div>
                  <div className="links-container">
                    {live && (
                      <a
                        href={live}
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      ></a>
                    )}
                    {Github && (
                      <a
                        href={Github}
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      >
                        Github Repo
                      </a>
                    )}
                    {/* GitHub front-end link */}
                    {Github1 && (
                      <a
                        href={Github1}
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      >
                        Github Front-End Repo
                      </a>
                    )}
                    {/* GitHub back-end link */}
                    {Github2 && (
                      <a
                        href={Github2}
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      >
                        Github Back-End Repo
                      </a>
                    )}
                    {stack && (
                      <a
                        href={stack}
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      ></a>
                    )}
                  </div>
                </div>
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
