import Home from "./pages/Home";
import Ipsum from "./pages/Ipsum";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ipsum" element={<Ipsum />} />
      </Routes>
    </Router>
  );
}

export default App;
