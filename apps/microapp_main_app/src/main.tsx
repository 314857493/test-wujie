import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import microApp from "@micro-zoe/micro-app";

microApp.start({
  plugins: {
    modules: {
      "app1": [
        {
          loader(code) {
            if (process.env.NODE_ENV === "development") {
              // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(
                /(from|import)(\s*['"])(\/child\/vite\/)/g,
                (all) => {
                  return all.replace(
                    "/child/vite/",
                    "http://localhost:5157/child/vite/"
                  );
                }
              );
            }

            return code;
          },
        },
      ],
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
