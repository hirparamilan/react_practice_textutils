import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.body.style.backgroundColor = '#fff';
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Utils - Light Mode";
      setInterval(()=> {
        document.title = "Text Utils is Amazing";
      }, 2000)
      setInterval(() => {
        document.title = "Install Text Utils now";
      }, 1500)
    }
    else {
      setDarkMode(true);
      document.body.style.backgroundColor = '#1a1a1aff';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Utils - Dark Mode";
    }
    console.log("current mode = " + darkMode);
  }
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null);
      }, 1500)
  }
  // document.title = "Text Utils2";

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About Us" darkMode={darkMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route index path="/react_practice_textutils" element={<TextForm heading="Enter the text to analyze below" darkMode={darkMode} showAlert={showAlert}/>} />
            <Route path="/react_practice_textutils/about" element={<About darkMode={darkMode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
