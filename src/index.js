import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Resume from "./routes/resume";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="about" element={<App />} />
                <Route path="resume" element={<Resume />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>,
);

reportWebVitals();
