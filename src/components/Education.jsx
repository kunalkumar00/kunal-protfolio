function Education() {
  return (
    <section id="education" className="education">
      <div className="education-container">

        <div className="section-title">
          <p>MY BACKGROUND</p>
          <h2>Education</h2>
        </div>

        <div className="education-card">
          <div className="education-content">
            <span className="education-year">2023 - 2026</span>

            <h3>Bachelor's Degree</h3>

            <h4>ITS Engineering College </h4>

            <p>
              Computer Science and Engineering (AI&ML)
            </p>

            <p className="education-description">
              Focused on programming, software development,
              databases, artificial intelligence and modern
              web technologies.
            </p>
          </div>
        </div>
        <div className="education-card">
          <div className="education-content">
            <span className="education-year">2020 - 2023</span>

            <h3>Diploma</h3>

            <h4>Government Polytechnic College Bijnor </h4>

            <p>
              Computer Science and Engineering
            </p>

            <p className="education-description">
              Completed a Diploma in Computer Science & Engineering with a strong foundation in programming, data structures, databases, web development, and software development. Gained practical experience through academic projects and hands-on coding.
            </p>
          </div>
        </div>
        <div className="education-card">
          <div className="education-content">
            <span className="education-year">2019 - 2020</span>

            <h3>High School</h3>

            <h4>Walia Global Academy </h4>

            {/* <p>
              Computer Science and Engineering (AI&ML)
            </p> */}

            {/* <p className="education-description">
              Focused on programming, software development,
              databases, artificial intelligence and modern
              web technologies.
            </p> */}
          </div>
        </div>

        <div className="resume-section">
          <h3>Want to know more about me?</h3>

          <p>
            Download my resume to learn more about my skills,
            projects and experience.
          </p>

          <a
            href="/Kunal_Cse_Aiml.pdf"
            className="resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume ↗
          </a>
        </div>

      </div>
    </section>
  );
}

export default Education;