import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../utils/content.js";
import Project from "./Project";

const Projects = ({ id }) => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id={id} className="py-3 md:py-28  px-2 sm:px-6 bg-black mt-2">
      <div className="max-w-5xl mx-auto text-center border border-zinc-700/50 px-4 pt-4 lg:px-9 lg:pt-9 lg:pb-3 rounded-xl">
        <div className="mb-3 md:mb-8">
          <h2 className="text-3xl md:text-4xl text-left font-bold text-zinc-200">
            {t.projects.title}
          </h2>
          <h2 className="text-sm md:text-base text-left font-semibold text-zinc-400 mt-1">
            {t.projects.subtitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 text-left mb-3">
          {t.projects.items.map((project, index) => (
            <Project key={index} project={project} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
