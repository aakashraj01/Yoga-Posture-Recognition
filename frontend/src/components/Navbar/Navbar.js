import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="home-container" style={{ height: "auto" }}>
      <div className="home-header">
        <Link to={"/"} style={{ cursor: "pointer", textDecoration: "none" }}>
          <h1 className="home-heading">Yoga Studio</h1>
        </Link>
        <Link to="/about">
          <button
            className=""
            style={{
              background: "violet",
              border: "none",
              color: "black",
              //   fontWeight: "100",
              paddingRight: "1rem",
              paddingLeft: "1rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              border: "none",
              borderRadius: "9px",
              marginRight: "2rem",
            }}
          >
            About
          </button>
        </Link>
      </div>
    </div>
  );
}
