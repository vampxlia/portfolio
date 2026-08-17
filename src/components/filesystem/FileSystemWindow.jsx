import FileTree from "./FileTree";

import "./FileSystem.css";

function FileSystemWindow({currentDirectory, onCommand,}) {
    return (
        <section className="filesystem-window">
            <header className="filesystem-header">
                <span>file system</span>
                <span>{currentDirectory}</span>
            </header>

            <FileTree
                currentDirectory={currentDirectory}
                onCommand={onCommand}
            />
        </section>
    );
}

export default FileSystemWindow;