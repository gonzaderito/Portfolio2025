"use client";

import Image from "next/image";
import BentoItem from "../BentoItem";
import FadeIn from "@/components/animations/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

export default function ProfilePictureItem() {
  const { lang } = useLanguage();

  const Work = {
    es: "DISPONIBLE PARA TRABAJAR • DISPONIBLE PARA TRABAJAR • DISPONIBLE PARA TRABAJAR",
    en: "AVAILABLE FOR WORK • AVAILABLE FOR WORK • AVAILABLE FOR WORK •",
  }

  return (
    <BentoItem className="md:col-span-1 h-80 flex items-center justify-center p-0 min-h-[250px] sm:min-h-[300px]">
      <FadeIn delay={0.15}>
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center">
          {/* Imagen */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl z-10 bg-[#cfc7b4]">
            <Image
              src="/images/fotoPerfil.png"
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </div>

          {/* Texto circular girando */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              className="w-full h-full min-w-[220px] min-h-[220px] animate-spin-slow text-gray-600"
              viewBox="0 0 300 300"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M150 150 m -120 0 a 120 120 0 1 1 240 0 a 120 120 0 1 1 -240 0"
                />
              </defs>

              <text
                fill="currentColor"
                className="text-[3vw] sm:text-[14px] md:text-[14px]"
                letterSpacing="6"
              >
                <textPath href="#circlePath">
                  {Work[lang]}
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </FadeIn>
    </BentoItem>
  );
}
