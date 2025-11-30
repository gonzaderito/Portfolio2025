"use client";

import BentoItem from "../BentoItem";
import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsItem() {
const { lang } = useLanguage();

  const proyecto = {
    es: "Proyectos",
    en: "Projects",
  };

   const titulo = {
    es: "Portfolio Web",
    en: "Web Portfolio",
  };


  return (
    <Link href="/projects" className="contents">
      <BentoItem className="relative cursor-pointer hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between overflow-hidden md:col-span-1 row-span-2 h-166 p-6 md:p-8">
        {/* TAG */}
        <FadeIn delay={0.1}>
          <h2 className="inline-block bg-(--color-font) text-white text-base font-medium px-4 py-1 rounded-full w-fit">
            {proyecto[lang]}
          </h2>
        </FadeIn>

        {/* IMAGEN CENTRADA Y ROTADA */}
        <FadeIn delay={0.1}>
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none w-[200%]">
            <Image
              src="/images/Portfolio.png" // tu imagen
              alt="Project showcase"
              width={1200}
              height={1200}
              className="w-[220%] rotate-[15deg] object-cover"
            />
          </div>
        </FadeIn>
        {/* TEXTO ABAJO */}
        <FadeIn>
        <p className="mt-auto text-lg font-medium z-10 relative text-[#0a1014]">
          {titulo[lang]}
        </p>
        </FadeIn>
      </BentoItem>
    </Link>
  );
}
