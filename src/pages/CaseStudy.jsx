import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";
import { caseStudies } from "../data/caseStudies";
import Navbar from "../components/Navbar";
import "./CaseStudy.css";

function ImagePlaceholder({
  color = "var(--accent)",
  label = "Image",
  aspect = "16/9",
}) {
  return (
    <div
      className="cs-image-placeholder"
      style={{
        background: `${color}12`,
        borderColor: `${color}30`,
        aspectRatio: aspect,
      }}
    >
      <span style={{ color }}>{label}</span>
    </div>
  );
}

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

function CaseStudy({ onContactClick }) {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const study = caseStudies[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="case-study-page">
        <Navbar onContactClick={onContactClick} />
        <div className="cs-empty section">
          <h2>Project not found</h2>
          <Link to="/" className="cs-back">
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  if (!study) {
    return (
      <div className="case-study-page">
        <Navbar onContactClick={onContactClick} />
        <motion.div className="cs-wrapper section" {...fadeIn}>
          <Link to="/" className="cs-back">
            <ArrowLeft size={16} />
            Back to home
          </Link>
          <div className="cs-hero">
            <span className="cs-label" style={{ color: project.color }}>
              {project.category} · {project.year}
            </span>
            <h1 className="cs-hero-title">{project.title}</h1>
            <p className="cs-hero-subtitle">{project.description}</p>
            <div className="cs-tags">
              {project.tags.map((t) => (
                <span key={t} className="cs-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="cs-coming-soon">
            <p>Full case study coming soon.</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="case-study-page">
      <Navbar onContactClick={onContactClick} />

      {/* Hero */}
      <motion.section className="cs-wrapper section" {...fadeIn}>
        <Link to="/" className="cs-back">
          <ArrowLeft size={16} />
          Back to home
        </Link>
        <div className="cs-hero">
          <span className="cs-label" style={{ color: project.color }}>
            {project.category} · {project.year}
          </span>
          <h1 className="cs-hero-title">{project.title}</h1>
          <p className="cs-hero-subtitle">{study.heroSubtitle}</p>
        </div>
      </motion.section>

      {/* Cover Image */}
      <motion.div className="cs-cover section" {...fadeIn}>
        <ImagePlaceholder
          color={project.color}
          label="Hero Image"
          aspect="21/9"
        />
      </motion.div>

      {/* Project Details */}
      <motion.section className="cs-section section" {...fadeIn}>
        <h2 className="cs-section-heading">Project Details</h2>
        <div className="cs-details-grid">
          <div className="cs-detail-item">
            <span className="cs-detail-label">Timeline</span>
            <span className="cs-detail-value">{study.timeline}</span>
          </div>
          <div className="cs-detail-item">
            <span className="cs-detail-label">Tools</span>
            <span className="cs-detail-value">{study.tools}</span>
          </div>
          <div className="cs-detail-item">
            <span className="cs-detail-label">Team</span>
            <span className="cs-detail-value">{study.team}</span>
          </div>
        </div>
      </motion.section>

      {/* Background */}
      <motion.section className="cs-section section" {...fadeIn}>
        <h2 className="cs-section-heading">Background</h2>
        <blockquote className="cs-blockquote">{study.background}</blockquote>
      </motion.section>

      {/* About the Project */}
      <motion.section className="cs-section section" {...fadeIn}>
        <h2 className="cs-section-heading">About the Project</h2>
        <p className="cs-body">{study.about}</p>
        <ImagePlaceholder color={project.color} label="App Overview Image" />
      </motion.section>

      {/* Problem */}
      <motion.section className="cs-section section" {...fadeIn}>
        <h2 className="cs-section-heading">
          What problem does this app aim to solve?
        </h2>
        <div className="cs-body">
          {study.problem.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </motion.section>

      {/* Research & Analysis */}
      <motion.section className="cs-section cs-section-alt" {...fadeIn}>
        <div className="section">
          <span className="cs-section-label" style={{ color: project.color }}>
            Research & Analysis
          </span>
          <h2 className="cs-section-heading"> </h2>
          <p className="cs-body">{study.researchIntro}</p>
        </div>
      </motion.section>

      {/* Research Objectives */}
      <motion.section className="cs-section section" {...fadeIn}>
        <h3 className="cs-sub-heading">Research Objectives</h3>
        <ul className="cs-list">
          {study.researchObjectives.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
      </motion.section>

      {/* Competitive Audit */}
      <motion.section className="cs-section section" {...fadeIn}>
        <h3 className="cs-sub-heading">Competitive Audit</h3>
        <ImagePlaceholder
          color={project.color}
          label="Competitive Audit Image"
        />
        <div className="cs-findings">
          <h4 className="cs-findings-label">Key Findings</h4>
          <ul className="cs-list">
            {study.competitiveFindings.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Primary Research */}
      <motion.section className="cs-section section" {...fadeIn}>
        <h3 className="cs-sub-heading">Primary Research</h3>
        <p className="cs-body">{study.primaryResearch}</p>
        <div className="cs-image-row">
          <ImagePlaceholder
            color={project.color}
            label="Survey Format"
            aspect="4/3"
          />
          <ImagePlaceholder
            color={project.color}
            label="Interview Format"
            aspect="4/3"
          />
        </div>
      </motion.section>

      {/* User Quotes */}
      <motion.section className="cs-section section" {...fadeIn}>
        <h3 className="cs-sub-heading">What users said</h3>
        <div className="cs-quotes-grid">
          {study.userQuotes.map((q, i) => (
            <div key={i} className="cs-quote-card">
              <span className="cs-quote-mark">"</span>
              <p>{q}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Research Consolidation */}
      <motion.section className="cs-section section" {...fadeIn}>
        <h3 className="cs-sub-heading">Research Consolidation</h3>
        <div className="cs-body">
          {study.researchConsolidation.map((r, i) => (
            <p key={i}>{r}</p>
          ))}
        </div>
        <div className="cs-image-row cs-image-row-3">
          <ImagePlaceholder
            color={project.color}
            label="Persona"
            aspect="3/4"
          />
          <ImagePlaceholder
            color={project.color}
            label="Empathy Map"
            aspect="3/4"
          />
          <ImagePlaceholder
            color={project.color}
            label="Journey Map"
            aspect="3/4"
          />
        </div>
      </motion.section>

      {/* Pain Points */}
      <motion.section className="cs-section cs-section-alt" {...fadeIn}>
        <div className="section">
          <span className="cs-section-label" style={{ color: project.color }}>
            Pain Points
          </span>
          <h2 className="cs-section-heading">Core challenges identified</h2>
          <div className="cs-pain-grid">
            {study.painPoints.map((pp, i) => (
              <div key={i} className="cs-pain-card">
                <span
                  className="cs-pain-number"
                  style={{ color: project.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4>{pp.title}</h4>
                <p>{pp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Ideation */}
      <motion.section className="cs-section section" {...fadeIn}>
        <span className="cs-section-label" style={{ color: project.color }}>
          Ideation
        </span>
        <h2 className="cs-section-heading">From problems to solutions</h2>
        <p className="cs-body">{study.ideationIntro}</p>
        <p className="cs-body">{study.ideationDetails}</p>
        <ImagePlaceholder color={project.color} label="HMW Questions Image" />
      </motion.section>

      {/* Design Approach */}
      <motion.section className="cs-section section" {...fadeIn}>
        <h3 className="cs-sub-heading">Major Solutions & Design Approach</h3>
        <ul className="cs-list cs-list-accent">
          {study.designApproach.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </motion.section>

      {/* Wireframes */}
      <motion.section className="cs-section section" {...fadeIn}>
        <h3 className="cs-sub-heading">Wireframes</h3>
        <p className="cs-body">{study.wireframesIntro}</p>
        <ImagePlaceholder
          color={project.color}
          label="Wireframes Image"
          aspect="16/10"
        />
        <div className="cs-image-row cs-image-row-3">
          <ImagePlaceholder
            color={project.color}
            label="User Flows"
            aspect="1/1"
          />
          <ImagePlaceholder
            color={project.color}
            label="Info Architecture"
            aspect="1/1"
          />
          <ImagePlaceholder
            color={project.color}
            label="Task Flow"
            aspect="1/1"
          />
        </div>
      </motion.section>

      {/* User Testing */}
      <motion.section className="cs-section section" {...fadeIn}>
        <h3 className="cs-sub-heading">User Testing</h3>
        <p className="cs-body">
          I asked a few users to give feedback of the app.
        </p>
        <ImagePlaceholder
          color={project.color}
          label="User Testing Results Image"
        />
      </motion.section>

      {/* Visual Design */}
      <motion.section className="cs-section cs-section-alt" {...fadeIn}>
        <div className="section">
          <span className="cs-section-label" style={{ color: project.color }}>
            Visual Design
          </span>
          <h2 className="cs-section-heading">Final Designs</h2>
          <div className="cs-image-row">
            <ImagePlaceholder
              color={project.color}
              label="Visual Design 1"
              aspect="9/16"
            />
            <ImagePlaceholder
              color={project.color}
              label="Visual Design 2"
              aspect="9/16"
            />
            <ImagePlaceholder
              color={project.color}
              label="Visual Design 3"
              aspect="9/16"
            />
            <ImagePlaceholder
              color={project.color}
              label="Visual Design 4"
              aspect="9/16"
            />
          </div>
        </div>
      </motion.section>

      {/* Learnings */}
      <motion.section className="cs-section section" {...fadeIn}>
        <span className="cs-section-label" style={{ color: project.color }}>
          Reflections
        </span>
        <h2 className="cs-section-heading">Key Learnings</h2>
        <div className="cs-learnings-grid">
          {study.learnings.map((l, i) => (
            <div key={i} className="cs-learning-card">
              <span
                className="cs-learning-number"
                style={{ color: project.color }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p>{l}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Bottom nav */}
      <motion.section className="cs-bottom section" {...fadeIn}>
        <Link to="/" className="cs-back">
          <ArrowLeft size={16} />
          Back to all projects
        </Link>
      </motion.section>
    </div>
  );
}

export default CaseStudy;
