function Skills() {
  const skills = [
    {
      category: "Programming",
      technologies: ["Python", "JavaScript", "SQL"],
    },
    {
      category: "Backend",
      technologies: ["FastAPI", "REST API", "JWT Authentication"],
    },
    {
      category: "Database",
      technologies: ["PostgreSQL", "MySQL", "SQLAlchemy"],
    },
    {
      category: "Python Library",
      technologies: ["NumPy", "Pandas"],
    },
    {
      category: "Frontend",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      category: "Tools",
      technologies: ["Git", "GitHub", "VS Code", "Pycharm", "MySQL Workbench", "pgAdmin"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <div className="section-title">
          <p>WHAT I WORK WITH</p>
          <h2>Skills & Technologies</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.category}</h3>

              <div className="technology-list">
                {skill.technologies.map((technology, techIndex) => (
                  <span key={techIndex}>{technology}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;