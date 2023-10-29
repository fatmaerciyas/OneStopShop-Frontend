import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/layout/App.tsx";
import "../src/app/layout/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
