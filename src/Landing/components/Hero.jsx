import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../utils/content.js";
import { ChevronDown } from "lucide-react";
import ContactButtons from "./ContactButtons.jsx";

const Hero = ({ id, isVisible }) => {
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

  const { language } = useLanguage();
  const t = content[language];

  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 to-black -z-10"></div>

      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-28 max-w-6xl mx-auto mb-14">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <div className="font-bold">
                <span className="md:text-7xl text-3xl">
                  {language === "es" ? "Soy " : "I'm "}
                  <span className="">{t.hero.name}</span>
                </span>
              </div>
              <span className="md:text-5xl text-2xl font-mono text-lime-400 font-normal">
                {t.hero.role}
              </span>
            </div>

            <p className="text-sm text-gray-300 mb-8 max-w-2xl">
              {t.hero.description}
            </p>
            <div className="w-full flex  lg:justify-start justify-center">
              <ContactButtons />
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-96 md:h-96 bg-gradient-to-br  rounded-full flex items-center justify-center border border-zinc-900"></div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("skills")}
        className="absolute bottom-8 left-[calc(1/2)]  transform -translate-x-1/2 animate-bounce "
      >
        <ChevronDown className="w-8 h-8 text-lime-400" />
      </button>
    </section>
  );
};

export default Hero;
