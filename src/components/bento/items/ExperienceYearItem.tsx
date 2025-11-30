"use client";

import BentoItem from "../BentoItem";
import FadeIn from "@/components/animations/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceYearsItem() {
  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;
  const { lang } = useLanguage();

  const Exp = {
    es: "AÑOS DE EXPERIENCIA",
    en: "YEARS OF EXPERIENCE",
  };

  return (
    <BentoItem className="bg-[#ffffff] flex items-center justify-center relative overflow-hidden">
      <FadeIn delay={0.1}>
        {/* textura */}
        <div
          className="absolute inset-0 opacity-[0.20] pointer-events-none"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />

        <div className="relative text-center z-10">
          <h2 className="text-[#0a1014] font-bold text-6xl md:text-7xl leading-none">
            +{yearsOfExperience}
          </h2>
          <p className="text-[#0a1014] font-semibold text-sm md:text-base tracking-wide mt-2">
            {Exp[lang]}
          </p>
        </div>
      </FadeIn>
    </BentoItem>
  );
}