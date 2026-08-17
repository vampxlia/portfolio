export const fileSystem = {
    type: "directory",

    name: "~",

    children: {
        about: {
            type: "view",
            name: "about",
            target: "about",
        },

        projects: {
            type: "directory",
            name: "projects",

            // The page to open when this directory is used
            // as a portfolio application.
            openTarget: "projects",

            children: {
                "example-project": {
                    type: "view",
                    name: "example-project",
                    target: "example-project",
                },

                // Add your other projects here...
            },
        },

        "resume.pdf": {
            type: "file",
            name: "resume.pdf",
            target: "resume",
        },

        contact: {
            type: "view",
            name: "contact",
            target: "contact",
        },
    },
};

export function getNode(path) {
    if (path === "~" || path === "") {
        return fileSystem;
    }

    const parts = path
        .replace(/^~\/?/, "")
        .split("/")
        .filter(Boolean);

    let current = fileSystem;

    for (const part of parts) {
        if (
            current.type !== "directory" ||
            !current.children?.[part]
        ) {
            return null;
        }

        current = current.children[part];
    }

    return current;
}

export function getDirectory(path) {
    const node = getNode(path);

    if (!node || node.type !== "directory") {
        return null;
    }

    return node;
}

export function resolvePath(currentPath, target) {
    if (!target || target === ".") {
        return currentPath;
    }

    if (target === "~") {
        return "~";
    }

    let parts;

    if (target.startsWith("~/")) {
        parts = target
            .slice(2)
            .split("/");
    } else {
        const base = currentPath === "~"
            ? []
            : currentPath
                .slice(2)
                .split("/");

        parts = [
            ...base,
            ...target.split("/"),
        ];
    }

    const resolved = [];

    for (const part of parts) {
        if (!part || part === ".") {
            continue;
        }

        if (part === "..") {
            resolved.pop();
        } else {
            resolved.push(part);
        }
    }

    return resolved.length
        ? `~/${resolved.join("/")}`
        : "~";
}