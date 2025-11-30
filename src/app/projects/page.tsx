"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// Traducciones
const texts = {
  es: {
    title: "Portfolio Web",
    subtitle: "Portfolio web utilizando un diseño estilo bento",
    role: "Rol",
    roleValue: "Desarrollador",
    client: "Cliente",
    year: "Año",
    live: "Vista previa",
  },

  en: {
    title: "Web Portfolio",
    subtitle: "Web portfolio using a bento-style layout",
    role: "Role",
    roleValue: "Developer",
    client: "Client",
    year: "Year",
    live: "Live preview",
  },
};

export default function ProjectsPage() {
  const { lang } = useLanguage();
  const t = texts[lang];

  return (
    <div className="min-h-screen w-full bg-[#F2F0E4] py-16 px-4 flex justify-center">
      <div className="max-w-5xl w-full space-y-12">

        {/* Title */}
        <div className="bg-white rounded-3xl p-10 shadow-sm text-center h-80 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-semibold text-gray-800">{t.title}</h1>
          <p className="text-gray-500 mt-2">{t.subtitle}</p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

          {/* Role */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <span className="inline-block bg-(--color-font) text-white text-base font-medium px-4 py-1 rounded-full w-fit">
              {t.role}
            </span>
            <p className="mt-4 text-gray-800 font-medium">{t.roleValue}</p>
          </div>

          {/* Client */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <span className="inline-block bg-(--color-font) text-white text-base font-medium px-4 py-1 rounded-full w-fit">
              {t.client}
            </span>
            <p className="mt-4 text-gray-800 font-medium">Gonzalo de rito</p>
          </div>

          {/* Year */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <span className="inline-block bg-(--color-font) text-white text-base font-medium px-4 py-1 rounded-full w-fit">
              {t.year}
            </span>
            <p className="mt-4 text-gray-800 font-medium">2025</p>
          </div>

          {/* Live Preview */}
          <Link
            href="#"
            target="_blank"
            className="bg-(--color-font) rounded-2xl p-6 shadow-sm flex items-center justify-center hover:bg-(--color-font) transition"
          >
            <span className="font-semibold text-white">{t.live}</span>
          </Link>

        </div>

        {/* Image */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <Image
            src="/images/Portfolio.png"
            width={1200}
            height={800}
            alt="Project Preview"
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </div>
  );
}
