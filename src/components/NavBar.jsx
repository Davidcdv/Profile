// import React from "react";
// import { useTheme } from "../context/ThemeContext";
// import { ThemeToggleButton } from "./ThemeToggleButton";

// export const Navbar = () => {
//   const { theme } = useTheme();

//   return (
//     <nav
//       style={{
//         padding: "10px",
//         background: theme === 'light' ? 'white' : 'black',
//         color: theme === 'light' ? 'black' : 'white', fontFamily:"sans-serif"
//       }}
//     >
//       <h1>Navbar - {theme} Theme</h1>
//       <ThemeToggleButton/>
//     </nav>
//   );
// };
// import React from "react";
// import { useTheme } from "../context/ThemeContext";
// import { ThemeToggleButton } from "./ThemeToggleButton";

// export const Navbar = () => {
//   const { theme } = useTheme();

//   return (
//     <nav
//       style={{
//         padding: "10px 20px",
//         background: theme === "light" ? "#f5f5f5" : "#333",
//         color: theme === "light" ? "#333" : "#f5f5f5",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         fontFamily: "sans-serif",
//       }}
//     >
//       <h1>Navbar - {theme} Theme</h1>
//       <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
//         <li>
//           <a
//             href="#"
//             style={{
//               color: theme === "light" ? "#333" : "#f5f5f5",
//               textDecoration: "none",
//             }}
//           >
//             Home
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             style={{
//               color: theme === "light" ? "#333" : "#f5f5f5",
//               textDecoration: "none",
//             }}
//           >
//             About
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             style={{
//               color: theme === "light" ? "#333" : "#f5f5f5",
//               textDecoration: "none",
//             }}
//           >
//             Contact
//           </a>
//         </li>
//       </ul>
//       <ThemeToggleButton />
//     </nav>
//   );
// };














// import React from "react";
// import { useTheme } from "../context/ThemeContext";
// import { ThemeToggleButton } from "./ThemeToggleButton";
// import './index.css'; // Import the CSS

// export const Navbar = () => {
//   const { theme } = useTheme();

//   return (
//     <nav className={theme === 'light' ? 'light' : 'dark'}>
//       <h1>Navbar - {theme} Theme</h1>
//       <ul>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">About</a></li>
//         <li><a href="#">Contact Us </a></li>
//       </ul>
//       <ThemeToggleButton />
//     </nav>
//   );
// };


// import { useTheme } from "../context/ThemeContext";
// import { FaSearch} from "react-icons/fa"; // Importing icons
// import "./index.css"; // Importing CSS
// import { ThemeToggleButton } from "./ThemeToggleButton";


// export const Navbar = () => {
//   const { theme } = useTheme(); // Added toggleTheme function for theme switching

//   return (
//     <nav className={theme === "light" ? "light" : "dark"}>
//       <h1>DavidC</h1>
//       <ul>
//         <li>
//           <a href="./NavBar.jsx">Home</a>
//         </li>
//         <li>
//           <a href="#about">About</a>
//         </li>
//         <li>
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>
//       <div className="navbar-icons">
//         {/* Search Icon */}
//         <ThemeToggleButton />
//       </div>
//     </nav>
//   );
// };



import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaBars, FaTimes } from "react-icons/fa"; // Import Hamburger Icon
import { ThemeToggleButton } from "./ThemeToggleButton";
import "./index.css"; // Importing CSS

export const Navbar = () => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state when the hamburger icon is clicked
  };

  return (
    <nav id="Navbar" className={theme === "light" ? "light" : "dark"}>
      <h1>DavidC</h1>
      {/* Menu */}
      <ul className={isMenuOpen ? "menu-open" : ""}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* Hamburger Icon */}
      <div
        className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between icons */}
      </div>
      <div className="navbar-icons">
        {/* Search Icon */}
        <ThemeToggleButton />
      </div>
    </nav>
  );
};







