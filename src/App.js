import Home from "./pages/Home";
import Ipsum from "./pages/Ipsum";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ipsum">Ipsum</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ipsum" element={<Ipsum />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
