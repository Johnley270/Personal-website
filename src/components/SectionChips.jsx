import { useEffect, useMemo, useRef, useState } from "react";
import "./SectionChips.css";

const NAVBAR_HEIGHT = 68;
const CHIP_BAR_HEIGHT = 56;
const RIBBON_HEIGHT = 32;
const SCROLL_OFFSET = NAVBAR_HEIGHT + RIBBON_HEIGHT + CHIP_BAR_HEIGHT + 12;

function SectionChips({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const chipRefs = useRef({});

  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);

  useEffect(() => {
    if (!sectionIds.length) {
      return undefined;
    }

    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!targets.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));

        if (visible.length) {
          setActiveId(visible[0].target.id);
          return;
        }

        const nearBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 24;

        if (nearBottom) {
          setActiveId(sectionIds[sectionIds.length - 1]);
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  useEffect(() => {
    const activeChip = chipRefs.current[activeId];

    if (activeChip) {
      activeChip.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeId]);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    const targetTop = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
    setActiveId(id);
  };

  if (!sections.length) {
    return null;
  }

  return (
    <div className="section-chips-wrap" role="navigation" aria-label="Case study section navigation">
      <div className="section-chips-shell">
        <div className="section-chips-row">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`section-chip ${activeId === section.id ? "section-chip-active" : ""}`}
              onClick={() => scrollToSection(section.id)}
              ref={(node) => {
                chipRefs.current[section.id] = node;
              }}
              aria-current={activeId === section.id ? "true" : undefined}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionChips;
