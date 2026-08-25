import About from "../../views/about/About.jsx";
import Resume from "../../views/resume/Resume.jsx";
import Contact from "../../views/contact/Contact.jsx";
import Welcome from "../../views/welcome/Welcome";
import Project from "../../views/projects/Project.jsx";
import MediaViewer from "../../views/media/MediaViewer.jsx";

import { projects } from "../../scripts/data/projectData.js";
import { media } from "../../scripts/data/mediaData.js";

import "./ViewWindow.css";

// CLEANUP: Removed the static "media" object since media configurations are now built dynamically below.
const views = {
    welcome: {
        title: "welcome",
        component: Welcome,
    },
    about: {
        title: "about",
        component: About,
    },
    resume: {
        title: "resume",
        component: Resume,
        fullContent: true
    },
    contact: {
        title: "contacts",
        component: Contact,
    },
};

function ViewWindow({ view, section, onCommand, onClose }) {
    let configuration = views[view];
    let Content;
    let contentProps = {};

    if (view.startsWith("project:")) {
        const projectId = view.slice("project:".length);
        const project = projects.find((item) => item.id === projectId);
        if (!project) { return null; }
        configuration = { title: project.name };
        Content = Project;
        contentProps = { project };

    } else if (view.startsWith("media:")) {
        const mediaId = view.slice("media:".length);
        const mediaItem = media.find((item) => item.id === mediaId);

        if (!mediaItem) { return null; }

        configuration = { title: mediaItem.name };
        Content = MediaViewer;
        contentProps = { mediaId };

    } else if (view === "about") {
        Content = About;
        contentProps = { section };
    } else {
        if (!configuration) { return null; }
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