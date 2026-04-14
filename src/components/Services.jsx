import { motion } from "framer-motion";
import {
  Palette,
  Layers,
  Target,
  Lightbulb,
  PenTool,
  Smartphone,
} from "lucide-react";
import "./Services.css";

const services = [
  {
    icon: Palette,
    title: "UI Design",
    description:
      "Pixel-perfect interfaces with meticulous attention to detail, typography, and visual hierarchy.",
  },
  {
    icon: Target,
    title: "UX Research",
    description:
      "Data-driven insights through user interviews, usability testing, and behavioral analytics.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    description:
      "Scalable component libraries and design tokens that keep teams aligned and shipping fast.",
  },
  {
    icon: PenTool,
    title: "Prototyping",
    description:
      "Interactive prototypes that communicate ideas clearly and validate concepts early.",
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description:
      "Native mobile experiences with platform-specific patterns and gesture-driven interactions.",
  },
  {
    icon: Lightbulb,
    title: "Product Strategy",
    description:
      "Aligning design decisions with business goals through workshops and strategic frameworks.",
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="section">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">What I Do</span>
          <h2 className="section-title">Services & Expertise</h2>
          <p className="section-description">
            End-to-end design capabilities to bring your product vision to life.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="service-icon">
                <service.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
