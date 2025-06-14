import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../utils/content.js";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const startY = window.pageYOffset;
    const targetY = target.getBoundingClientRect().top + startY;
    const distance = targetY - startY;
    const duration = 600;
    let startTime = null;

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutQuad(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const { language, setLanguage } = useLanguage();
  const t = content[language];

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-zinc-700/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => {
            scrollToSection("hero");
          }}
          className="text-xl bg-gradient-to-r from-lime-400 to-yellow-400 bg-clip-text text-transparent font-mono transition-transform duration-300 hover:scale-105"
        >
          {"{"} Lautaro Hitta {"}"}
        </button>

        <div className="hidden md:flex space-x-8 font-mono font-normal  ">
          {Object.entries(t.nav).map(([key, value]) => (
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className="hover:text-lime-400 transition-colors duration-300"
            >
              {value}
            </button>
          ))}

          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="bg-zinc-900/40 text-zinc-300 px-3 py-1 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-200"
            title={language === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
          >
            {language.toUpperCase()}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
