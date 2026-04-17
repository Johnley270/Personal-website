import { useState } from "react";
import "./Hero.css";

function Hero() {
  const [cursor, setCursor] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setCursor({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setCursor((prev) => ({ ...prev, active: false }));
  };

  return (
    <section
      className="hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--hero-cursor-x": `${cursor.x}%`,
        "--hero-cursor-y": `${cursor.y}%`,
        "--hero-hover-active": cursor.active ? 1 : 0,
      }}
    >
      <div className="hero-content section">
        <h1 className="hero-title">
          <span>I work on </span>
          <span className="hero-emphasis">ambiguous, high-complexity problems</span>
          <span>, designing solutions teams can confidently build and scale.</span>
        </h1>

        <p className="hero-description">
          4+ years of experience building Enterprise SaaS · Agentic AI · Workflow
          & Data-Heavy Tools and Systems
        </p>
      </div>
    </section>
  );
}

export default Hero;
