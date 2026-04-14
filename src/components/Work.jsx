import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import workSystem from "../assets/samples/work-system.svg";
import bcfInfographic from "../assets/samples/bcf-infographic.svg";
import rubeeInfographic from "../assets/samples/rubee-infographic.svg";
import "./Work.css";

const projectCards = [
  {
    title:
      "Designing Enterprise SaaS Experiences: The UX Behind a Scalable Bot Building Framework",
    tags: [
      "Enterprise Saas",
      "No Code Workflow",
      "System design",
      "Conversational / Agentic AI",
    ],
    href: "/work/nebula-analytics",
    cta: "Open case study",
    image: bcfInfographic,
    interactiveMedia: true,
  },
  {
    title:
      "Designing Enterprise SaaS Experiences: The UX Behind a Scalable Bot Building Framework",
    tags: [
      "Enterprise Saas",
      "No Code Workflow",
      "System design",
      "Conversational / Agentic AI",
    ],
    href: "/work/flowkit-design-system",
    cta: "Open case study",
    image: workSystem,
  },
  {
    title: "Rubee App: Designing a Simpler Personal Finance Experience",
    tags: [
      "Enterprise Saas",
      "No Code Workflow",
      "System design",
      "Conversational / Agentic AI",
    ],
    href: "/work/rubee-app",
    cta: "Open case study",
    image: rubeeInfographic,
    interactiveMedia: true,
  },
];

function ProjectButton({ card }) {
  const className = "work-card-button";

  if (card.external) {
    return (
      <a className={className} href={card.href} target="_blank" rel="noreferrer">
        {card.cta}
      </a>
    );
  }

  return (
    <Link className={className} to={card.href}>
      {card.cta}
    </Link>
  );
}

function Work() {
  return (
    <section id="work" className="work">
      <div className="work-section">
        <div className="work-list">
          {projectCards.map((card, i) => (
            <Motion.article
              className={`work-card ${card.interactiveMedia ? "work-card-interactive-media" : ""}`}
              key={`${card.title}-${i}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="work-card-media" aria-hidden="true">
                <img src={card.image} alt="" />
              </div>
              <div className="work-card-content">
                <div className="work-card-copy">
                  <h2 className="work-card-title">{card.title}</h2>
                  <div className="work-card-tags" aria-label="Project tags">
                    {card.tags.map((tag) => (
                      <span className="work-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ProjectButton card={card} />
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
