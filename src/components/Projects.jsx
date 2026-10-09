function Projects() {
  const projects = [
    {
      title: "Smart Task Management System",
      description:
        "A full-stack task management application with user authentication, role-based access control, project management, task assignment and task status tracking.",
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "JWT",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Product Management System",
      description:
        "A full-stack Product Management System built with React.js and FastAPI, featuring product CRUD operations, sorting, and database integration. The project demonstrates REST API development and seamless frontend-backend communication.",
      technologies: [
        "Python",
        "REST API",
        "SQL",
        "React.js",
        "JWT"
      ],
      github: "https://github.com/kunalkumar00/Product-Management-System",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <div className="section-title">
          <p>MY WORK</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-number">
                0{index + 1}
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology, techIndex) => (
                  <span key={techIndex}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github}>
                  GitHub ↗
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;