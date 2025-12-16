"use client";

import { MdArrowOutward } from "react-icons/md";
import BentoItem from "../BentoItem";
import FadeIn from "@/components/animations/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

 const texts = {
  es: {
    tag: "Experiencia",
    cvButton: "Ver Resumen",
    experience: [
      {
        role: "Desarrollador de software",
        company: "Circo Studio",
        period: "2023 – Present",
        description:
          "Desarrollo de aplicaciones utilizando tecnologías de la Power Platform y soluciones web. Formación de nuevos integrantes en proyectos, facilitando su integración.",
      },
      {
        role: "Diseño Gráfico",
        company: "TB contenido digital",
        period: "2022 – 2023",
        description:
          "Creador y diseñador de contenido, planificación y ejecución de campañas publicitarias.",
      },
    ],
  },

  en: {
    tag: "Experience",
    cvButton: "View Resume",
    experience: [
      {
        role: "Software Developer",
        company: "Circo Studio",
        period: "2023 – Present",
        description:
          "Development of applications using Power Platform technologies and web solutions. Training new team members and helping integration.",
      },
      {
        role: "Graphic Design",
        company: "TB Digital Content",
        period: "2022 – 2023",
        description:
          "Content creation and design. Planning and executing advertising campaigns.",
      },
    ],
  },
};

export default function ExperienceItem() {
  const { lang } = useLanguage();

  const t = texts[lang]; // ← Selecciona EN o ES automáticamente

  return (
    <BentoItem className="md:col-span-2 row-span-2 h-166 p-6 rounded-2xl bg-white  flex flex-col">
      {/* Tag superior */}
      <FadeIn>
        <span className="text-base bg-(--color-font) text-white px-4 py-2 rounded-full w-fit font-medium">
          {t.tag}
        </span>
      </FadeIn>

      {/* Lista */}
      <div className="flex flex-col mt-12 space-y-5 flex-grow ">
        {t.experience.map((job, i) => (
          <FadeIn key={i} delay={0.05 * i}>
            <div className="flex justify-between py-6">
              <div>
                <h4 className="text-lg font-semibold text-neutral-900">
                  {job.role}
                </h4>

                <p className="text-neutral-500  text-sm">
                  {job.company}
                </p>

                <br />

                <p className="text-neutral-500  text-sm">
                  {job.description}
                </p>
              </div>

              <span className="text-neutral-500  text-sm whitespace-nowrap">
                {job.period}
              </span>
            </div>

            {i !== t.experience.length - 1 && (
              <div className="h-px bg-neutral-200" />
            )}
          </FadeIn>
        ))}
      </div>

      {/* Botón abajo */}
      <FadeIn delay={0.3}>
        <div className="mt-auto pt-4 flex">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 border text-black border-neutral-300 dark:border-neutral-700 px-4 py-2 rounded-full text-base font-medium hover:bg-neutral-100 transition"
          >
            {t.cvButton} <MdArrowOutward size={16} />
          </a>
        </div>
      </FadeIn>
    </BentoItem>
  );
}