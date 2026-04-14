import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Globe,
  SquareArrowOutUpRight,
  Heart,
} from "lucide-react";
import "./Footer.css";

const socials = [
  { icon: SquareArrowOutUpRight, label: "Twitter", href: "#" },
  { icon: SquareArrowOutUpRight, label: "LinkedIn", href: "#" },
  { icon: Globe, label: "GitHub", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@johnley.com" },
];

function Footer({ onContactClick }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section">
        <motion.div
          id="contact"
          className="footer-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="footer-cta-content">
            <span className="section-label">Start a project</span>
            <h2 className="footer-cta-title">
              Let's create something
              <br />
              amazing together
            </h2>
            <p className="footer-cta-description">
              Have a project in mind? I'd love to hear about it. Let's chat and
              see how we can bring your vision to life.
            </p>
            <motion.button
              onClick={onContactClick}
              className="footer-cta-btn"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in touch
              <ArrowRight size={18} />
            </motion.button>
          </div>
          <div className="footer-cta-orb" />
        </motion.div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <a href="#" className="footer-logo">
              <span className="footer-logo-mark" />
              Johnley
            </a>
            <p className="footer-tagline">
              Designing the future, one pixel at a time.
            </p>
          </div>

          <div className="footer-socials">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="footer-social"
                aria-label={social.label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-credits">
          <p>
            © {year} Johnley. Made with{" "}
            <Heart size={12} className="footer-heart" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
