import TerminalOutput from "./TerminalOutput";
import TerminalInput from "./TerminalInput";

import "./Terminal.css";

function TerminalWindow({ terminal }) {
    const {
        history,
        currentDirectory,
        executeCommand,
    } = terminal;

    return (
        <section className="terminal-window">
            <header className="terminal-header">
                <div className="terminal-title">
                    terminal
                </div>

                <div className="terminal-status">
                    tty1
                </div>
            </header>

            <div className="terminal-body">
                <TerminalOutput history={history} />

                <TerminalInput
                    currentDirectory={currentDirectory}
                    onCommand={executeCommand}
                />
            </div>
        </section>
    );
}

export default TerminalWindow;