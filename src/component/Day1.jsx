import { useState } from "react";
import "./Day1.css";
import "./Navbar.css";
import Location from "./Location";
import { Link } from "react-router-dom";


export default function Day1() {
  const [open, setOpen] = useState(null);
  

  const events = [
    {
      id: 1,
      title: "Frameux",
      image: "/day1-1.jpeg",
      objective:
        "Precisely replicate a high-fidelity UI layout using Figma's core design tools.",
      description:
        "Participants get a Master Reference image and raw assets, then recreate the page from a blank Figma canvas."
    },
    {
      id: 2,
      title: "Frameux Plus",
      image: "/day1-2.jpeg",
      objective:
        "Advanced UI replication challenge focused on speed and accuracy.",
      description:
        "Designers recreate complex layouts under strict time constraints."
    },
     {
      id: 3,
      title: "Frameux Plus",
      image: "/day1-3.jpeg",
      objective:
        "Advanced UI replication challenge focused on speed and accuracy.",
      description:
        "Designers recreate complex layouts under strict time constraints."
    },
     {
      id: 4,
      title: "Frameux Plus",
      image: "/day1-4.jpeg",
      objective:
        "Advanced UI replication challenge focused on speed and accuracy.",
      description:
        "Designers recreate complex layouts under strict time constraints."
    }
  ];

  return (
    <div className="full">
      
     <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Quera'26</div>

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
          <li><Link to="/Day2">Day2</Link> </li>
          
       
          <li>
            <button className="nav-btn"><Link to="/Close">Register Now</Link></button>
          </li>
        </ul>
      </div>
    </nav>
    
    
    <br /><br /><br /><br />
    <div className="event-grid">
      {events.map(event => (
        <div className="event-card" key={event.id}>
          <img src={event.image} alt={event.title} />

          <div className="event-content">
            <h2>{event.title}</h2>

            <h4>Objective</h4>
            <p>{event.objective}</p>

            <h4>Description</h4>
            <p>{event.description}</p>

            {open === event.id && (
              <div className="extra-content">
                <h4>Rules</h4>
                <ul>
                  <li>PC / Figma only</li>
                  <li>No plugins or external software</li>
                  <li>No templates or copy-pasting</li>
                  <li>Manual frame construction only</li>
                  <li>No flat image imports</li>
                </ul>

                <p><strong>Duration:</strong> 30 minutes</p>
                <p><strong>Team Size:</strong> 1</p>

                <h4>Scoring</h4>
                <ul>
                  <li>Visual Fidelity – 40</li>
                  <li>Asset Usage – 40</li>
                  <li>Technical Accuracy – 10</li>
                  <li>Speed – 10</li>
                </ul>
              </div>
            )}

            <button
              className="show-more"
              onClick={() =>
                setOpen(open === event.id ? null : event.id)
              }
            >
              {open === event.id ? "Show Less ▲" : "Show More ▼"}
            </button>
          </div>
        </div>
      ))}
    </div>
    <Location/>
    </div>
  );
}
