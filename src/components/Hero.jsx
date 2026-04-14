import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
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
