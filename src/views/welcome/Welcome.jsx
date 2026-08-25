import "./Welcome.css";

function Welcome() {
    return (
        <article className="welcome">
            <header className="welcome-header">
                <span className="welcome-path">
                    ~/welcome
                </span>

                <h1>Welcome.</h1>

                <p>
                    You've found my little corner of the internet.
                </p>
            </header>

            <section className="welcome-section">
                <h2>about this place</h2>

                <p>
                    This is my developer portfolio, presented
                    as a small Linux-inspired desktop.
                    Instead of navigating a traditional website,
                    you can explore it through the terminal or
                    the file explorer.
                </p>
            </section>

            <section className="welcome-section">
                <h2>getting around</h2>

                <p>
                    The terminal is always available at the
                    desktop. Type commands into it to
                    navigate the site.
                </p>

                <div className="welcome-commands">
                    <div>
                        <code>help</code>
                        <span>
                            Show available commands
                        </span>
                    </div>

                    <div>
                        <code>ls</code>
                        <span>
                            List the current directory
                        </span>
                    </div>

                    <div>
                        <code>cd about</code>
                        <span>
                            Navigate into a directory
                        </span>
                    </div>

                    <div>
                        <code>open welcome</code>
                        <span>
                            Open a file
                        </span>
                    </div>
                </div>
            </section>

            <section className="welcome-section">
                <h2>or...</h2>

                <p>
                    You can use the file explorer on the right
                    if you'd rather click your way around.
                    It performs the same actions as the
                    corresponding terminal commands.
                </p>
            </section>

            <footer className="welcome-footer">
                <span>
                    type <code>help</code> to get started
                </span>
            </footer>
        </article>
    );
}

export default Welcome;