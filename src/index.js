import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Resume from "./routes/resume";
import MyTimeline from './routes/timeline';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="about" element={<App />} />
                <Route path="resume" element={<Resume />} />
                <Route path="timeline" element={<MyTimeline />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
