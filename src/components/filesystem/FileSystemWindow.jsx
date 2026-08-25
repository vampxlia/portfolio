import FileTree from "./FileTree";

import "./FileSystem.css";

function FileSystemWindow({currentDirectory, onCommand,}) {
    return (
        <section className="filesystem-window">
            <header className="filesystem-header">
                <div className="filesystem-title">
                    <span>files</span>
                    <span> {currentDirectory}</span>
                </div>
            </header>

            <FileTree
                currentDirectory={currentDirectory}
                onCommand={onCommand}
            />
        </section>
    );
}

export default FileSystemWindow;