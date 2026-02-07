import Countdown from "./Countdown";
import "./Hero.css";
import Header from "./Header";
import "./contact.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <Header/>
     

        <p className="present">proudly presents</p>

        <h1 className="title">Qevra Fest’26</h1>

        <p className="subtitle">
          State Level Tech Festival
        </p>

        <Countdown />

        <p className="date">
          📅 Febuary 10, 2026 | ⏰ 9:00 AM IST
        </p>

        <div className="cta">
          <button className="btn primary">Register Now</button>
        
        </div>
      </div>
    </section>
  );
}
