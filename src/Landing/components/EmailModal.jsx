import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import emailRender from "../../assets/email-render.png";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../utils/content.js";

const EmailModal = ({ open, onClose }) => {
  const { language } = useLanguage();
  const t = content[language];
  const email = "lautarohitta.contacto@gmail.com";

  const [copied, setCopied] = useState(false);

  const handleClose = () => {
    setCopied(false);
    onClose();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-black backdrop-blur-md border border-zinc-700/50 rounded-2xl p-0 w-full max-w-md mx-4 overflow-hidden shadow-2xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]">
        <div className="relative bg-black px-6 py-4 border-b border-zinc-700/50 items-center">
          <DialogTitle className="text-xl font-bold text-zinc-100 font-mono pr-12">
            {t.misc.contact_modal.title}
          </DialogTitle>

          <button
            onClick={handleClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-700/70 text-zinc-400 hover:text-zinc-200 transition-all duration-200 hover:scale-110 group"
            aria-label="Close modal"
          >
            <X
              size={20}
              className="group-hover:rotate-90 transition-transform duration-200"
            />
          </button>
        </div>

        <div className="px-6 py-8 text-center bg-black">
          <div className="relative mb-8 flex justify-center">
            <div className="absolute inset-0 bg-black blur-2xl rounded-full opacity-50"></div>
            <img
              src={emailRender}
              alt="Email"
              className="relative z-10 pointer-events-none select-none drop-shadow-2xl object-contain"
              draggable={false}
              style={{ height: "90px", maxWidth: "100%" }}
            />
          </div>

          <button
            onClick={handleCopyEmail}
            className={`w-full py-3 rounded-xl font-bold text-lg font-mono transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
              copied ? "bg-lime-300" : "bg-lime-500"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              {copied ? (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {t.misc.contact_modal.copied}
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  {t.misc.contact_modal.copy}
                </>
              )}
            </span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailModal;
