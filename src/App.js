import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.body.style.backgroundColor = '#fff';
    }
    else {
      setDarkMode(true);
      document.body.style.backgroundColor = '#1a1a1aff';
    }
    console.log("current mode = " + darkMode);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About TextUtils" darkMode={darkMode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to analyze below" darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
