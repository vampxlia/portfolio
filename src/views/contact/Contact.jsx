import "./Contact.css";

function Contact() {
    return (
        <article className="contact">
            <header>
                <span className="contact-path">
                    ~/contact
                </span>

                <h1>Contact Me</h1>
            </header>

            <p>
                Interested in working together or just want
                to say hello?
            </p>

            <div className="contact-links">
                <a href="mailto:emilianaprates2005@gmail.com">
                    email
                </a>

                <a
                    href="https://github.com/vampxlia"
                    target="_blank"
                    rel="noreferrer"
                >
                    github
                </a>

                <a
                    href="https://linkedin.com/in/emiliana-prates"
                    target="_blank"
                    rel="noreferrer"
                >
                    linkedin
                </a>
            </div>
        </article>
    );
}

export default Contact;