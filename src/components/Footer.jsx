function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          KUNAL
        </div>

        <p>
          Python Developer & AI/ML Enthusiast
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-line"></div>

        <p className="copyright">
          © {new Date().getFullYear()} Kunal Kumar. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;