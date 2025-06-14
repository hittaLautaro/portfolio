import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../utils/content.js";

const Education = ({ id }) => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id={id} className="py-20 px-6 ">
      <div className="max-w-6xl mx-auto border border-zinc-700/50 p-10 rounded-xl">
        <div className="mb-10">
          <h3 className="text-4xl md:text-5xl text-left font-bold text-white ml-2">
            {t.education.title}
          </h3>
        </div>

        <div className="space-y-8">
          {t.education.items.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900/5 rounded-xl p-6 border border-zinc-700/50 transition-colors duration-300 "
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-300">
                  {item.school} - {item.degree}
                </h3>
                <span className="text-neutral-400 font-semibold">
                  {item.year}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-gray-300 mb-2"></h4>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
