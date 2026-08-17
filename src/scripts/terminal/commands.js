import {getDirectory, getNode, resolvePath,} from "./filesystem";

export const commands = {
    help: () => ({
        type: "output",
        content: [
            "Available commands:",
            "",
            "  help               Show this message",
            "  ls                 List directory contents",
            "  cd <directory>     Change directory",
            "  open <file>        Open a file",
            "  clear              Clear the terminal",
            "  whoami             Display current user",
            "",
            "Navigation shortcuts:",
            "  about              Open About Me",
            "  projects           Open Projects",
            "  resume             Open Resume",
            "  contact            Open Contact",
        ].join("\n"),
    }),

    whoami: () => ({
        type: "output",
        content:
            "emiliana                                                   \n" +
            "software engineer + digital artist                         \n" +
            "\n" +
            "> building software as a form of art and creative medium                \n" +
            "> learning by making                                       \n" +
            "> currently looking for a place to build cool things"
    }),

    about: () => ({
        type: "view",
        target: "about",
    }),

    projects: () => ({
        type: "view",
        target: "projects",
    }),

    resume: () => ({
        type: "view",
        target: "resume",
    }),

    contact: () => ({
        type: "view",
        target: "contact",
    }),

    clear: () => ({
        type: "clear",
    }),

    cd: (args, context) => {
        const target = args[0] ?? "~";

        const path = resolvePath(
            context.currentDirectory,
            target
        );

        const directory = getDirectory(path);

        if (!directory) {
            return {
                type: "output",
                content: `cd: ${target}: no such directory`,
            };
        }

        return {
            type: "directory",
            path,
        };
    },

    ls: (_args, context) => {
        const directory = getDirectory(
            context.currentDirectory
        );

        if (!directory) {
            return {
                type: "output",
                content: "ls: current directory does not exist",
            };
        }

        const entries = Object.values(directory.children ?? {});

        if (entries.length === 0) {
            return {
                type: "output",
                content: "",
            };
        }

        return {
            type: "output",
            content: entries
                .map((entry) => {
                    if (entry.type === "directory") {
                        return `${entry.name}/`;
                    }

                    return entry.name;
                })
                .join("\n"),
        };
    },

    open: (args, context) => {
        const target = args[0];

        if (!target) {
            return {
                type: "output",
                content: "usage: open <file>",
            };
        }

        const path = resolvePath(
            context.currentDirectory,
            target
        );

        const node = getNode(path);

        if (!node) {
            return {
                type: "output",
                content: `open: ${target}: no such file or directory`,
            };
        }

        if (node.openTarget) {
            return {
                type: "view",
                target: node.openTarget,
            };
        }

        if (node.target) {
            return {
                type: "view",
                target: node.target,
            };
        }

        return {
            type: "output",
            content: `open: ${target}: cannot open`,
        };
    },
};