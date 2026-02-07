import { useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Qevra'26</div>

        {/* Hamburger */}
        <div
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><a href="#events" onClick={() => setOpen(false)}>Events</a></li>
          
          <li><a href="#location" onClick={() => setOpen(false)}>Location</a></li>
          <li>
            <button className="nav-btn"><Link to="/Close">Register Now</Link></button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
