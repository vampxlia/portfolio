import { useState } from "react";
import BootScreen from "../components/boot/BootScreen.jsx";
import Desktop from "../components/desktop/Desktop";

function App() {
  const [booted, setBooted] = useState(false);

  return (
      <div className="app">
        {!booted ? (
            <BootScreen onComplete={() => setBooted(true)} />
        ) : (
            <Desktop />
        )}
      </div>
  );
}

export default App;