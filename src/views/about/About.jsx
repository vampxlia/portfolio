import "./About.css";

function About() {
    return (
        <article className="about">
            <header className="about-header">
                <span className="about-prompt">
                    ~/about
                </span>

                <h1>Hi, I'm Emiliana!</h1>

                <p className="about-subtitle">
                    Software Engineer · Digital Artist · Full-Stack Developer
                </p>
            </header>

            <section className="about-section">
                <h2>about.txt</h2>

                <p>
                    I'm a recent Informatics and Multimedia Engineering
                    graduate and aspiring Software Engineer.
                </p>

                <p>
                    I enjoy working across the stack and moving between different
                    kinds of problems, from designing backend systems and web
                    applications to building mobile experiences and experimenting
                    with game development.
                </p>

                <p>
                    I'm currently looking for my first professional opportunity where I
                    can keep learning, contribute to real projects, and grow alongside
                    other developers.
                </p>
            </section>

            <section className="about-section">
                <h2>skills</h2>

                <h3>
                    languages
                </h3>

                <div className="about-skills">
                    <span>C#</span>
                    <span>C++</span>
                    <span>Java</span>
                    <span>JavaScript</span>
                    <span>Kotlin</span>
                    <span>PHP</span>
                    <span>Python</span>
                    <span>TypeScript</span>
                </div>

                <h3>
                    development
                </h3>

                <div className="about-skills">
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>Spring</span>
                    <span>Docker</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>React</span>
                </div>

                <h3>
                    data & tools
                </h3>

                <div className="about-skills">
                    <span>MySQL</span>
                    <span>SQLite</span>
                    <span>Git</span>
                    <span>Github</span>
                </div>

                <h3>
                    creative & experimental
                </h3>

                <div className="about-skills">
                    <span>Arduino</span>
                    <span>Blender</span>
                    <span>Unity</span>
                    <span>Adobe Illustrator</span>
                </div>
            </section>
        </article>
    );
}

export default About;