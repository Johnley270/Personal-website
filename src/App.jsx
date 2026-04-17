import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import ResumeModal from "./components/ResumeModal";
import BackToTopFab from "./components/BackToTopFab";
import CaseStudy from "./pages/CaseStudy";
import "./App.css";

function LegacyWorkRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/${slug}`} replace />;
}

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);
  const openResume = () => setResumeOpen(true);
  const closeResume = () => setResumeOpen(false);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      navigate({ pathname: "/", search: location.search }, { replace: true, state: location.state });
      return;
    }

    if (location.pathname !== "/") {
      return;
    }

    const scrollTarget = location.state?.scrollTo;
    if (!scrollTarget) {
      return;
    }

    if (scrollTarget === "work") {
      requestAnimationFrame(() => {
        const workSection = document.getElementById("work");
        workSection?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    navigate(location.pathname, { replace: true, state: null });
  }, [location, navigate]);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar onContactClick={openContact} onResumeClick={openResume} />
              <Hero onContactClick={openContact} />
              <Work />
              <Footer onContactClick={openContact} />
            </>
          }
        />
        <Route
          path="/bcf"
          element={<Navigate to="/nebula-analytics" replace />}
        />
        <Route
          path="/work/:slug"
          element={<LegacyWorkRedirect />}
        />
        <Route
          path="/:slug"
          element={<CaseStudy onContactClick={openContact} onResumeClick={openResume} />}
        />
      </Routes>
      <ContactModal isOpen={contactOpen} onClose={closeContact} />
      <ResumeModal isOpen={resumeOpen} onClose={closeResume} />
      <BackToTopFab />
    </div>
  );
}

export default App;
