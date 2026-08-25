import "./Project.css";
import {media} from "../../scripts/data/mediaData.js";

function Project({ project }) {
    const projectMedia = media.filter(
        (item) =>
            project.media?.includes(item.id)
    );


    return (
        <article className="project-view">
            <span className="projects-path">
                ~/projects/{project.id}
            </span>

            <h1>{project.name}</h1>

            <p className="project-description">
                {project.description}
            </p>

            <div className="project-media">
                {projectMedia.map((item) => (
                    item.type === "video" ? (
                        <video src={item.src} key={item.id} controls />
                    ) : (
                        <img src={item.src} key={item.id} alt={item.alt} />
                    )
                ))}
            </div>

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
                    → Open the Repository
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