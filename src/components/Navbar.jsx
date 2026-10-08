function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav className="navbar">

      <div className="logo-container">
        <img
          src="IMG_8584.jpg"
          alt=""
          className="navbar-profile"
        />

        <div className="logo">
          KUNAL
        </div>
      </div>

      <div className="nav-right">

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;