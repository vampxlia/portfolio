import About from "../../views/about/About.jsx";
import Resume from "../../views/resume/Resume.jsx";
import Contact from "../../views/contact/Contact.jsx";
import Welcome from "../../views/welcome/Welcome";
import Project from "../../views/projects/Project.jsx";

import { projects } from "../../scripts/data/projectData.js";

import "./ViewWindow.css";


const views = {
    welcome: {
        title: "welcome.txt",
        component: Welcome,
    },

    about: {
        title: "about",
        component: About,
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

function ViewWindow({ view, section, onCommand, onClose }) {
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
    } else if (view === "projects") {
        Content = Projects;

        contentProps = {
            onCommand,
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