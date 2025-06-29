import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../utils/content.js";

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-3">
          {t.projects.items.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900/5 rounded-xl p-5 border border-zinc-700/50 group mb-3 md:mb-6 flex flex-col gap-5"
            >
              <div className="">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain rounded-xl border-zinc-700/50 border"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm md:text-xl font-bold font-mono mb-3 group-hover:text-white-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center text-zinc-300/50 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/50 md:border-zinc-900/50 md:text-zinc-400 md:font-normal font-mono font-bold p-0.5 md:px-3 md:py-0.5 rounded-full text-xs md:text-sm transition-all duration-200 hover:shadow-md hover:scale-105 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.demo && (
                    <button
                      onClick={() => window.open(project.demo, "_blank")}
                      className="flex items-center gap-2 text-lime-400 hover:text-yellow-400 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </button>
                  )}
                  {project.github && (
                    <button
                      onClick={() => window.open(project.github, "_blank")}
                      className="flex items-center gap-2 text-lime-400 hover:text-yellow-400 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      {language === "es" ? "Código" : "Code"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
