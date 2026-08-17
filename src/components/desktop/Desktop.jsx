import useTerminal from "../../scripts/hooks/useTerminal";

import FileSystemWindow from "../filesystem/FileSystemWindow";
import TerminalWindow from "../terminal/TerminalWindow";
import ViewWindow from "../windows/ViewWindow";

import "./Desktop.css";

function Desktop() {
    const terminal = useTerminal();

    return (
        <main className="desktop">
            <div className="desktop-overlay" />

            <FileSystemWindow
             currentDirectory={terminal.currentDirectory}
             onCommand={terminal.executeCommand}
            />


            <TerminalWindow
                terminal={terminal}
            />

            {terminal.openWindow && (
                <ViewWindow
                    view={terminal.openWindow}
                    onClose={() => terminal.closeWindow()}
                />
            )}
        </main>
    );
}

export default Desktop;