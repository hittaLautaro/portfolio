import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../utils/content.js";
import {
  FaJava,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiSpringsecurity,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiJsonwebtokens,
  SiPostman,
} from "react-icons/si";

const Skills = ({ id }) => {
  const { language } = useLanguage();
  const t = content[language];

  const back = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Spring Security", icon: <SiSpringsecurity /> },
    { name: "Spring Data JPA", icon: <FaDatabase /> }, // Not the real icon :P
    { name: "JWT", icon: <SiJsonwebtokens /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
  ];

  const front = [
    { name: "React", icon: <SiReact /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
  ];

  const tools = [
    { name: "Docker", icon: <FaDocker /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Postman", icon: <SiPostman /> },
  ];

  return (
    <section id={id} className="py-5 md:py-20 px-6 bg-black mt-3">
      <div className="max-w-6xl mx-auto text-center border border-zinc-700/50 px-5 pt-5 lg:px-8 lg:pt-10 rounded-xl">
        <div className="mb-5 md:mb-10">
          <h2 className="text-3xl md:text-5xl text-left font-bold text-zinc-200 ">
            {t.technologies.title}
          </h2>
          <h2 className="text-sm md:text-lg text-left font-semibold text-zinc-400 mt-2">
            {t.technologies.subtitle}
          </h2>
        </div>

        <section className="px-auto bg-black">
          <div className="max-w-6xl mx-auto text-center">
            {[
              {
                title: "BACKEND",
                skills: back,
                hover: {
                  to: "to-lime-500/10",
                  glow: "bg-lime-400/20",
                  border: "hover:border-lime-400/30",
                  shadow: "hover:shadow-lime-800",
                },
              },
              {
                title: "FRONTEND",
                skills: front,
                hover: {
                  to: "to-sky-500/10",
                  glow: "bg-sky-400/20",
                  border: "hover:border-sky-400/30",
                  shadow: "hover:shadow-sky-800",
                },
              },
              {
                title: language === "en" ? "TOOLS" : "HERRAMIENTAS",
                skills: tools,
                hover: {
                  to: "to-orange-500/10",
                  glow: "bg-orange-400/20",
                  border: "hover:border-orange-400/30",
                  shadow: "hover:shadow-orange-800",
                },
              },
            ].map((section) => (
              <div key={section.title}>
                <div className="text-left mb-3 font-mono font-bold text-sm lg:text-lg text-zinc-300 ml-1">
                  {section.title}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-10 font-mono">
                  {section.skills.map((tech, index) => (
                    <div
                      key={index}
                      className={`group relative flex flex-col items-center justify-center min-h-20 min-w-28 sm:min-h-32 sm:min-w-32 lg:min-h-32 lg:min-w-32 bg-zinc-900/5 backdrop-blur-sm rounded-2xl shadow-sm ${section.hover.shadow} transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-zinc-700/50 ${section.hover.border}`}
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-gray-500/10 ${section.hover.to} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>

                      <div className="relative text-4xl md:text-6xl mb-2 group-hover:scale-110 transition-transform duration-300 filter group-hover:drop-shadow-lg">
                        <div
                          className={`absolute inset-0 ${section.hover.glow} rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        ></div>
                        <span className="relative z-10">{tech.icon}</span>
                      </div>

                      <h3
                        className={`text-nowrap text-xs md:text-sm text-gray-200 md:text-gray-500 group-hover:text-gray-200 transition-colors duration-300 text-center leading-tight`}
                      >
                        {tech.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Skills;
