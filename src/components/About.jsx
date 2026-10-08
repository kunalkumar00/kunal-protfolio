function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="about-title">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>I'm Kunal Kumar</h3>

            <p>
              I'm a Python developer and AI/ML enthusiast who enjoys
              building practical applications and solving real-world
              problems with technology.
            </p>

            <p>
              I'm currently working with Python, FastAPI, PostgreSQL,
              REST APIs and modern web technologies. I'm also exploring
              Artificial Intelligence and Machine Learning to build
              smarter applications.
            </p>

            <p>
              My goal is to become a strong software developer and
              build reliable, scalable and useful products.
            </p>
          </div>

          <div className="about-info">
            <div className="info-box">
              <h4>Backend</h4>
              <p>Python & FastAPI</p>
            </div>

            <div className="info-box">
              <h4>Database</h4>
              <p>PostgreSQL & SQL</p>
            </div>

            <div className="info-box">
              <h4>AI / ML</h4>
              <p>Python & OpenCV</p>
            </div>

            <div className="info-box">
              <h4>Development</h4>
              <p>Git & GitHub</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;