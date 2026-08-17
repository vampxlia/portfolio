import About from "../../views/about/About.jsx";
import Projects from "../../views/projects/Projects.jsx";
import Resume from "../../views/resume/Resume.jsx";
import Contact from "../../views/contact/Contact.jsx";

import "./ViewWindow.css";

const views = {
    about: {
        title: "about",
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
        title: "contact",
        component: Contact,
    },
};

function ViewWindow({ view, onClose }) {
    const configuration = views[view];

    if (!configuration) {
        return null;
    }

    const Content = configuration.component;

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
                <Content />
            </div>
        </section>
    );
}

export default ViewWindow;