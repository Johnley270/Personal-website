import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink, X } from "lucide-react";
import resumePdf from "../assets/Johnley Agentic AI Experienc Designer.pdf";
import "./ResumeModal.css";

function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="resume-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24 }}
          onClick={onClose}
        >
          <motion.div
            className="resume-modal"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
          >
            <div className="resume-modal-header">
              <h2>Resume</h2>
              <div className="resume-modal-actions">
                <a
                  href={resumePdf}
                  className="resume-modal-action"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={14} />
                  Open
                </a>
                <a href={resumePdf} className="resume-modal-action" download>
                  <Download size={14} />
                  Download
                </a>
                <button
                  type="button"
                  className="resume-modal-close"
                  onClick={onClose}
                  aria-label="Close resume"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="resume-modal-frame-wrap">
              <iframe
                title="Johnley resume"
                src={resumePdf}
                className="resume-modal-frame"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResumeModal;
