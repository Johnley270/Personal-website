import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
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
          path="/work/:slug"
          element={<CaseStudy onContactClick={openContact} />}
        />
      </Routes>
      <ContactModal isOpen={contactOpen} onClose={closeContact} />
    </div>
  );
}

export default App;
