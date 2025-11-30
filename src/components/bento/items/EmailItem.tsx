"use client";

import BentoItem from "../BentoItem";
import FadeIn from "@/components/animations/FadeIn";
import { FiMail } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi"; 

export default function EmailItem() {
  return (
    <BentoItem className="md:col-span-1 h-80 p-0 overflow-hidden bg-[#9c8cff] 
                 rounded-2xl relative flex items-center justify-center"
      // que abra el correo
      onClick={() => (window.location.href = "mailto:gonzaa.derito@gmail.com")}
    >
      <FadeIn delay={0.15}>
        {/* Textura grain */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />

        {/* Icono de external link arriba a la derecha */}
        <FiExternalLink className="absolute top-3 right-3 text-white opacity-90 w-5 h-5" />

        {/* Icono principal */}
        <div className="w-full h-full flex items-center justify-center">
          <FiMail className="text-white w-20 h-20 sm:w-24 sm:h-24 opacity-95" />
        </div>
      </FadeIn>
    </BentoItem>
  );
}