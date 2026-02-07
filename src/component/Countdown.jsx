import { useEffect, useState } from "react";
import "./contact.css";

const EVENT_DATE = new Date("2026-02-10T09:00:00+05:30");

export default function Countdown() {
  const [time, setTime] = useState(getTime());

  function getTime() {
    const diff = EVENT_DATE - new Date();
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor(diff / (1000 * 60 * 60)) % 24,
      minutes: Math.floor(diff / (1000 * 60)) % 60,
      seconds: Math.floor(diff / 1000) % 60,
    };
  }

  useEffect(() => {
    const t = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="countdown">
      {Object.entries(time).map(([key, value]) => (
        <div className="count-box" key={key}>
          <span className="count">{value}</span>
          <span className="label">{key.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
}
