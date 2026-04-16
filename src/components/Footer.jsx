import { useState } from "react";
import { Copy, Check } from "lucide-react";
import "./Footer.css";

const email = "johnley.batchu@gmail.com";

function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-heading">
          <p className="footer-kicker">Available for thoughtful product work</p>
          <h2 className="footer-title">I would love to talk.</h2>
        </div>

        <div className="footer-rule" />

        <div className="footer-row">
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/johnley-batchu-805b96184/" target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
            <a href="https://www.behance.net/john_ley" target="_blank" rel="noopener noreferrer">
              Behance
            </a>
          </div>

          <button className="footer-email" type="button" onClick={copyEmail} title="Click to copy email">
            <span>{email}</span>
            {copied ? (
              <Check size={26} strokeWidth={1.8} className="footer-email-icon" />
            ) : (
              <Copy size={26} strokeWidth={1.8} className="footer-email-icon" />
            )}
            {copied && <span className="footer-email-tooltip">Copied!</span>}
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
