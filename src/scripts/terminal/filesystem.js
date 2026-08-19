import { projects } from "../data/projectData.js";
import {aboutSections} from "../data/aboutData.js";

function createProjectNodes() {
    return Object.fromEntries(
        projects.map((project) => [
            project.id,
            {
                type: "view",
                name: project.id,

                // Filesystem command target
                target: project.id,

                // Application/window target
                openTarget: `project:${project.id}`,
            },
        ])
    );
}

function createAboutNodes() {
    return Object.fromEntries(
        aboutSections.map((section) => [
            section.id,
            {
                type: "view",
                name: section.name,
                target: section.id,
                openTarget: "about",
                section: section.id,
            },
        ])
    );
}

export const fileSystem = {
    type: "directory",
    name: "~",

    children: {
        welcome: {
            type: "view",
            name: "welcome",
            target: "welcome",
        },
        
        about: {
            type: "directory",
            name: "about",
            openTarget: "about",

            children: createAboutNodes(),
        },

        projects: {
            type: "directory",
            name: "projects",
            openTarget: "projects",

            children: createProjectNodes(),
        },

        resume: {
            type: "file",
            name: "resume",
            target: "resume",
        },

        contact: {
            type: "view",
            name: "contact.txt",
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