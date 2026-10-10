import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark-theme" : "app light-theme"}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      <main>
        <section id="home" className="hero">
          <div className="hero-container">

            <div className="hero-content">
              <p className="hello">Hello, I'm
              </p>

                <h1>Kunal Kumar</h1>

                <h2>Python Developer & AI/ML Enthusiast</h2>

                <p className="description">
                  I build backend applications, REST APIs and intelligent
                  solutions using Python and modern technologies.
                </p>

                <div className="hero-buttons">
                  <a href="#projects" className="btn primary">
                    View My Work
                  </a>

                  <a href="#contact" className="btn secondary">
                    Contact Me
                  </a>
                </div>
            </div>

            <div className="hero-image">
              <img
                src="Kunal.png"
                alt=""
              />
            </div>

          </div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;