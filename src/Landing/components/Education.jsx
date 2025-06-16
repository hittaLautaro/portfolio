import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../utils/content.js";

const Education = ({ id }) => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id={id} className="py-5 md:py-20 px-6">
      <div className="max-w-6xl mx-auto text-left border border-zinc-700/50 px-5 pt-5 lg:px-8 lg:pt-10 rounded-xl">
        <div className="mb-5 md:mb-10">
          <h3 className="text-3xl md:text-5xl  font-bold text-zinc-300">
            {t.education.title}
          </h3>
        </div>

        <div className="space-y-8">
          {t.education.items.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900/5 rounded-xl p-6 border border-zinc-700/50 transition-colors duration-300 mb-5 md:mb-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-sm md:text-xl font-bold text-gray-300">
                  {item.school} - {item.degree}
                </h3>
                <span className="text-xs md:text-lg text-neutral-400 font-semibold">
                  {item.year}
                </span>
              </div>
              <p className="text-xs md:text-lg text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
