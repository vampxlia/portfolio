import {getDirectory,} from "../../scripts/terminal/filesystem";

function FileTree({
                      currentDirectory,
                      onCommand,
                  }) {
    const directory = getDirectory(
        currentDirectory
    );

    if (!directory) {
        return null;
    }

    const entries = Object.entries(
        directory.children ?? {}
    );

    return (
        <div className="file-tree">
            <button
                className="file-tree-location"
                onClick={() => onCommand("cd ~")}
            >
                ~/portfolio
            </button>

            {currentDirectory !== "~" && (
                <button
                    className="file-tree-item"
                    onClick={() => onCommand("cd ..")}
                >
                    <span className="file-tree-icon">
                        ↩
                    </span>

                    <span>..</span>
                </button>
            )}

            <div className="file-tree-children">
                {entries.map(([name, node]) => (
                    <button
                        className="file-tree-item"
                        key={name}
                        onClick={() => {
                            if (node.type === "directory") {
                                onCommand(`cd ${name}`);
                                return;
                            }

                            if (node.target) {
                                onCommand(
                                    `open ${node.target}`
                                );
                            }
                        }}
                    >
                        <span className="file-tree-icon">
                            {node.type === "directory"
                                ? "▸"
                                : "·"}
                        </span>

                        <span>{name}</span>

                        {node.type === "directory" && (
                            <span className="file-tree-suffix">
                                /
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default FileTree;