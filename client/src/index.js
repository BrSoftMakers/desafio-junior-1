import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

import App from "./App";

import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
