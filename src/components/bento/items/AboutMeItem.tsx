"use client"

import BentoItem from "../BentoItem";
import FadeIn from "@/components/animations/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutMeItem() {
  const { lang } = useLanguage();

  const Titulo = {
    es: "Sobre mí",
    en: "About me",
  };
  const Descr = {
    es: "Soy desarrollador de Software con mas de 2 años de experiencia en automatización y aplicaciones empresariales con Microsoft Power Platform. También desarrollo soluciones web completas usando React, Next.js, Node.js y TypeScript.",
    en: "I am a Software Developer with over 2 years of experience in automation and enterprise applications using Microsoft Power Platform. I also build complete web solutions using React, Next.js, Node.js, and TypeScript.",
  };
  return (
    <BentoItem className=" h-80 col-span-1 md:col-span-2 flex flex-col justify-between p-6 md:p-8">
      <FadeIn delay={0.1}>
        <span className="inline-block bg-(--color-font) text-white text-base font-medium px-4 py-1 rounded-full w-fit">
          {Titulo[lang]}
        </span>

        <p className="text-lg md:text-xl text-neutral-700 mt-12 leading-relaxed">
          {Descr[lang]}
        </p>
      </FadeIn>
    </BentoItem>
  );
}