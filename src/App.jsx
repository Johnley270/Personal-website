import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import BackToTopFab from "./components/BackToTopFab";
import CaseStudy from "./pages/CaseStudy";
import "./App.css";

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar onContactClick={openContact} />
              <Hero onContactClick={openContact} />
              <Work />
              <Footer onContactClick={openContact} />
            </>
          }
        />
        <Route
          path="/bcf"
          element={<CaseStudy onContactClick={openContact} caseSlug="nebula-analytics" />}
        />
        <Route
          path="/work/:slug"
          element={<CaseStudy onContactClick={openContact} />}
        />
      </Routes>
      <ContactModal isOpen={contactOpen} onClose={closeContact} />
      <BackToTopFab />
    </div>
  );
}

export default App;
