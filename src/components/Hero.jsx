import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import DotCanvas from "./DotCanvas";
import "./Hero.css";

function Hero({ onContactClick }) {
  return (
    <section className="hero">
      <div className="hero-bg">
        <DotCanvas />
      </div>

      <div className="hero-content section">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Sparkles size={14} />
          Available for new projects
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          I design digital
          <br />
          products that <span className="hero-gradient-text">people love</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          Product designer specializing in SaaS interfaces, design systems, and
          user experiences that drive growth and delight users.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="#work" className="hero-btn hero-btn-primary">
            View my work
            <ArrowRight size={16} />
          </a>
          <button onClick={onContactClick} className="hero-btn hero-btn-ghost">
            Get in touch
          </button>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="hero-stat">
            <span className="hero-stat-number">50+</span>
            <span className="hero-stat-label">Projects delivered</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">5 yrs</span>
            <span className="hero-stat-label">Design experience</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">30+</span>
            <span className="hero-stat-label">Happy clients</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
