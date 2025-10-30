import ProjectCard from "../components/ProjectCard";
import { Section, SectionItem, itemVariants } from "../components/Section";

const projects = [
  {
    title: "Portfolio v2",
    description: "Site personnel en React, TypeScript et Tailwind avec animations Framer Motion.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    repo: "https://github.com/ton-github/portfolio",
  },
  {
    title: "API Node REST",
    description: "API Express typée avec Prisma et tests.",
    tech: ["Node", "Express", "TypeScript", "Prisma"],
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard réactif avec charts et authentification.",
    tech: ["React", "Vite", "Auth", "Charts"],
  },
];

export default function Projects() {
  return (
    <Section>
      <SectionItem variants={itemVariants}>
        <h1 className="text-4xl font-bold text-indigo-400">Mes projets</h1>
        <p className="text-slate-400 mt-3 max-w-2xl">
          Une sélection de travaux récents. Chaque projet met l’accent sur la clarté,
          la performance et une expérience soignée.
        </p>
      </SectionItem>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <SectionItem key={p.title} variants={itemVariants}>
            <ProjectCard p={p} />
          </SectionItem>
        ))}
      </div>
    </Section>
  );
}
