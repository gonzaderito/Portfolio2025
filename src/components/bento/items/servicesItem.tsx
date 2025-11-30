"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BentoItem from "../BentoItem";
import { useLanguage } from "@/context/LanguageContext";
import FadeIn from "@/components/animations/FadeIn";


const servicesTexts = {
  es: {
    tag: "Servicios",
    services: [
      {
        title: "Diseño web",
        desc: "Diseño de páginas web utilizando WordPress como CMS y temas personalizados.",
      },
      {
        title: "Soluciones empresariales low-code",
        desc: "Tecnologías Microsoft: creación de aplicaciones empresariales con Power Apps, Power Automate y Power BI.",
      },
    ],
  },

  en: {
    tag: "Services",
    services: [
      {
        title: "Web Design",
        desc: "Website design using WordPress as a CMS and custom themes.",
      },
      {
        title: "Low-code Business Solutions",
        desc: "Microsoft technologies: creating business apps with Power Apps, Power Automate, and Power BI.",
      },
    ],
  },
};

export default function ServicesItem() {
const { lang } = useLanguage();
  const t = servicesTexts[lang];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % t.services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [t.services.length]);

  return (
    <BentoItem className="md:col-span-1 h-80 flex flex-col justify-between p-6 md:p-8">
      {/* Badge */}
      <FadeIn>
      <span className="inline-block bg-(--color-font) text-white text-base font-medium px-4 py-1 rounded-full w-fit">
        {t.tag}
      </span>
      </FadeIn>

      <div className="relative overflow-hidden h-28 mb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute"
          >
            <FadeIn>
            <h2 className="text-xl font-semibold mb-2 text-black">
              {t.services[index].title}
            </h2>

            <p className="text-gray-600 max-w-sm leading-relaxed">
              {t.services[index].desc}
            </p>
            </FadeIn>
            

          </motion.div>
        </AnimatePresence>
      </div>
    </BentoItem>
  );
}