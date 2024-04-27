import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import InitilizeApp from "./pages/InitilizeApp.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <InitilizeApp />
    </BrowserRouter>
  </React.StrictMode>
);
