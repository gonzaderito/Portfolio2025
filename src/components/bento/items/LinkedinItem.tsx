"use client";

import BentoItem from "../BentoItem";
import FadeIn from "@/components/animations/FadeIn";
import { FaLinkedinIn } from "react-icons/fa";

export default function LinkedInItem() {
  return (
    <BentoItem
      className="md:col-span-1 h-80 p-0 overflow-hidden bg-[#6da6fc] 
                 rounded-2xl relative flex items-center justify-center"
    >
      <FadeIn delay={0.1}>
        {/* Textura grain aplicada al BentoItem */}
        <div
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />

        {/* Icono de external link arriba a la derecha */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-3 right-3 w-5 h-5 text-white/90"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 3h7m0 0v7m0-7L10 14m-4 7h7a2 2 0 002-2v-7"
          />
        </svg>

        {/* Icono LI centrado */}
        <FaLinkedinIn className="relative w-24 h-24 text-white z-10" />

        {/* Link invisible que cubre TODO el BentoItem */}
        <a
          href="https://www.linkedin.com/in/gonzalo-de-rito-a833a3177/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20"
        />
      </FadeIn>
    </BentoItem>
  );
}