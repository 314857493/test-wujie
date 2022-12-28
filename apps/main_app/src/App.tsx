import { useState } from "react";
import reactLogo from "./assets/react.svg";
import WujieReact from "wujie-react";
const { bus } = WujieReact;
bus.$on("loglog", (...arg: any[]) => {
  console.log(...arg);
});
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <WujieReact
        props={{ name: "subapp" }}
        beforeLoad={() => {
          console.log("beforeLoad");
        }}
        beforeMount={() => {
          console.log("beforeMount");
        }}
        name="wujie"
        url="http://localhost:5155"
        sync={true}
      />
    </div>
  );
}

export default App;
