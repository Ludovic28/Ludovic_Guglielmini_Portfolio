import ProjectCard, { Project } from "../components/ProjectCard";
import { Section, SectionItem, itemVariants } from "../components/Section";

const projects: Project[] = [
  {
    title: "Albedya",
    description: "Un outils d'aide à la conception durable des bâtiments.",
    tech: ["TypeScript", "React", "Three.js"],
    link: "https://www.albedya.fr/",
    video: { type: "file", src: "/video/albedya.mp4", poster: "/img/albedya.png" },
  },
  {
    title: "Cryptique",
    description: "Un jeu d'énigmes en 3D où le joueur doit résoudre des puzzles pour avancer.",
    tech: ["Unity", "C#"],
    video: { type: "file", src: "/video/Cryptique_Trailer.mp4", poster: "/img/Cryptique_Trailer.png" },
  },
  {
    title: "BigSwordRPG",
    description: "Un RPG au tour par tour avec une direction artistique pixelisée.",
    tech: ["C#"],
    repo: "https://github.com/CLipet-Leo/BigSwordRPG",
    video: { type: "file", src: "/video/BigSwordRpg.mp4", poster: "/img/BigSwordRpg.png" },
  },
  {
    title: "Projet BluePrint UE5",
    description: "Un projet de jeu vidéo développé avec Unreal Engine 5.",
    tech: ["Unreal Engine 5", "Blueprints"],
    repo: "https://github.com/LudovicGuglielmini/UnrealBlueprint",
  },
  {
    title: "Encapsulation",
    description: "Un projet démontrant le principe d'encapsulation en C++.",
    tech: ["C++"],
    repo: "https://github.com/LudovicGuglielmini/Encapsulation",
  },
  {
    title: "Projet State machine",
    description: "Un projet de machine à états en C++.",
    tech: ["C++"],
    repo: "https://github.com/LudovicGuglielmini/IntelligenceArtificielle",
    video: { type: "file", src: "/video/ProjetIA.mp4", poster: "/img/StateMachine.png" },
  },
  {
    title: "Projet de physique avancées UE5",
    description: "Un projet Unreal Engine 5 mettant en œuvre des concepts de physique avancée.",
    tech: ["Unreal Engine 5", "C++", "C#"],
    repo: "https://github.com/LudovicGuglielmini/UnrealPhysicsAvanced",
    video: { type: "file", src: "/video/ProjetPhysicAvancee.mp4", poster: "/img/UnrealPhysicsAvanced.png" },
  },
  {
    title: "Steganographie",
    description: "Un projet de steganographie utilisant les bits des pixel d'une image pour y cacher un message.",
    tech: ["C++"],
    repo: "https://github.com/LudovicGuglielmini/Steganographie",
  },
  {
    title: "Sushi Clicker",
    description: "Un jeu de clic où vous préparez des sushis avec un gestion des stocks de riz et de saumon.",
    tech: ["Unity", "C#"],
    repo: "https://github.com/LudovicGuglielmini/SushiClicker",
  },
  {
    title: "Projet UE5 C++",
    description: "Un projet de jeu vidéo en vue TopDown développé avec Unreal Engine 5 en C++.",
    tech: ["Unreal Engine 5", "C++"],
    repo: "https://github.com/LudovicGuglielmini/UnrealCpp",
    video: { type: "file", src: "/video/TopDownCpp.mp4", poster: "/img/UnrealCpp.png" },
  },
  {
    title: "Projet de shader",
    description: "Faire des shaders personnalisés avec Unity Shader Graph.",
    tech: ["Unity", "Shader Graph"],
    repo: "https://github.com/LudovicGuglielmini/UnityShader",
    video: { type: "file", src: "/video/ProjetShader.mp4", poster: "/img/UnityShader.png" },
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
