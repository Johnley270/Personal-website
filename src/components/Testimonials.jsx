import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "Johnley transformed our product from a confusing dashboard into something our users genuinely enjoy using. The attention to detail is incredible.",
    name: "Sarah Chen",
    role: "CPO at Nebula",
    avatar: "S",
  },
  {
    quote:
      "Working with Johnley was a game-changer.  The design system he built saved our team hundreds of hours and brought consistency across our products.",
    name: "Alex Rivera",
    role: "Engineering Lead, FlowKit",
    avatar: "A",
  },
  {
    quote:
      "Not just a designer, but a true product thinker. Johnley asks the right questions and delivers designs that move the needle on our KPIs.",
    name: "Maya Patel",
    role: "Founder at Pulse Health",
    avatar: "M",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="testimonials">
      <div className="section">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">Kind words from clients</h2>
        </motion.div>

        <div className="testimonial-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Quote size={32} className="testimonial-quote-icon" />
              <p className="testimonial-text">{current.quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{current.avatar}</div>
                <div>
                  <div className="testimonial-name">{current.name}</div>
                  <div className="testimonial-role">{current.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-controls">
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonial-dot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="testimonial-arrows">
              <button
                className="testimonial-arrow"
                onClick={prev}
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="testimonial-arrow"
                onClick={next}
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
