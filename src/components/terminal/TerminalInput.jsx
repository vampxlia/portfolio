import { useEffect, useRef, useState } from "react";

function TerminalInput({
                           currentDirectory,
                           onCommand,
                       }) {
    const [input, setInput] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!input.trim()) {
            return;
        }

        onCommand(input);

        setInput("");
    };

    const handleTerminalClick = () => {
        inputRef.current?.focus();
    };

    return (
        <form
            className="terminal-input"
            onSubmit={handleSubmit}
            onClick={handleTerminalClick}
        >
            <span className="terminal-prompt">
                vampxlia@arch:{currentDirectory}$
            </span>

            <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                spellCheck="false"
                autoComplete="off"
                autoCapitalize="off"
                aria-label="Terminal input"
            />
        </form>
    );
}

export default TerminalInput;