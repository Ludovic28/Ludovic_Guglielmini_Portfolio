export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-900/70 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Logo / nom */}
        <a href="#" className="text-slate-200 font-semibold tracking-wide">
          Ludovic<span className="text-indigo-400">.dev</span>
        </a>

        {/* Actions à droite */}
        <div className="flex items-center gap-3">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 text-sm font-medium transition"
          >
            Download CV
          </a>
          <a
            href="#projects"
            className="inline-flex items-center rounded-lg border border-white/10 hover:border-white/20 text-slate-200 hover:text-white px-4 py-2 text-sm font-medium transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg border border-white/10 hover:border-white/20 text-slate-200 hover:text-white px-4 py-2 text-sm font-medium transition"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
