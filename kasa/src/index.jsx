import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import AppRouter from "./components/AppRouter";
// import Header from "./components/Header";
// import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
    {/* <BrowserRouter/> */}
  </React.StrictMode>
);
