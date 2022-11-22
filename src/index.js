import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { App } from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

const theme = {
  colors: {
    textMain: "#595959",
    textSecondary: "#ffffff",
    textTitle: "#000000",
    textSub: "#8e949c",
    textAccent: "#fb6d3a",
    textSubAccent: "#a8a8a8",
    bgMain: "#F5F7FA",
    bgSecondary: "#1E2939",
    accent: "#fb6d3a",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
