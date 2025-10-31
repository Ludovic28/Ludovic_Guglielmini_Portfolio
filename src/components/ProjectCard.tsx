import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

// On définit d'abord les types de vidéos
type YouTubeVideo = {
  type: "youtube";
  src: string;
};
type FileVideo = {
  type: "file";
  src: string;
  poster?: string;
};

// Union discriminée (soit l’un, soit l’autre)
type Video = YouTubeVideo | FileVideo;

// Type de projet
export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
  image?: string;
  video?: Video; // ← optionnel
};

export default function ProjectCard({
  p,
}: {
  p: Project;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article className="overflow-hidden rounded-xl border border-white/10 bg-slate-800/60">
      {p.image && (
        <img
          src={p.image}
          alt={p.title}
          className="h-40 w-full object-cover"
        />
      )}

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">
            {p.title}
          </h3>
          {p.video && (
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-sm text-slate-200 transition hover:bg-white/10"
            >
              Voir la vidéo
              <motion.svg
                animate={{
                  rotate: open ? 180 : 0,
                }}
                transition={{ duration: 0.2 }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </button>
          )}
        </div>

        <p className="mt-2 text-sm text-slate-400">
          {p.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              Lien du site →
            </a>
          )}
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              className="text-sm text-slate-300 hover:text-white/90"
            >
              GitHub
            </a>
          )}
        </div>

        {/* Vidéo déroulante */}
        <AnimatePresence initial={false}>
          {open && p.video && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden"
            >
              <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-2">
                <div className="relative w-full overflow-hidden rounded-lg pt-[56.25%]">
                  {/* Si la vidéo est de type YouTube */}
                  {p.video.type === "youtube" && (
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={p.video.src}
                      title={p.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  )}

                  {/* Si la vidéo est un fichier local */}
                  {p.video.type === "file" && (
                    <video
                      className="absolute inset-0 h-full w-full"
                      src={p.video.src}
                      poster={p.video.poster}
                      controls
                      preload="metadata"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
