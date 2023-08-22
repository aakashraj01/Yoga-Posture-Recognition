import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Yoga from "./pages/Yoga/Yoga";
import About from "./pages/About/About";
import Tutorials from "./pages/Tutorials/Tutorials";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/start"
            element={
              <>
                <Navbar />
                <Yoga />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
              </>
            }
          />
          <Route
            path="/tutorials"
            element={
              <>
                <Navbar />
                <Tutorials />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
