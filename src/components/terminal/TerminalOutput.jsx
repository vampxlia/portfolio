import { useEffect, useRef } from "react";

function TerminalOutput({ history }) {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    return (
        <div className="terminal-output">
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
            <div ref={bottomRef} />
        </div>
    );
}

export default TerminalOutput;