import "./App.css";
import { Navbar } from "./components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import {Skills} from "./components/Skills";
import Contact from "./components/Contact";
import BackToTopButton from "./components/BackToTopButton";
import Project from "./components/Project";
function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project/>
      <Contact />
      <BackToTopButton/>
    </ThemeProvider>
  );
}

export default App;
