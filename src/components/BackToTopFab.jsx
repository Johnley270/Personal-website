import { useEffect, useState } from "react";
import "./BackToTopFab.css";

const SHOW_AFTER_PX = 320;

function BackToTopFab() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_PX);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`back-to-top-fab ${isVisible ? "back-to-top-fab-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 6.5l-6.5 6.5 1.5 1.5 4-4V18h2v-7.5l4 4 1.5-1.5z" />
      </svg>
    </button>
  );
}

export default BackToTopFab;