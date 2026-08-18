import {
    useEffect,
    useRef,
} from "react";

import "./About.css";

function About({ section }) {
    const sectionRefs = useRef({});

    useEffect(() => {
        if (!section) {
            return;
        }

        const element =
            sectionRefs.current[section];

        if (!element) {
            return;
        }

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, [section]);

    const registerSection = (name) => (element) => {
        sectionRefs.current[name] = element;
    };

    return (
        <article className="about">
            <section
                ref={registerSection("profile")}
                id="about-profile"
            >
                <h2>~/profile</h2>

                <h1>Hi, I'm Emiliana!</h1>

                    <p className="about-subtitle">
                    Software Engineer · Digital Artist · Full-Stack Developer
                    </p>

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

            <section
                ref={registerSection("toolbox")}
                id="about-toolbox"
            >
                <h2>~/toolbox</h2>

                <h3>
                    languages
                </h3>

                <div className="about-toolbox">
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

                <div className="about-toolbox">
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

                <div className="about-toolbox">
                    <span>MySQL</span>
                    <span>SQLite</span>
                    <span>Git</span>
                    <span>Github</span>
                </div>

                <h3>
                    creative & experimental
                </h3>

                <div className="about-toolbox">
                    <span>Arduino</span>
                    <span>Blender</span>
                    <span>Unity</span>
                    <span>Adobe Illustrator</span>
                </div>
            </section>

            <section
                ref={registerSection("focus")}
                id="about-focus"
            >
                <h2>~/focus</h2>

                <h3>
                    Full-Stack development
                </h3>

                <p>
                    Building applications from database to interface, with a particular
                    interest in backend architecture, APIs and the systems that make
                    applications work.
                </p>

                <h3>
                    Creative Development
                </h3>

                <p>
                    Web, mobile and game development are all interesting to me for different
                    reasons, especially when technology becomes a medium for creativity.
                </p>

                <h3>
                    Hardware and Low Level computing
                </h3>

                <p>
                    Arduino is something I enjoy tinkering with on my free time. I like the idea of
                    software escaping the screen and interacting with the physical world.
                </p>

                <h3>
                    Digital Art
                </h3>

                <p>
                    Drawing and 3D modelling are my creative outlets. I enjoy experimenting with
                    digital art and exploring the intersection between visual creativity and
                    technology.
                </p>
            </section>

            <section
                ref={registerSection("learning")}
                id="about-learning"
            >
                <h2>~/learning</h2>

                <p>
                    I like learning by building rather than just reading.
                </p>
                <p>
                    This profile doubles as a record of that process, the things I build,
                    the technologies I experiment with, and the problems I learn to solve.
                </p>

                <h3>
                    now exploring
                </h3>

                <div className="about-toolbox">
                    <span>Full-Stack Development</span>
                    <span>Backend Architecture</span>
                    <span>Mobile Development</span>
                    <span>Game Development</span>
                    <span>Physical Computing</span>
                    <span>Assembly</span>
                    <span>Digital Art & 3D Modeling</span>
                </div>
            </section>

            <section
                ref={registerSection("philosophy")}
                id="about-philosophy"
            >
                <h2>~/philosophy</h2>

                {/* existing philosophy content */}
            </section>
        </article>
    );
}

export default About;