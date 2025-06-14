import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../utils/content.js";
import emailRender from "../../assets/email-render.png";
import { Mail, Github, Linkedin, X } from "lucide-react";
const ContactButtons = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();
  const t = content[language];

  const email = "lautarohitta.contacto@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setShowEmailModal(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center gap-6">
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
        className="bg-zinc-900/40 hover:bg-zinc-900 p-4 rounded-full transition-transformation duration-300 hover:scale-105"
        aria-label="Email"
      >
        <Mail className="w-6 h-6 text-zinc-400" />
      </button>

      {showEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-black border border-zinc-800 rounded-xl p-10 w-full max-w-2xl mx-4 relative text-center shadow-lg">
            <button
              onClick={() => setShowEmailModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition"
              aria-label="Close modal"
            >
              <X size={28} />
            </button>

            <h3 className="text-2xl font-semibold mb-6 text-white">
              Contact Email
            </h3>

            <img
              src={emailRender}
              alt="Email"
              className="mx-auto mb-6 pointer-events-none select-none"
              draggable={false}
              style={{ height: "110px", maxWidth: "100%" }}
            />

            <button
              onClick={handleCopyEmail}
              className="bg-lime-500 hover:bg-lime-600 text-black px-8 py-3 rounded-lg text-lg font-semibold transition"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactButtons;
