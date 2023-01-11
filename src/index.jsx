import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./app/styles/main.scss";
import { TimerContextProvider } from "./setup/context/timerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TimerContextProvider>
    <App />
    </TimerContextProvider>
  </React.StrictMode>
);
