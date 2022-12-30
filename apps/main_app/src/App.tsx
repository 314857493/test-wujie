import { useState } from "react";
import wujieLogo from "./assets/wujie.svg";
import repoLogo from "./assets/turborepo.svg";

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
        <a href="https://turbo.build/repo" target="_blank" rel="noreferrer">
          <img src={repoLogo} className="logo" alt="Turborepo logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a
          href="https://wujie-micro.github.io/doc/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={wujieLogo} className="logo wujie" alt="Wujie logo" />
        </a>
      </div>
      <h1>Turborepo + Vite + Wujie</h1>
      <WujieReact
        props={{ name: "subapp" }}
        beforeLoad={() => {
          console.log("beforeLoad");
        }}
        beforeMount={() => {
          console.log("beforeMount");
        }}
        name="subapp"
        url="http://localhost:5155"
        sync={true}
      />
      <WujieReact
        props={{ name: "subappvue" }}
        beforeLoad={() => {
          console.log("beforeLoad");
        }}
        beforeMount={() => {
          console.log("beforeMount");
        }}
        name="subappvue"
        url="http://localhost:5153"
        sync={true}
      />
    </div>
  );
}

export default App;
