import { Copy } from "lucide-react";
import "./Footer.css";

const email = "johnley270@gmail.com";

function Footer() {
  const copyEmail = () => {
    navigator.clipboard?.writeText(email);
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
            <a href="#" target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Behance
            </a>
          </div>

          <button className="footer-email" type="button" onClick={copyEmail}>
            <span>{email}</span>
            <Copy size={26} strokeWidth={1.8} />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
