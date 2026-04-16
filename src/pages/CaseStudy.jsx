import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { caseStudies } from "../data/caseStudies";
import { projects } from "../data/projects";
import personaOneImage from "../persona 1.webp";
import personaTwoImage from "../persona 2.webp";
import finalFeaturesImage from "../assets/final features.webp";
import painpointsImage from "../assets/painpoints.webp";
import competitorAnalysisImage from "../assets/competitor analysis.webp";
import modularThinkingImage from "../modular thinking.webp";
import bcf1Image from "../assets/BCF1.webp";
import bcf2Image from "../assets/BCF2.webp";
import bcf3Image from "../assets/BCF3.webp";
import bcf4Image from "../assets/BCF4.webp";
import bcf5Image from "../assets/BCF5.webp";
import bcf6Image from "../assets/BCF6.webp";
import vd1Image from "../assets/VD1.webp";
import vd2Image from "../assets/VD2.webp";
import vd3Image from "../assets/VD3.webp";
import vd4Image from "../assets/VD4.webp";
import caseResearch from "../assets/samples/case-research.svg";
import caseWireframe from "../assets/samples/case-wireframe.svg";
import workDashboard from "../assets/samples/work-dashboard.svg";
import bcfInfographic from "../assets/samples/bcf-infographic.svg";
import workSystem from "../assets/samples/work-system.svg";
import rubeeInfographic from "../assets/samples/rubee-infographic.svg";
import SectionChips from "../components/SectionChips";
import "./CaseStudy.css";

const ENABLE_SECTION_CHIPS = true;

const rubeeImages = {
  hero: "https://framerusercontent.com/images/HlGlYZneX4pDG87KY4rVzD4cvE.jpg",
  overview: "https://framerusercontent.com/images/0u6hbbi6dVOhxJBkdtORFXIbRLY.jpg",
  auditA: "https://framerusercontent.com/images/XvEGJjzV3NVQg1VVzsTRUo3EeRs.jpg",
  auditB: "https://framerusercontent.com/images/0IM7oM9VHly5oCK1vgxvdXmh928.jpg",
  researchA: "https://framerusercontent.com/images/TT9UA5tqB2aPZq5hw4zBmsj3ok.jpg",
  researchB: "https://framerusercontent.com/images/qwbMy8LvaR6rlaxQyNtaADXVec.jpg",
  persona: "https://framerusercontent.com/images/AOHlG9KvYeLIh4Ubx2rVw5HqQU.jpg",
  consolidationA: "https://framerusercontent.com/images/ENOfAG5Vk3JNHqpfSCfR6R60yU.png",
  consolidationB: "https://framerusercontent.com/images/9x1GJwU0wkY2yHdv19gUp6fu4A.png",
  consolidationC: "https://framerusercontent.com/images/bsROPkXFyDL6FAnJEPp59oNHU.png",
  wireframes: "https://framerusercontent.com/images/C14ETzJI9AGj19IKKyXG2rao54g.png",
  flowA: "https://framerusercontent.com/images/cMTfnUIfMJetA0uiFieENJlcQyg.jpg",
  flowB: "https://framerusercontent.com/images/6Jgbq7T8MpjvBItKfUBtXP8v3hI.jpg",
  flowC: "https://framerusercontent.com/images/TpzhOjA2cupfUBPHqK6KpwQzM.jpg",
  flowD: "https://framerusercontent.com/images/ub3xJohdEWM4WnMIBHYehSUe1I.jpg",
  flowE: "https://framerusercontent.com/images/6j3s1HIcbnNLywpy1lc07g1LaqQ.jpg",
  flowF: "https://framerusercontent.com/images/NidFDEtmZXrOqNNbYkhqF3gLVY.jpg",
  visualA: "https://framerusercontent.com/images/NLgvIZQB1OMV0vggaQIzYmK9Uc0.png",
  visualB: "https://framerusercontent.com/images/70WFTZlPwouvm4ewHE33im8Zao.png",
  visualC: "https://framerusercontent.com/images/MR6wndWslUwlT46LazK6BJuOftg.png",
  visualD: "https://framerusercontent.com/images/3e5cxde8OTwTstDfqHfUhUOs8jM.png",
  visualE: "https://framerusercontent.com/images/NdNRTIEnEhnOlw5RwJCCTuUVeM8.png",
  visualF: "https://framerusercontent.com/images/7rnt4n1COTHDPTHzvnlcCWK4wJ4.png",
  graphA: "https://framerusercontent.com/images/6IXzaGdidVHLJDmNgmTS9ZfEFBg.png",
  graphB: "https://framerusercontent.com/images/vYiMtxSF3rRrxTBUAP5k9tPhQ.jpg",
  final: "https://framerusercontent.com/images/jxFHCC2MFSJNLq36liOzy2zEGw.png",
};

const bcfSections = [
  { id: "bcf-snapshot", label: "Snapshot" },
  { id: "bcf-problem", label: "Problem" },
  { id: "bcf-research", label: "Research" },
  { id: "bcf-strategy", label: "Strategy" },
  { id: "bcf-iteration", label: "Iteration" },
  { id: "bcf-feedback", label: "Feedback" },
  { id: "bcf-visuals", label: "Visuals" },
  { id: "bcf-reflection", label: "Reflection" },
  { id: "bcf-learnings", label: "Learnings" },
];

const rubeeSections = [
  { id: "rubee-project-details", label: "Project" },
  { id: "rubee-background", label: "Background" },
  { id: "rubee-problem", label: "Problem" },
  { id: "rubee-research", label: "Research" },
  { id: "rubee-primary-research", label: "Primary Research" },
  { id: "rubee-consolidation", label: "Consolidation" },
  { id: "rubee-pain-points", label: "Pain Points" },
  { id: "rubee-ideation", label: "Ideation" },
  { id: "rubee-wireframes", label: "Wireframes" },
  { id: "rubee-user-flows", label: "User Flows" },
  { id: "rubee-user-testing", label: "User Testing" },
  { id: "rubee-visual-design", label: "Visual Design" },
  { id: "rubee-final-design", label: "Final Design" },
  { id: "rubee-learnings", label: "Learnings" },
];

function ImageFrame({ src, alt = "", onClick }) {
  return (
    <figure className="cs-image-frame" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}

function ImageModal({ src, alt = "", onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscapeKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="image-modal-overlay" onClick={(e) => {
      if (e.target.className === 'image-modal-overlay') {
        onClose();
      }
    }}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="image-modal-close" onClick={handleCloseClick} aria-label="Close image" type="button">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="cs-section-head">
      {eyebrow ? <p className="cs-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
    </div>
  );
}

function DetailGrid({ details }) {
  return (
    <dl className="cs-details-grid">
      {details.map((detail) => (
        <div key={detail.label}>
          <dt>{detail.label}</dt>
          <dd>{detail.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectMetadata({ role, toolsUsed, details }) {
  return (
    <div className="cs-project-metadata">
      <div className="cs-metadata-box">
        <div className="cs-metadata-row">
          <dt>Role</dt>
          <dd>{role}</dd>
        </div>

        <div className="cs-metadata-row">
          <dt>Tools Used</dt>
          <dd>
            <ul className="cs-tools-list">
              {toolsUsed.map((tool) => (
                <li key={tool.name}>
                  <strong>{tool.name}</strong> — {tool.description}
                </li>
              ))}
            </ul>
          </dd>
        </div>

        {details && details.map((detail) => (
          <div className="cs-metadata-row" key={detail.label}>
            <dt>{detail.label}</dt>
            <dd>{detail.value}</dd>
          </div>
        ))}
      </div>
    </div>
  );
}

function BcfCaseStudy({ onContactClick, onResumeClick, study }) {
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (src) => {
    setModalImage(src);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  const images = [caseResearch, caseWireframe, workDashboard];
  const visualDecisionImages = [vd1Image, vd2Image, vd3Image, vd4Image];
  const discoveryCardImages = {
    "competitor-analysis": competitorAnalysisImage,
    painpoints: painpointsImage,
    "final-features": finalFeaturesImage,
    "persona-1": personaOneImage,
    "persona-2": personaTwoImage,
    "modular-thinking": modularThinkingImage,
    "bcf-1": bcf1Image,
    "bcf-2": bcf2Image,
    "bcf-3": bcf3Image,
    "bcf-4": bcf4Image,
    "bcf-5": bcf5Image,
    "bcf-6": bcf6Image,
  };

  return (
    <>
      <Navbar onContactClick={onContactClick} onResumeClick={onResumeClick} />
      {ENABLE_SECTION_CHIPS && <SectionChips sections={bcfSections} />}
      <main className={`case-study-page ${ENABLE_SECTION_CHIPS ? "with-section-chips" : ""}`}>
        <section className="cs-hero-band">
          <div className="cs-shell cs-hero-grid">
            <div className="cs-hero-copy">
              <Link className="cs-back" to="/#work">
                Back to work
              </Link>
              <p className="cs-kicker">BOT CREATION FRAMEWORK CASE STUDY</p>
              <h1>{study.title}</h1>
              <p className="cs-date">{study.published}</p>
            </div>
            <ImageFrame src={bcfInfographic} alt={study.title} onClick={() => handleImageClick(bcfInfographic)} />
          </div>
        </section>

        <section id="bcf-snapshot" className="cs-shell cs-two-column cs-project-details">
          <div>
            <SectionHeader eyebrow="01 Snapshot" title="Project Details" />
          </div>
          <div>
            <ProjectMetadata role={study.role} toolsUsed={study.toolsUsed} details={study.details} />
          </div>
        </section>

        <section id="bcf-problem" className="cs-shell cs-two-column cs-problem">
          <div>
            <SectionHeader eyebrow="03 Problem" title="Problem Definition" />
          </div>
          <div className="cs-copy">
            <h3>Designing a No-Code Interface for Fast & Flexible Bot Building</h3>
            {study.overview.map((paragraph) => (
              <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            <h3>This gave rise to a dual goal:</h3>
            {study.dualGoals && study.dualGoals.map((goal) => (
              <p key={goal} dangerouslySetInnerHTML={{ __html: goal }} />
            ))}
            <h3 style={{ marginTop: '24px' }}>The leadership came to us with a clear directive:</h3>
            <p className="cs-quote">"{study.directive}"</p>
            {study.problemIntro && <p style={{ marginTop: '24px' }}>{study.problemIntro}</p>}
            {study.problemStatement && <p>{study.problemStatement}</p>}
            {study.exploringEcosystemIntro && <p style={{ marginTop: '24px' }}>{study.exploringEcosystemIntro}</p>}
            {study.exploringEcosystem && <p>{study.exploringEcosystem}</p>}
            {study.understandingEcosystem && (
              <div style={{ marginTop: '24px' }}>
                {study.understandingEcosystem.map((section, idx) => (
                  <div key={idx} style={{ marginBottom: idx === 0 ? '20px' : '0' }}>
                    {section.subtitle && <h3>{section.subtitle}</h3>}
                    <p dangerouslySetInnerHTML={{ __html: section.body }} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="bcf-research" className="cs-wide-band">
          <div className="cs-shell cs-two-column">
            <div>
              <SectionHeader eyebrow="04 Research" title="Discovery & Research" />
            </div>
            <div>
              <p className="cs-lead">{study.discoveryIntro}</p>
              {study.discoveryQuestions && (
                <ul className="cs-list" style={{ marginTop: '20px' }}>
                  {study.discoveryQuestions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
              )}
              {study.discoveryAfterQuestions && (
                <div className="cs-copy" style={{ marginTop: '20px' }}>
                  {study.discoveryAfterQuestions.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}
              <div className="cs-card-grid cs-discovery-grid">
                {study.discoveryCards.map((card) => (
                  <article className="cs-point-card" key={card.title}>
                    <h3>{card.title}</h3>
                    {card.intro ? (
                      <div className="cs-copy">
                        <p>{card.intro}</p>
                        {(card.imageType || card.imagePlaceholder) && (
                          <div className="cs-analysis-placeholder">
                            {card.imageType && discoveryCardImages[card.imageType] ? (
                              <img
                                className="cs-analysis-placeholder-image"
                                src={discoveryCardImages[card.imageType]}
                                alt={card.imageAlt || "Analysis"}
                                loading="lazy"
                                onClick={() => handleImageClick(discoveryCardImages[card.imageType])}
                                style={{ cursor: 'pointer' }}
                              />
                            ) : (
                              card.imagePlaceholder
                            )}
                          </div>
                        )}
                        {card.imageCaption && <p className="cs-analysis-caption">{card.imageCaption}</p>}
                        {card.assessLabel && <p className="cs-analysis-label">{card.assessLabel}</p>}
                        {card.assessPoints && (
                          <ul className="cs-analysis-list">
                            {card.assessPoints.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        )}
                        {card.outro && <p>{card.outro}</p>}
                        {card.postOutro && <p>{card.postOutro}</p>}
                        {card.postAssessLabel && <p className="cs-analysis-label cs-analysis-label-strong">{card.postAssessLabel}</p>}
                        {card.postAssessPoints && (
                          <ul className="cs-analysis-list">
                            {card.postAssessPoints.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        )}
                        {card.postAssessImageTypes && card.postAssessImageTypes.map((imageType) => (
                          discoveryCardImages[imageType] ? (
                            <div className="cs-analysis-placeholder" key={imageType}>
                              <img
                                className="cs-analysis-placeholder-image"
                                src={discoveryCardImages[imageType]}
                                alt={card.postAssessImageAlt || "Supporting analysis"}
                                loading="lazy"
                                onClick={() => handleImageClick(discoveryCardImages[imageType])}
                                style={{ cursor: 'pointer' }}
                              />
                            </div>
                          ) : null
                        ))}
                        {card.postAssessImageType && discoveryCardImages[card.postAssessImageType] && (
                          <div className="cs-analysis-placeholder">
                            <img
                              className="cs-analysis-placeholder-image"
                              src={discoveryCardImages[card.postAssessImageType]}
                              alt={card.postAssessImageAlt || "Supporting analysis"}
                              loading="lazy"
                              onClick={() => handleImageClick(discoveryCardImages[card.postAssessImageType])}
                              style={{ cursor: 'pointer' }}
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      <p>{card.body}</p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="bcf-strategy" className="cs-shell cs-two-column">
          <div>
            <SectionHeader eyebrow="05 Strategy" title="Design Strategy" />
          </div>
          <div>
            <p className="cs-lead">{study.designStrategyIntro || study.strategyIntro}</p>
            {study.designStrategyCards ? (
              <div className="cs-card-grid cs-discovery-grid">
                {study.designStrategyCards.map((card) => (
                  <article className="cs-point-card" key={card.title}>
                    <h3>{card.title}</h3>
                    {card.intro ? (
                      <div className="cs-copy">
                        <p>{card.intro}</p>
                        {card.imageType && discoveryCardImages[card.imageType] && (
                          <div className="cs-analysis-placeholder">
                            <img
                              className="cs-analysis-placeholder-image"
                              src={discoveryCardImages[card.imageType]}
                              alt={card.imageAlt || card.title}
                              loading="lazy"
                              onClick={() => handleImageClick(discoveryCardImages[card.imageType])}
                              style={{ cursor: 'pointer' }}
                            />
                          </div>
                        )}
                        {card.assessLabel && <p className="cs-analysis-label">{card.assessLabel}</p>}
                        {card.assessPoints && (
                          <ul className="cs-analysis-list">
                            {card.assessPoints.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        )}
                        {card.outro && <p>{card.outro}</p>}
                      </div>
                    ) : (
                      <p>{card.body}</p>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <>
                {study.strategyPoints && (
                  <ul className="cs-list">
                    {study.strategyPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                <h3>Principles</h3>
                <ul className="cs-list">
                  {study.principles.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>

        <section id="bcf-iteration" className="cs-shell cs-two-column">
          <div>
            <SectionHeader eyebrow="06 Iteration" title="Iteration Cycle" />
          </div>
          <div className="cs-copy">
            <p className="cs-lead">{study.iterationIntro}</p>
            {study.iterationCards && study.iterationCards.map((card, index) => (
              <div key={card.title} style={{ marginTop: index === 0 ? '24px' : '40px' }}>
                <h3>{card.title}</h3>
                {card.intro && <p>{card.intro}</p>}
                {card.highlightLine && <p className="cs-highlight-line">{card.highlightLine}</p>}
                {card.assessLabel && <p className="cs-analysis-label">{card.assessLabel}</p>}
                {card.assessPoints && (
                  <ul className="cs-analysis-list">
                    {card.assessPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                {card.outro && <p style={{ marginTop: '16px' }}>{card.outro}</p>}
              </div>
            ))}
            <div className="cs-prototype-block" style={{ marginTop: '40px' }}>
              <h3>Prototype With Realistic Scenarios</h3>
              <p className="cs-prototype-intro">{study.prototypeIntro}</p>
              {study.prototypeFeatures && (
                <ul className="cs-analysis-list cs-prototype-list">
                  {study.prototypeFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              )}
              <p className="cs-prototype-outro">{study.prototypeOutro}</p>
              {study.prototypeFeedbackPoints && (
                <ul className="cs-analysis-list cs-prototype-list">
                  {study.prototypeFeedbackPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              {study.iterationCardImages && (
                <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                  {study.iterationCardImages.map((imageType) => (
                    discoveryCardImages[imageType] ? (
                      <ImageFrame
                        key={imageType}
                        src={discoveryCardImages[imageType]}
                        alt={`BCF Iteration - ${imageType}`}
                        onClick={() => handleImageClick(discoveryCardImages[imageType])}
                      />
                    ) : null
                  ))}
                </div>
              )}
            </div>
            <a
              className="cs-text-link"
              href={study.prototypeLink}
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: '16px', display: 'inline-block' }}
            >
              Open Figma prototype
            </a>
          </div>
        </section>

        <section className="cs-figma-embed-section">
          <div className="cs-figma-container">
            <h3 className="cs-figma-title">Interactive Prototype</h3>
            <div className="cs-figma-wrapper">
              <iframe
                title="BCF Figma prototype"
                loading="lazy"
                style={{
                  border: 'none',
                  width: '100%',
                  height: '100%',
                }}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FkxAmPLUAhrvs9ac9SbjtFB%2FBCF_for-embed%3Fnode-id%3D1-1188%26t%3D1avwYKjAHm2XKs09-1"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section id="bcf-feedback" className="cs-wide-band">
          <div className="cs-shell cs-two-column">
            <div>
              <SectionHeader eyebrow="07 Feedback" title="Feedback & Iteration" />
            </div>
            <div>
              <div className="cs-feedback-intro">
                {study.feedbackIntro && <p className="cs-lead">{study.feedbackIntro}</p>}
                {study.feedbackContext && <p className="cs-lead">{study.feedbackContext}</p>}
                {study.feedbackOutro && <p className="cs-lead">{study.feedbackOutro}</p>}
              </div>
              <h3>User Feedback</h3>
              <ul className="cs-list">
                {study.feedback.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3>Post-feedback, I iterated quickly on:</h3>
              <ul className="cs-list">
                {study.iterations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {study.limitedInteractivityIntro && <h3>Limited Interactivity in Testing</h3>}
              {study.limitedInteractivityIntro && <p className="cs-copy-single">{study.limitedInteractivityIntro}</p>}
              {study.limitedInteractivityPoints && (
                <ul className="cs-list" style={{ marginTop: '20px' }}>
                  {study.limitedInteractivityPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        <section id="bcf-visuals" className="cs-shell cs-two-column">
          <div>
            <SectionHeader eyebrow="09 Visuals" title="Visual Design & Refinement" />
          </div>
          <div>
            <p className="cs-lead">{study.visualIntro}</p>
            <p className="cs-visual-decisions-intro">Final UI decisions were guided by:</p>
            <div className="cs-card-grid cs-visual-decisions-grid">
              {study.visualDecisions.map((item) => {
                const [title, ...bodyParts] = item.split(':');
                const body = bodyParts.join(':').trim();

                return (
                  <article className="cs-point-card cs-visual-decision-card" key={item}>
                    <p className="cs-visual-decision-title">{title}</p>
                    <p className="cs-visual-decision-body">{body}</p>
                  </article>
                );
              })}
            </div>
            <div className="cs-visual-decision-images">
              {visualDecisionImages.map((src, index) => (
                <ImageFrame
                  key={src}
                  src={src}
                  alt={`Visual decision ${index + 1}`}
                  onClick={() => handleImageClick(src)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="bcf-reflection" className="cs-shell cs-two-column">
          <div>
            <SectionHeader eyebrow="10 Reflection" title="Final Reflection" />
          </div>
          <div>
            <div className="cs-copy">
              {study.reflection.map((paragraph) => (
                <p className="cs-lead" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            <h3 style={{ marginTop: '28px' }}>What Worked Well</h3>
            <ul className="cs-list">
              {study.worked.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Gaps & Improvement Areas</h3>
            <p className="cs-copy-single">{study.gaps}</p>
          </div>
        </section>

        <section id="bcf-learnings" className="cs-shell cs-two-column cs-bottom">
          <div>
            <SectionHeader eyebrow="11 Learnings" title="Key Learnings" />
          </div>
          <div className="cs-copy">
            <p className="cs-lead">This project sharpened my skills in:</p>
            <ul className="cs-list">
              {study.learnings.slice(0, 3).map((learning) => (
                <li key={learning}>{learning}</li>
              ))}
            </ul>
            {study.learningsPeopleIntro && <p>{study.learningsPeopleIntro}</p>}
            {study.learningsPeopleContext && <p>{study.learningsPeopleContext}</p>}
            {study.learningsPeoplePoints && (
              <ul className="cs-analysis-list">
                {study.learningsPeoplePoints.map((item) => (
                  <li key={item}>➡️ {item}</li>
                ))}
              </ul>
            )}
            {study.learningsPeopleOutro && <p>{study.learningsPeopleOutro}</p>}
          </div>
        </section>
      </main>
      <Footer onContactClick={onContactClick} />
      {modalImage && <ImageModal src={modalImage} onClose={handleCloseModal} />}
    </>
  );
}

function RubeeCaseStudy({ onContactClick, onResumeClick, project, study }) {
  return (
    <>
      <Navbar onContactClick={onContactClick} onResumeClick={onResumeClick} />
      {ENABLE_SECTION_CHIPS && <SectionChips sections={rubeeSections} />}
      <main className={`case-study-page ${ENABLE_SECTION_CHIPS ? "with-section-chips" : ""}`}>
        <section className="cs-hero-band">
          <div className="cs-shell cs-hero-grid">
            <div className="cs-hero-copy">
              <Link className="cs-back" to="/#work">
                Back to work
              </Link>
              <p className="cs-kicker">RUBEE APP CASE STUDY</p>
              <h1>{study.heroSubtitle}</h1>
              <p className="cs-date">{study.timeline}</p>
            </div>
            <ImageFrame src={rubeeInfographic} alt={project.title} />
          </div>
        </section>

        <section id="rubee-project-details" className="cs-shell cs-project-details">
          <h2>Project Details</h2>
          <DetailGrid
            details={[
              { label: "Timeline", value: study.timeline },
              { label: "Tools", value: study.tools },
              { label: "Team", value: study.team },
            ]}
          />
        </section>

        <section id="rubee-background" className="cs-shell cs-two-column">
          <div>
            <SectionHeader title="Background" />
            <p className="cs-quote">"{study.background}"</p>
          </div>
          <div>
            <SectionHeader title="About the Project" />
            <div className="cs-copy">
              {study.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="rubee-problem" className="cs-shell cs-two-column cs-problem">
          <SectionHeader title="What problem does this app aim to solve?" />
          <div className="cs-copy">
            {study.problem.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ImageFrame src={rubeeImages.overview} alt="" />
        </section>

        <section id="rubee-research" className="cs-wide-band">
          <div className="cs-shell">
            <SectionHeader title="Research and Analysis" />
            <p className="cs-lead">{study.researchIntro}</p>
            <div className="cs-two-column cs-spaced">
              <div>
                <h3>Research objectives</h3>
                <ul className="cs-list">
                  {study.researchObjectives.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Competitive Audit</h3>
                <p className="cs-eyebrow">KEY FINDINGS</p>
                <ul className="cs-list">
                  {study.competitiveFindings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cs-image-pair">
              <ImageFrame src={rubeeImages.auditA} alt="" />
              <ImageFrame src={rubeeImages.auditB} alt="" />
            </div>
          </div>
        </section>

        <section id="rubee-primary-research" className="cs-shell">
          <SectionHeader title="Primary Research" />
          <p className="cs-lead">{study.primaryResearch}</p>
          <div className="cs-research-links">
            <span>Survey format</span>
            <span>Interview format</span>
          </div>
          <div className="cs-quotes-grid">
            {study.userQuotes.map((quote) => (
              <blockquote key={quote}>
                <span>“</span>
                {quote}
                <span>”</span>
              </blockquote>
            ))}
          </div>
          <div className="cs-image-pair">
            <ImageFrame src={rubeeImages.researchA} alt="" />
            <ImageFrame src={rubeeImages.researchB} alt="" />
          </div>
        </section>

        <section id="rubee-consolidation" className="cs-shell cs-two-column">
          <div>
            <SectionHeader title="Research Consolidation" />
            <div className="cs-copy">
              {study.researchConsolidation.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <ImageFrame src={rubeeImages.persona} alt="" />
          <div className="cs-image-triplet">
            <ImageFrame src={rubeeImages.consolidationA} alt="" />
            <ImageFrame src={rubeeImages.consolidationB} alt="" />
            <ImageFrame src={rubeeImages.consolidationC} alt="" />
          </div>
        </section>

        <section id="rubee-pain-points" className="cs-wide-band">
          <div className="cs-shell">
            <SectionHeader title="Pain points" />
            <p className="cs-lead">
              I have narrowed down the data from my research to four main pain
              points that I will be focusing on in the next steps.
            </p>
            <div className="cs-card-grid">
              {study.painPoints.map((point) => (
                <article key={point.title} className="cs-point-card">
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="rubee-ideation" className="cs-shell">
          <SectionHeader title="Ideation" />
          <p className="cs-lead">{study.ideationIntro}</p>
          <div className="cs-two-column cs-spaced">
            <div>
              <h3>Ideate</h3>
              <p className="cs-copy-single">{study.ideationDetails}</p>
              <a
                className="cs-text-link"
                href="https://drive.google.com"
                target="_blank"
                rel="noreferrer"
              >
                HMW Questions
              </a>
            </div>
            <div>
              <h3>Major Solutions & Design Approach</h3>
              <ul className="cs-list">
                {study.designApproach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="rubee-wireframes" className="cs-shell">
          <SectionHeader title="WIreframes" />
          <p className="cs-lead">{study.wireframesIntro}</p>
          <a
            className="cs-text-link"
            href="https://www.behance.net"
            target="_blank"
            rel="noreferrer"
          >
            View Detailedprocess on Behance
          </a>
          <ImageFrame src={rubeeImages.wireframes} alt="" />
        </section>

        <section id="rubee-user-flows" className="cs-shell">
          <SectionHeader title="User flows" />
          <div className="cs-tab-row">
            <span>Information Architecture</span>
            <span>Task flow</span>
          </div>
          <div className="cs-flow-grid">
            {[
              rubeeImages.flowA,
              rubeeImages.flowB,
              rubeeImages.flowC,
              rubeeImages.flowD,
              rubeeImages.flowE,
              rubeeImages.flowF,
            ].map((src) => (
              <ImageFrame key={src} src={src} alt="" />
            ))}
          </div>
        </section>

        <section id="rubee-user-testing" className="cs-shell">
          <SectionHeader title="User Testing" />
          <p className="cs-lead">I asked a few users to give feedback of the app.</p>
        </section>

        <section id="rubee-visual-design" className="cs-wide-band">
          <div className="cs-shell">
            <SectionHeader title="Visual Design" />
            <p className="cs-lead">
              Visual designs not optimised for viewing in screen size of this
              resolution
            </p>
            <p className="cs-lead">Open in desktop for best experience or</p>
            <a
              className="cs-text-link"
              href="https://www.behance.net"
              target="_blank"
              rel="noreferrer"
            >
              View in Behance
            </a>
            <div className="cs-visual-grid">
              {[
                rubeeImages.visualA,
                rubeeImages.visualB,
                rubeeImages.visualC,
                rubeeImages.visualD,
                rubeeImages.visualE,
                rubeeImages.visualF,
              ].map((src) => (
                <ImageFrame key={src} src={src} alt="" />
              ))}
            </div>
          </div>
        </section>

        <section id="rubee-final-design" className="cs-shell cs-feature-stack">
          {study.features.map((feature) => (
            <article key={feature.title} className="cs-feature-row">
              <h2>{feature.title}</h2>
              <p>{feature.body}</p>
            </article>
          ))}
          <div className="cs-image-pair">
            <ImageFrame src={rubeeImages.graphA} alt="" />
            <ImageFrame src={rubeeImages.graphB} alt="" />
          </div>
          <ImageFrame src={rubeeImages.final} alt="" />
        </section>

        <section id="rubee-learnings" className="cs-shell cs-bottom">
          <SectionHeader title="Key Learnings" />
          <div className="cs-card-grid">
            {study.learnings.map((learning) => (
              <article className="cs-point-card" key={learning}>
                <p>{learning}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer onContactClick={onContactClick} />
    </>
  );
}

function CaseStudy({ onContactClick, onResumeClick, caseSlug }) {
  const { slug } = useParams();
  const finalSlug = caseSlug || slug;
  const project = projects.find((item) => item.slug === finalSlug);
  const study = caseStudies[finalSlug];

  if (finalSlug === "rubee-app" && project && study) {
    return (
      <RubeeCaseStudy
        onContactClick={onContactClick}
        onResumeClick={onResumeClick}
        project={project}
        study={study}
      />
    );
  }

  if (finalSlug === "nebula-analytics" && study) {
    return (
      <BcfCaseStudy
        onContactClick={onContactClick}
        onResumeClick={onResumeClick}
        study={study}
      />
    );
  }

  return (
    <>
      <Navbar onContactClick={onContactClick} onResumeClick={onResumeClick} />
      <main className="case-study-page cs-empty-state">
        <div className="cs-shell">
          <Link className="cs-back" to="/#work">
            Back to work
          </Link>
          <h1>{project?.title || "Case Study"}</h1>
          <p>This case study is being updated.</p>
        </div>
      </main>
    </>
  );
}

export default CaseStudy;
