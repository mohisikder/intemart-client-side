import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Navigation from "./components/Header/Navigation/Navigation";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
