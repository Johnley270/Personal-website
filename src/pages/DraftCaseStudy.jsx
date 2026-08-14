import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./CaseStudy.css";

function DraftCaseStudy({ onContactClick, onResumeClick }) {
  return (
    <>
      <Navbar onContactClick={onContactClick} onResumeClick={onResumeClick} />
      <main className="case-study-page" style={{ padding: "120px 0 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 48px" }}>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", color: "#6366f1", textTransform: "uppercase", marginBottom: 12 }}>
            DRAFT — IN PROGRESS
          </p>
          <h1 style={{ fontSize: 40, fontWeight: 700, color: "#09090b", marginBottom: 16 }}>
            Case Study Title
          </h1>
          <p style={{ fontSize: 18, color: "#71717a", marginBottom: 48 }}>
            Planning phase — content and story being drafted here.
          </p>

          {/* ── OUTLINE ─────────────────────────────────────────────── */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#09090b", marginBottom: 12 }}>
              1. Snapshot
            </h2>
            <p style={{ color: "#71717a" }}>[ Role, tools, timeline, team — add details here ]</p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#09090b", marginBottom: 12 }}>
              2. Background
            </h2>
            <p style={{ color: "#71717a" }}>[ Context — what is the product/company? ]</p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#09090b", marginBottom: 12 }}>
              3. Problem Definition
            </h2>
            <p style={{ color: "#71717a" }}>[ What problem were you solving? ]</p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#09090b", marginBottom: 12 }}>
              4. Research & Discovery
            </h2>
            <p style={{ color: "#71717a" }}>[ Methods, findings, user insights ]</p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#09090b", marginBottom: 12 }}>
              5. Design Strategy
            </h2>
            <p style={{ color: "#71717a" }}>[ Principles, approach, key decisions ]</p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#09090b", marginBottom: 12 }}>
              6. Iteration
            </h2>
            <p style={{ color: "#71717a" }}>[ Sketches → wireframes → prototypes ]</p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#09090b", marginBottom: 12 }}>
              7. Feedback
            </h2>
            <p style={{ color: "#71717a" }}>[ User testing results, what changed ]</p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#09090b", marginBottom: 12 }}>
              8. Visual Design
            </h2>
            <p style={{ color: "#71717a" }}>[ Final UI decisions, design system usage ]</p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#09090b", marginBottom: 12 }}>
              9. Reflection & Learnings
            </h2>
            <p style={{ color: "#71717a" }}>[ What worked, gaps, key takeaways ]</p>
          </section>
        </div>
      </main>
      <Footer onContactClick={onContactClick} />
    </>
  );
}

export default DraftCaseStudy;
