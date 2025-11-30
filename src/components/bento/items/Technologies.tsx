"use client";

import BentoItem from "../BentoItem";
import FadeIn from "@/components/animations/FadeIn";

import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  
} from "react-icons/si";

import Icon from "@mdi/react";
import { mdiMicrosoftDynamics365 } from "@mdi/js";

export default function TechnologiesItem() {
  // Íconos que vienen de react-icons (estos SI son componentes)
  const technologies = [
    FaHtml5,
    FaCss3Alt,
    SiJavascript,
    FaReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    FaJava,
    FaGitAlt,
  ];

  return (
    <BentoItem className="md:col-span-2 h-80 bg-[#e9a673] relative p-6 overflow-hidden">
      <FadeIn delay={0.15}>
        {/* Textura grain */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />

        {/* Grilla de tecnologías */}
        <div className="grid grid-cols-4 place-content-center place-items-center gap-3 md:gap-6 p-4 md:p-8">
          {/* Render react-icons */}
          {technologies.map((TechIcon, i) => (
            <TechIcon
              key={i}
              className="w-10 h-10 sm:w-12 sm:h-12 text-white opacity-90"
            />
          ))}

          {/* Render del icono MDI */}
          <Icon
            path={mdiMicrosoftDynamics365}
            size={2}
            className="text-white opacity-90"
          />
        </div>
      </FadeIn>
    </BentoItem>
  );
}