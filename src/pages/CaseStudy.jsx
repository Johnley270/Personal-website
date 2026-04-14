import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import { projects } from "../data/projects";
import caseHero from "../assets/samples/case-hero.svg";
import caseResearch from "../assets/samples/case-research.svg";
import caseWireframe from "../assets/samples/case-wireframe.svg";
import workDashboard from "../assets/samples/work-dashboard.svg";
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

function BcfCaseStudy({ onContactClick, study }) {
  const images = [caseResearch, caseWireframe, workDashboard];

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
            <ImageFrame src={caseHero} alt={study.title} />
          </div>
        </section>

        <section className="cs-shell cs-project-details">
          <h2>Project Details</h2>
          <DetailGrid details={study.details} />
        </section>

        <section className="cs-shell cs-two-column">
          <div>
            <SectionHeader title="Designing a No-Code Interface for Fast & Flexible Bot Building" />
            <p className="cs-quote">"{study.directive}"</p>
          </div>
          <div className="cs-copy">
            {study.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="cs-shell cs-two-column cs-problem">
          <SectionHeader title="Problem Definition" />
          <div className="cs-copy">
            {study.problem.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ImageFrame src={workDashboard} alt="" />
        </section>

        <section className="cs-wide-band">
          <div className="cs-shell">
            <SectionHeader title="Discovery & Research" />
            <p className="cs-lead">{study.discoveryIntro}</p>
            <div className="cs-card-grid">
              {study.discoveryCards.map((card) => (
                <article className="cs-point-card" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
            <div className="cs-image-pair">
              <ImageFrame src={caseResearch} alt="" />
              <ImageFrame src={caseWireframe} alt="" />
            </div>
          </div>
        </section>

        <section className="cs-shell cs-two-column">
          <div>
            <SectionHeader title="Design Strategy" />
            <p className="cs-lead">{study.strategyIntro}</p>
          </div>
          <div>
            <h3>Principles</h3>
            <ul className="cs-list">
              {study.principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="cs-image-triplet">
            {images.map((src) => (
              <ImageFrame key={src} src={src} alt="" />
            ))}
          </div>
        </section>

        <section className="cs-shell">
          <SectionHeader title="Iteration Cycle" />
          <p className="cs-lead">{study.iterationIntro}</p>
          <div className="cs-two-column cs-spaced">
            <div>
              <h3>Mid-Fidelity Wireframes</h3>
              <ul className="cs-list">
                {study.wireframes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Prototype With Realistic Scenarios</h3>
              <p className="cs-copy-single">{study.prototype}</p>
              <a
                className="cs-text-link"
                href={study.prototypeLink}
                target="_blank"
                rel="noreferrer"
              >
                Open Figma prototype
              </a>
            </div>
          </div>
        </section>

        <section className="cs-wide-band">
          <div className="cs-shell">
            <SectionHeader title="Feedback & Iteration" />
            <div className="cs-two-column cs-spaced">
              <div>
                <h3>User Feedback</h3>
                <ul className="cs-list">
                  {study.feedback.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Post-feedback, I iterated quickly on:</h3>
                <ul className="cs-list">
                  {study.iterations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-shell">
          <SectionHeader title="Visual Design & Refinement" />
          <p className="cs-lead">{study.visualIntro}</p>
          <div className="cs-card-grid">
            {study.visualDecisions.map((item) => (
              <article className="cs-point-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
          <div className="cs-visual-grid">
            {images.map((src) => (
              <ImageFrame key={src} src={src} alt="" />
            ))}
          </div>
        </section>

        <section className="cs-shell cs-feature-stack">
          <SectionHeader title="Final Reflection" />
          {study.reflection.map((paragraph) => (
            <p className="cs-lead" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="cs-two-column cs-spaced">
            <div>
              <h3>What Worked Well</h3>
              <ul className="cs-list">
                {study.worked.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Gaps & Improvement Areas</h3>
              <p className="cs-copy-single">{study.gaps}</p>
            </div>
          </div>
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
            <ImageFrame src={rubeeImages.hero} alt={project.title} />
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

function CaseStudy({ onContactClick }) {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const study = caseStudies[slug];

  if (slug === "rubee-app" && project && study) {
    return (
      <RubeeCaseStudy
        onContactClick={onContactClick}
        project={project}
        study={study}
      />
    );
  }

  if (slug === "nebula-analytics" && study) {
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
