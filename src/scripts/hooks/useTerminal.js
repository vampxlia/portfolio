import { useState } from "react";

import { parseCommand } from "../terminal/parser";
import { commands } from "../terminal/commands";

const INITIAL_HISTORY = [
    {
        type: "system",
        content: "Welcome to vampxlia@arch.",
    },
    {
        type: "system",
        content: "Type 'help' to get started.",
    },
];

function useTerminal() {
    const [history, setHistory] = useState(INITIAL_HISTORY);
    const [currentDirectory, setCurrentDirectory] = useState("~");
    const [openWindow, setOpenWindow] = useState({
        target: "welcome",
        section: null,
    });

    const closeWindow = () => {
        setOpenWindow(null);
    };

    const executeCommand = (input) => {
        const parsed = parseCommand(input);

        if (!parsed) {
            return;
        }

        const { command } = parsed;

        const newEntries = [
            {
                type: "command",
                content: input.trim(),
                directory: currentDirectory,
            },
        ];

        const commandHandler = commands[command];

        if (!commandHandler) {
            newEntries.push({
                type: "output",
                content: `command not found: ${command}`,
            });
        } else {
            const result = commandHandler(parsed.args, {
                currentDirectory,
            });

            if (result.type === "output") {
                newEntries.push({
                    type: "output",
                    content: result.content,
                });
            }

            if (result.type === "view") {
                setOpenWindow({
                    target: result.target,
                    section: result.section ?? null,
                });
            }

            if (result.type === "directory") {
                setCurrentDirectory(result.path);
            }

            if (result.type === "clear") {
                setHistory([]);
                return;
            }
        }

        setHistory((previous) => [
            ...previous,
            ...newEntries,
        ]);
    };

    return {
        history,
        currentDirectory,
        openWindow,
        executeCommand,
        closeWindow,
    };
}

export default useTerminal;