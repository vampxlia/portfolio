import "./Resume.css";

function Resume() {
    return (
        <div className="resume">
            <iframe
                className="resume-pdf"
                src="/resume.pdf"
                title="Resume"
            />
        </div>
    );
}

export default Resume;