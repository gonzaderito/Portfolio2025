"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  const toggleLang = () => {
    setLang(lang === "es" ? "en" : "es");
  };

  return (
    <button
      onClick={toggleLang}
      className="
        fixed bottom-6 right-6 
        bg-black text-white 
        px-4 py-2 
        rounded-full 
        shadow-lg 
        border border-white 
        text-sm font-semibold
        hover:bg-gray-900
        transition-all duration-200
        z-50
      "
    >
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
}