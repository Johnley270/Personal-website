import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, MessageCircle } from "lucide-react";
import "./ContactModal.css";

function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const purposeLabelMap = {
      "work-opportunity": "Work Opportunity",
      "career-guidance": "Career Guidance",
      networking: "Networking",
      "just-saying-hi": "Just Saying Hi",
    };

    const selectedPurpose = purposeLabelMap[formData.purpose] || formData.purpose;
    const message = formData.message.trim() || "No message provided.";
    const whatsappMessage = [
      "Hi Johnley!",
      "",
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      `*Purpose:* ${selectedPurpose}`,
      "",
      `*Message:*`,
      message,
    ].join("%0A");

    const whatsappUrl = `https://wa.me/917032479054?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError("");

    const purposeLabelMap = {
      "work-opportunity": "Work Opportunity",
      "career-guidance": "Career Guidance",
      networking: "Networking",
      "just-saying-hi": "Just Saying Hi",
    };

    const selectedPurpose = purposeLabelMap[formData.purpose] || formData.purpose;
    const message = formData.message.trim() || "No message provided.";
    const payload = {
      name: formData.name,
      email: formData.email,
      purpose: selectedPurpose,
      message,
      _subject: `Portfolio Reachout: ${selectedPurpose}`,
      _captcha: "false",
      _template: "table",
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/johnley.batchu@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      setSubmitted(true);
      setLoading(false);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", purpose: "", message: "" });
        onClose();
      }, 2000);
    } catch {
      setLoading(false);
      setSubmitError("Unable to send right now. Please try again in a moment.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {loading && <div className="modal-progress-bar" />}
            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="modal-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle size={48} className="modal-success-icon" />
                  <h3>Message sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="modal-header">
                    <h2>Let's Talk</h2>
                    <p>
                      Tell me about your project and let's create something
                      great.
                    </p>
                  </div>

                  <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="purpose">Reachout purpose</label>
                      <select
                        id="purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select a reachout purpose
                        </option>
                        <option value="work-opportunity">Work Opportunity</option>
                        <option value="career-guidance">Career Guidance</option>
                        <option value="networking">Networking</option>
                        <option value="just-saying-hi">Just Saying Hi</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="modal-button-group">
                      <motion.button
                        type="submit"
                        className="modal-submit"
                        disabled={loading}
                        whileHover={loading ? {} : { scale: 1.01, y: -1 }}
                        whileTap={loading ? {} : { scale: 0.98 }}
                        style={{ opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer" }}
                      >
                        {loading ? "Sending..." : "Send message"}
                        <Send size={16} />
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={handleWhatsApp}
                        className="modal-submit-secondary"
                        whileHover={{ scale: 1.01, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        WhatsApp
                        <MessageCircle size={16} />
                      </motion.button>
                    </div>

                    {submitError ? <p className="modal-error">{submitError}</p> : null}
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactModal;
