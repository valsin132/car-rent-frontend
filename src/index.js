import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./context/AuthContext";
import BodyTypeContextProvider from "./context/BodyTypeContext";
import "./index.css";
import "./media.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BodyTypeContextProvider>
        <App />
      </BodyTypeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();
