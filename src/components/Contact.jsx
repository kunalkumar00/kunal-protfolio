function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <div className="section-title">
          <p>GET IN TOUCH</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-content">

          <div className="contact-text">
            <h3>Let's Work Together</h3>

            <p>
              I'm always interested in learning, building new projects,
              and exploring opportunities in software development and AI/ML.
            </p>

            <p>
              Feel free to reach out if you would like to connect or
              discuss a project.
            </p>
          </div>

          <div className="contact-info">

            <div className="contact-item">
              <h4>Email</h4>
              <p><a href="mailto:Kunal36985@gmail.com">Kunal36985@gmail.com</a></p>
            </div>

            <div className="contact-item">
              <h4>GitHub</h4>
              <a href="https://github.com/kunalkumar00" target="_blank" rel="noopener noreferrer">
                GitHub Profile ↗
              </a>
            </div>

            <div className="contact-item">
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/kunal-kumar-942ba0269" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile ↗
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;