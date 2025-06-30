import { useLanguage } from "../context/LanguageContext";
import { content } from "../utils/content.js";
import { ChevronDown } from "lucide-react";
import ContactButtons from "./ContactButtons.jsx";
import { HyperText } from "@/components/magicui/hyper-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import {
  SiDocker,
  SiJavascript,
  SiReact,
  SiSpringboot,
  SiSpringsecurity,
  SiTailwindcss,
} from "react-icons/si";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { FaJava } from "react-icons/fa";

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
      className="min-h-screen flex items-center justify-center px-6 pt-20 pb-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 to-black -z-10"></div>

      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-28 max-w-6xl mx-auto mb-14 lg:max-w-4xl xl:max-w-6xl">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <div className="font-bold text-balance">
                <TypingAnimation className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-nowrap">
                  {language === "es"
                    ? "Soy " + t.hero.name
                    : "I'm " + t.hero.name}
                </TypingAnimation>
              </div>
              <span className=" text-xl md:text-3xl lg:text-4xl xl:text-5xl font-mono text-lime-400 font-normal">
                {t.hero.role}
              </span>
            </div>

            <p className="text-xs md:text-base text-gray-300 mb-8 max-w-2xl">
              {t.hero.description}
            </p>
            <div className="w-full flex  lg:justify-start justify-center">
              <ContactButtons />
            </div>
          </div>

          <div className="w-40 h-40  md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-96 xl:h-96 bg-gradient-to-br  rounded-full flex items-center justify-center">
            <OrbitingCircles radius={80} className="block sm:hidden">
              <FaJava className="w-6 h-6" />
              <SiSpringboot className="w-6 h-6" />
              <SiSpringsecurity className="w-6 h-6" />
              <SiDocker className="w-6 h-6" />
              <SiReact className="w-6 h-6" />
              <SiTailwindcss className="w-6 h-6" />
              <SiJavascript className="w-6 h-6" />
            </OrbitingCircles>
            <OrbitingCircles radius={100} className="hidden sm:block md:hidden">
              <FaJava className="w-7 h-7" />
              <SiSpringboot className="w-7 h-7" />
              <SiSpringsecurity className="w-7 h-7" />
              <SiDocker className="w-7 h-7" />
              <SiReact className="w-7 h-7" />
              <SiTailwindcss className="w-7 h-7" />
              <SiJavascript className="w-7 h-7" />
            </OrbitingCircles>
            <OrbitingCircles radius={120} className="hidden md:block lg:hidden">
              <FaJava className="w-8 h-8" />
              <SiSpringboot className="w-8 h-8" />
              <SiSpringsecurity className="w-8 h-8" />
              <SiDocker className="w-8 h-8" />
              <SiReact className="w-8 h-8" />
              <SiTailwindcss className="w-8 h-8" />
              <SiJavascript className="w-8 h-8" />
            </OrbitingCircles>
            <OrbitingCircles radius={150} className="hidden lg:block xl:hidden">
              <FaJava className="w-10 h-10" />
              <SiSpringboot className="w-10 h-10" />
              <SiSpringsecurity className="w-10 h-10" />
              <SiDocker className="w-10 h-10" />
              <SiReact className="w-10 h-10" />
              <SiTailwindcss className="w-10 h-10" />
              <SiJavascript className="w-10 h-10" />
            </OrbitingCircles>
            <OrbitingCircles radius={180} className="hidden xl:block">
              <FaJava className="w-12 h-12" />
              <SiSpringboot className="w-12 h-12" />
              <SiSpringsecurity className="w-12 h-12" />
              <SiDocker className="w-12 h-12" />
              <SiReact className="w-12 h-12" />
              <SiTailwindcss className="w-12 h-12" />
              <SiJavascript className="w-12 h-12" />
            </OrbitingCircles>
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
