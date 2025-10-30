export default function HomePage() {
  return (
    <section className="relative bg-[#0f172a] text-white">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texte */}
        <div>
          <p className="text-slate-400 text-xl">Hello, I’m</p>
          <h1 className="mt-2 text-5xl md:text-6xl font-extrabold leading-tight">
            Ludovic <span className="text-indigo-400">Guglielmini</span>
          </h1>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-300">
            Software Developer 💻
          </h2>

          <p className="mt-6 text-slate-400 max-w-xl leading-relaxed">
            Passionate developer specializing in modern, scalable web apps with a
            focus on clean design and performance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 font-medium transition"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg border border-white/10 hover:border-white/20 text-slate-200 hover:text-white px-6 py-3 font-medium transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Photo – nette, sans flou */}
        <div className="flex justify-center md:justify-end">
          {/* Anneau dégradé */}
          <div className="p-1 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500">
            <img
              src="/img/GUGLIELMINI_Ludovic.jpg"
              alt="Ludovic portrait"
              className="block h-72 w-72 md:h-80 md:w-80 rounded-full object-cover"
              // IMPORTANT: pas de filtre ni backdrop-blur ici
              // Optionnel: pour écrans retina, fournis un srcSet ci-dessous
              // srcSet="/profile@1x.jpg 1x, /profile@2x.jpg 2x"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
