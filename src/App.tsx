import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { strings, assets } from "@data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href={strings.home.stackLink} target="_blank">
          <img src={assets.stack} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + {strings.home.stack}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {strings.home.countString(count)}
        </button>
        <p>
          {strings.home.edit} <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
