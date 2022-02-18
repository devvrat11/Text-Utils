import { useState } from "react";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import {Switch} from react

function App() {
  document.title = "Text Utils - Light Mode";
  let [mode, changeMode] = useState("light");
  let switchMode = () => {
    if (mode === "light") {
      changeMode("dark");
      document.body.style.backgroundColor = "#141a3d";
      document.body.style.color = "white";
      document.title = "Text Utils - Dark Mode";
    } else {
      changeMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "Text Utils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Tutils"
          about="About Us"
          mode={mode}
          switchMode={switchMode}
        />
        <div className="container my-5">
          <Routes>
            <Route exact path="/about" element={<AboutUs />}/>
            <Route exact path="/"
              element={<TextForm heading="Enter the text to be analyzed" />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

