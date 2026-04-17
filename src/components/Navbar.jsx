import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onContactClick, onResumeClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ENABLE_PROGRESS_RIBBON = true;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { label: "Home", href: "#", active: true },
    { label: "Work", href: "#work" },
  ];

  return (
    <Motion.nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
          PORTFOLIO
        </Link>

        <div className="navbar-menu">
          <ul className="navbar-links">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={link.active ? "navbar-link-active" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <button
              type="button"
              onClick={onResumeClick}
              className="navbar-action navbar-action-secondary"
            >
              Resume
            </button>
            <button
              onClick={onContactClick}
              className="navbar-action navbar-action-primary"
            >
              Contact
            </button>
          </div>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {ENABLE_PROGRESS_RIBBON && (
        <div
          className="navbar-ribbon"
          aria-label="Skills: Interaction Design, System Thinking, Creative Problem Solving, User Research, Prototyping, Design Strategy"
        >
          <div className="navbar-ribbon-track">
            {Array.from({ length: 2 }).map((_, index) => (
              <div className="navbar-ribbon-group" key={index} aria-hidden={index > 0}>
                <span>Interaction Design</span>
                <span>System Thinking</span>
                <span>Creative Problem Solving</span>
                <span>User Research</span>
                <span>Prototyping</span>
                <span>Design Strategy</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((link, i) => (
              <Motion.a
                key={link.label}
                href={link.href}
                className="mobile-link"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Motion.a>
            ))}
            <button
              type="button"
              className="mobile-action mobile-action-secondary"
              onClick={() => {
                setMenuOpen(false);
                onResumeClick();
              }}
            >
              Resume
            </button>
            <button
              className="mobile-action mobile-action-primary"
              onClick={() => {
                setMenuOpen(false);
                onContactClick();
              }}
            >
              Contact
            </button>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
}

export default Navbar;
