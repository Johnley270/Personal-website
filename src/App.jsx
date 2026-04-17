import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import ResumeModal from "./components/ResumeModal";
import BackToTopFab from "./components/BackToTopFab";
import CaseStudy from "./pages/CaseStudy";
import "./App.css";

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
          element={
            <CaseStudy
              onContactClick={openContact}
              onResumeClick={openResume}
              caseSlug="nebula-analytics"
            />
          }
        />
        <Route
          path="/work/:slug"
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
