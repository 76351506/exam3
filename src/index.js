import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Events from "@/utils/events";

window.events = new Events();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
