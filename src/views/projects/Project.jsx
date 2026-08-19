import "./Project.css";

function Project({ project }) {
    return (
        <article className="project-view">
            <span className="projects-path">
                ~/projects/{project.id}
            </span>

            <h1>{project.name}</h1>

            <p className="project-description">
                {project.description}
            </p>

            <section>
                <h2>technologies</h2>

                <div className="project-technologies">
                    {project.technologies.map(
                        (technology) => (
                            <span key={technology}>
                                {technology}
                            </span>
                        )
                    )}
                </div>
            </section>

            {project.github && (
                <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                >
                    → github
                </a>
            )}

            {project.live && (
                <a
                    className="project-link"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                >
                    → live site
                </a>
            )}
        </article>
    );
}

export default Project;