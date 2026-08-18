import About from "../../views/about/About.jsx";
import Projects from "../../views/projects/Projects.jsx";
import Resume from "../../views/resume/Resume.jsx";
import Contact from "../../views/contact/Contact.jsx";

import { projects } from "../../scripts/data/projectData.js";

import "./ViewWindow.css";
import Project from "../../views/projects/Project.jsx";

const views = {
    about: {
        title: "about.txt",
        component: About,
    },

    projects: {
        title: "projects",
        component: Projects,
    },

    resume: {
        title: "resume.pdf",
        component: Resume,
        fullContent: true
    },

    contact: {
        title: "contacts.txt",
        component: Contact,
    },
};

function ViewWindow({ view, section, onClose }) {
    let configuration = views[view];
    let Content;
    let contentProps = {};

    if (view.startsWith("project:")) {
        const projectId = view.slice("project:".length);

        const project = projects.find(
            (item) => item.id === projectId
        );

        if (!project) {
            return null;
        }

        configuration = {
            title: project.name,
        };

        Content = Project;
        contentProps = { project };
    } else if (view === "about") {
        Content = About;

        contentProps = {
            section,
        };
    } else {
        if (!configuration) {
            return null;
        }

        Content = configuration.component;
    }

    return (
        <section className="view-window">
            <header className="view-window-header">
                <div className="view-window-title">
                    {configuration.title}
                </div>

                <button
                    className="view-window-close"
                    onClick={onClose}
                    aria-label="Close window"
                >
                    ×
                </button>
            </header>

            <div
                className={
                    configuration.fullContent
                        ? "view-window-body full-content"
                        : "view-window-body"
                }
            >
                <Content {...contentProps} />
            </div>
        </section>
    );
}

export default ViewWindow;