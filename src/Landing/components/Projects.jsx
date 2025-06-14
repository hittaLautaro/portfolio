import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../utils/content.js";

const Projects = ({ id }) => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id={id} className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center border border-zinc-700/50 p-10 rounded-xl">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl text-left font-bold text-zinc-200 ml-2">
            {t.projects.title}
          </h2>
          <h2 className="text-sm md:text-lg text-left font-semibold text-zinc-400 mt-2 ml-2">
            {t.projects.subtitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {t.projects.items.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900/5 rounded-xl p-6 border border-zinc-700/50  transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="bg-neutral-900 rounded-lg mb-4 flex items-center justify-center border border-zinc-900/50 ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full rounded-lg"
                />
              </div>

              <h3 className="text-xl font-bold font-mono  mb-3 group-hover:text-white-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-flex items-center bg-black/90 backdrop-blur-sm border border-zinc-900/50 text-zinc-400 font-normal font-mono px-3 py-1.5 rounded-full text-sm transition-all duration-200  hover:shadow-md hover:scale-105 cursor-default"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
