import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Niyadda from "./niyadda";
import Rondom from "./rondom";
import Nettt from "./nettt";
import MCH from "./mch";
import Decello from "./decello";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/niyadda" element={<Niyadda />} />
        <Route path="/rondom" element={<Rondom />} />
        <Route path="/nettt" element={<Nettt />} />
        <Route path="/mch" element={<MCH />} />
        <Route path="/decello" element={<Decello />} />
      </Routes>
    </Router>
    ,
  </React.StrictMode>
);

// ReactDOM.render(

//   document.getElementById('root')
// );
