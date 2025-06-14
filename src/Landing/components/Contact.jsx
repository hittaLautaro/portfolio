import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../utils/content.js";
import emailRender from "../../assets/email-render.png";
import { Mail, Github, Linkedin, X } from "lucide-react";
import ContactButtons from "./ContactButtons.jsx";

const Contact = ({ id }) => {
  const { language } = useLanguage();
  const t = content[language];

  const [showEmailModal, setShowEmailModal] = useState(false);
  const [copied, setCopied] = useState(false);

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
    <section id={id} className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-200 bg-clip-text text-transparent">
          {t.contact.title}
        </h2>
        <p className="text-xl text-gray-300 mb-12">{t.contact.subtitle}</p>

        <ContactButtons />
      </div>

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
    </section>
  );
};

export default Contact;
