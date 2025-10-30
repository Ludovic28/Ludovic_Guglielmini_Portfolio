import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
  image?: string;
};

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="bg-slate-800/60 border border-white/10 rounded-xl overflow-hidden"
    >
      {p.image && (
        <img src={p.image} alt={p.title} className="h-40 w-full object-cover" />
      )}
      <div className="p-5">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="text-slate-400 text-sm mt-2">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {p.link && (
            <a href={p.link} target="_blank" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
              Live →
            </a>
          )}
          {p.repo && (
            <a href={p.repo} target="_blank" className="text-slate-300 hover:text-white/90 text-sm">
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
