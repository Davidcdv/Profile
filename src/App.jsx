import "./App.css";
import { Navbar } from "./components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import {Skills} from "./components/Skills";
import Contact from "./components/Contact";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <BackToTopButton/>
    </ThemeProvider>
  );
}

export default App;
