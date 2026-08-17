import { projects } from "./projectData";

import "./Projects.css";

function Projects() {
    return (
        <article className="projects">
            <header className="projects-header">
                <span className="projects-path">
                    ~/projects
                </span>

                <h1>Projects</h1>

                <p>
                    Things I've built, experimented with,
                    or contributed to.
                </p>
            </header>

            <div className="project-list">
                {projects.map((project) => (
                    <article
                        className="project"
                        key={project.id}
                    >
                        <div className="project-header">
                            <h2>
                                {project.name}
                            </h2>

                            {project.featured && (
                                <span className="project-featured">
                                    featured
                                </span>
                            )}
                        </div>

                        <p className="project-description">
                            {project.description}
                        </p>

                        <div className="project-technologies">
                            {project.technologies.map(
                                (technology) => (
                                    <span
                                        key={technology}
                                    >
                                        {technology}
                                    </span>
                                )
                            )}
                        </div>

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
                    </article>
                ))}
            </div>
        </article>
    );
}

export default Projects;