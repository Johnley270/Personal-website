import { motion } from "framer-motion";
import avatarJohnley from "../assets/samples/avatar-johnley.svg";
import "./About.css";

const tools = [
  "Figma",
  "Framer",
  "Sketch",
  "Adobe XD",
  "Principle",
  "After Effects",
  "Webflow",
  "Notion",
];

function About() {
  return (
    <section id="about" className="about">
      <div className="section">
        <div className="about-grid">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-visual-card">
              <div className="about-avatar">
                <img src={avatarJohnley} alt="Johnley profile" loading="lazy" />
              </div>
              <div className="about-visual-pattern" />
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">About</span>
            <h2 className="section-title">
              Driven by curiosity, guided by empathy
            </h2>
            <p className="about-description">
              I'm a product designer who believes great design is invisible.
              With over 5 years of experience working with startups and
              scale-ups, I specialize in transforming complex problems into
              simple, elegant solutions.
            </p>
            <p className="about-description">
              My approach blends user research, visual design, and strategic
              thinking. I care deeply about the details — from micro-animations
              to information architecture — because they're what make digital
              products feel truly alive.
            </p>

            <div className="about-tools">
              <h4 className="about-tools-label">Tools I use daily</h4>
              <div className="tools-grid">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool}
                    className="tool-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
