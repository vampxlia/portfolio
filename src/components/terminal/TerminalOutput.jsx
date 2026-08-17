import {useEffect, useRef} from "react";

function TerminalOutput({ history }) {
    const outputRef = useRef(null);

    useEffect(() => {
        const element = outputRef.current;

        if (!element) {
            return;
        }

        element.scrollTop = element.scrollHeight;
    }, [history]);
    return (
        <div
            ref={outputRef}
            className="terminal-output"
        >
            {history.map((entry, index) => {
                if (entry.type === "command") {
                    return (
                        <div
                            className="terminal-entry terminal-command"
                            key={index}
                        >
                            <span className="terminal-prompt">
                                vampxlia@arch:{entry.directory}$
                            </span>

                            <span className="terminal-command-text">
                                {" "}
                                {entry.content}
                            </span>
                        </div>
                    );
                }

                return (
                    <div
                        className={`terminal-entry terminal-${entry.type}`}
                        key={index}
                    >
                        {entry.content}
                    </div>
                );
            })}
        </div>
    );
}

export default TerminalOutput;