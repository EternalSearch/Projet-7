import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import AppRouter from "./components/AppRouter";
import "@fontsource/montserrat";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />

  </React.StrictMode>
);
