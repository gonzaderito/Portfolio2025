"use client";
import BentoGrid from "@/components/bento/BentoGrid";
import BentoItem from "@/components/bento/BentoItem";
import AboutMeItem from "@/components/bento/items/AboutMeItem";
import EmailItem from "@/components/bento/items/EmailItem";
import ExperienceItem from "@/components/bento/items/ExperienceItem";
import ExperienceYearsItem from "@/components/bento/items/ExperienceYearItem";
import LinkedInItem from "@/components/bento/items/LinkedinItem";
import ProfilePictureItem from "@/components/bento/items/ProfilePictureItem";
import ProjectsItem from "@/components/bento/items/ProjectsItem";
import ServicesItem from "@/components/bento/items/servicesItem";
import TechnologiesItem from "@/components/bento/items/Technologies";
import YearsItem from "@/components/bento/items/YearsItem";


export default function Page() {
return (
<main className="min-h-screen w-full p-6 bg-[#F2F0E4] text-white">
    <div className="flex items-center justify-center min-h-40  text-black">
    <h1 className="text-2xl">Gonzalo De Rito</h1>
    </div>
<BentoGrid>
<AboutMeItem></AboutMeItem>
<ProfilePictureItem></ProfilePictureItem>
<ProjectsItem></ProjectsItem>
<LinkedInItem></LinkedInItem>
<ExperienceItem></ExperienceItem>
<ServicesItem></ServicesItem>
<EmailItem></EmailItem>
<TechnologiesItem></TechnologiesItem>
<ExperienceYearsItem></ExperienceYearsItem>
<YearsItem></YearsItem>
</BentoGrid>
</main>
);
}