import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
} from "lucide-react";

import content from "./utils/content";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Header from "./components/Header";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero id="hero" isVisible={isVisible} />

      <Skills id="skills" />
      <Projects id="projects" />
      <Education id="education" />
      <footer className="border-t border-zinc-700/50 py-8 text-center text-gray-400">
        <p>© 2025 Lautaro Hitta - Web Developer Portfolio</p>
      </footer>
    </div>
  );
};

export default LandingPage;
