import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import EmailModal from "./EmailModal";
const ContactButtons = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const { language } = useLanguage();

  return (
    <div className="flex justify-center gap-6">
      <a
        href="/LautaroHitta_CV.pdf"
        download="LautaroHitta_CV.pdf"
        className="bg-zinc-900/40 hover:bg-zinc-900 p-4 rounded-3xl transition-colors duration-300 flex flex-row items-center font-normal text-zinc-400"
        aria-label="Descargar CV"
      >
        <Download className="w-6 h-6" />
        <span className="ml-2.5 font-semibold font-mono hidden sm:block">
          {language === "es" ? "Descargar CV" : "Download Resume"}
        </span>
      </a>

      <a
        href="https://github.com/hittaLautaro"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-zinc-900/40 hover:bg-zinc-900 p-4 rounded-full transition-transformation duration-300 hover:scale-105"
        aria-label="Github"
      >
        <Github className="w-6 h-6 text-zinc-400" />
      </a>

      <a
        href="https://www.linkedin.com/in/hittalautaro/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-zinc-900/40 hover:bg-zinc-900 p-4 rounded-full transition-transformation duration-300 hover:scale-105"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-6 h-6 text-zinc-400" />
      </a>

      <button
        onClick={() => setShowEmailModal(true)}
        className="bg-zinc-900/40 hover:bg-zinc-900 p-4 rounded-full transition-transform duration-300 hover:scale-105"
        aria-label="Email"
      >
        <Mail className="w-6 h-6 text-zinc-400" />
      </button>

      <EmailModal
        open={showEmailModal}
        onClose={() => setShowEmailModal(false)}
      />
    </div>
  );
};

export default ContactButtons;
