import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import { projects } from "../data/projects";
import personaOneImage from "../persona 1.webp";
import personaTwoImage from "../persona 2.webp";
import finalFeaturesImage from "../assets/final features.webp";
import painpointsImage from "../assets/painpoints.webp";
import competitorAnalysisImage from "../assets/competitor analysis.webp";
import modularThinkingImage from "../modular thinking.webp";
import caseResearch from "../assets/samples/case-research.svg";
import caseWireframe from "../assets/samples/case-wireframe.svg";
import workDashboard from "../assets/samples/work-dashboard.svg";
import bcfInfographic from "../assets/samples/bcf-infographic.svg";
import workSystem from "../assets/samples/work-system.svg";
import rubeeInfographic from "../assets/samples/rubee-infographic.svg";
import "./CaseStudy.css";

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

function ImageFrame({ src, alt = "" }) {
  return (
    <figure className="cs-image-frame">
      <img src={src} alt={alt} loading="lazy" />
    </figure>
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

function BcfCaseStudy({ onContactClick, study }) {
  const images = [caseResearch, caseWireframe, workDashboard];
  const discoveryCardImages = {
    "competitor-analysis": competitorAnalysisImage,
    painpoints: painpointsImage,
    "final-features": finalFeaturesImage,
    "persona-1": personaOneImage,
    "persona-2": personaTwoImage,
    "modular-thinking": modularThinkingImage,
  };

  return (
    <>
      <Navbar onContactClick={onContactClick} />
      <main className="case-study-page">
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
            <ImageFrame src={bcfInfographic} alt={study.title} />
          </div>
        </section>

        <section className="cs-shell cs-two-column cs-project-details">
          <div>
            <SectionHeader eyebrow="01 Snapshot" title="Project Details" />
          </div>
          <div>
            <ProjectMetadata role={study.role} toolsUsed={study.toolsUsed} details={study.details} />
          </div>
        </section>

        <section className="cs-shell cs-two-column cs-problem">
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

        <section className="cs-wide-band">
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

        <section className="cs-shell cs-two-column">
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

        <section className="cs-shell cs-two-column">
          <div>
            <SectionHeader eyebrow="06 Iteration" title="Iteration Cycle" />
          </div>
          <div>
            <p className="cs-lead">{study.iterationIntro}</p>
            {study.iterationCards ? (
              <div className="cs-card-grid cs-discovery-grid">
                {study.iterationCards.map((card) => (
                  <article className="cs-point-card" key={card.title}>
                    <h3>{card.title}</h3>
                    {card.intro ? (
                      <div className="cs-copy">
                        <p>{card.intro}</p>
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
                <h3>Mid-Fidelity Wireframes</h3>
                <ul className="cs-list">
                  {study.wireframes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {study.iterationDetails && (
                  <div className="cs-copy" style={{ marginTop: "24px" }}>
                    {study.iterationDetails.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                )}
              </>
            )}
            <h3>Prototype With Realistic Scenarios</h3>
            <div className="cs-copy">
              <p>{study.prototypeIntro}</p>
              {study.prototypeFeatures && (
                <ul className="cs-analysis-list">
                  {study.prototypeFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              )}
              <p>{study.prototypeOutro}</p>
              {study.prototypeFeedbackPoints && (
                <ul className="cs-analysis-list">
                  {study.prototypeFeedbackPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
            <a
              className="cs-text-link"
              href={study.prototypeLink}
              target="_blank"
              rel="noreferrer"
            >
              Open Figma prototype
            </a>
          </div>
        </section>

        <section className="cs-wide-band">
          <div className="cs-shell cs-two-column">
            <div>
              <SectionHeader eyebrow="07 Feedback" title="Feedback & Iteration" />
            </div>
            <div>
              {study.feedbackIntro && <p className="cs-lead">{study.feedbackIntro}</p>}
              {study.feedbackContext && <p className="cs-lead">{study.feedbackContext}</p>}
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
            </div>
          </div>
        </section>

        {study.limitedInteractivity && (
          <section className="cs-shell cs-two-column">
            <div>
              <SectionHeader eyebrow="08 Constraint" title="Limited Interactivity in Testing" />
            </div>
            <div>
              <p className="cs-copy-single">{study.limitedInteractivity}</p>
            </div>
          </section>
        )}

        <section className="cs-shell cs-two-column">
          <div>
            <SectionHeader eyebrow="09 Visuals" title="Visual Design & Refinement" />
          </div>
          <div>
            <p className="cs-lead">{study.visualIntro}</p>
            <div className="cs-card-grid">
              {study.visualDecisions.map((item) => (
                <article className="cs-point-card" key={item}>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cs-shell cs-two-column">
          <div>
            <SectionHeader eyebrow="10 Reflection" title="Final Reflection" />
          </div>
          <div>
            {study.reflection.map((paragraph) => (
              <p className="cs-lead" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <h3>What Worked Well</h3>
            <ul className="cs-list">
              {study.worked.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Gaps & Improvement Areas</h3>
            <p className="cs-copy-single">{study.gaps}</p>
          </div>
        </section>

        <section className="cs-shell cs-two-column cs-bottom">
          <div>
            <SectionHeader eyebrow="11 Learnings" title="Key Learnings" />
          </div>
          <div className="cs-copy">
            {study.learnings.map((learning) => (
              <p key={learning}>{learning}</p>
            ))}
          </div>
        </section>
      </main>
      <Footer onContactClick={onContactClick} />
    </>
  );
}

function RubeeCaseStudy({ onContactClick, project, study }) {
  return (
    <>
      <Navbar onContactClick={onContactClick} />
      <main className="case-study-page">
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

        <section className="cs-shell cs-project-details">
          <h2>Project Details</h2>
          <DetailGrid
            details={[
              { label: "Timeline", value: study.timeline },
              { label: "Tools", value: study.tools },
              { label: "Team", value: study.team },
            ]}
          />
        </section>

        <section className="cs-shell cs-two-column">
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

        <section className="cs-shell cs-two-column cs-problem">
          <SectionHeader title="What problem does this app aim to solve?" />
          <div className="cs-copy">
            {study.problem.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ImageFrame src={rubeeImages.overview} alt="" />
        </section>

        <section className="cs-wide-band">
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

        <section className="cs-shell">
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

        <section className="cs-shell cs-two-column">
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

        <section className="cs-wide-band">
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

        <section className="cs-shell">
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

        <section className="cs-shell">
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

        <section className="cs-shell">
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

        <section className="cs-shell">
          <SectionHeader title="User Testing" />
          <p className="cs-lead">I asked a few users to give feedback of the app.</p>
        </section>

        <section className="cs-wide-band">
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

        <section className="cs-shell cs-feature-stack">
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

        <section className="cs-shell cs-bottom">
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

function CaseStudy({ onContactClick, caseSlug }) {
  const { slug } = useParams();
  const finalSlug = caseSlug || slug;
  const project = projects.find((item) => item.slug === finalSlug);
  const study = caseStudies[finalSlug];

  if (finalSlug === "rubee-app" && project && study) {
    return (
      <RubeeCaseStudy
        onContactClick={onContactClick}
        project={project}
        study={study}
      />
    );
  }

  if (finalSlug === "nebula-analytics" && study) {
    return <BcfCaseStudy onContactClick={onContactClick} study={study} />;
  }

  return (
    <>
      <Navbar onContactClick={onContactClick} />
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
