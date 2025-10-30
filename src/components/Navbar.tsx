import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition ${
      isActive
        ? "bg-indigo-500 text-white"
        : "text-slate-200 hover:text-white hover:bg-white/10"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-900/70 backdrop-blur">
      <nav className="mx-auto max-w-6xl h-16 flex items-center justify-between px-6">
        <Link to="/" className="text-slate-200 font-semibold tracking-wide">
          Ludovic<span className="text-indigo-400">.dev</span>
        </Link>

        <div className="flex items-center gap-2">
          <NavLink to="/" className={linkClasses}>
            Accueil
          </NavLink>
          <NavLink to="/projects" className={linkClasses}>
            Projets
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact
          </NavLink>
          <a
            href="/CV_Ludovic_Guglielmini.pdf"
            download
            className="ml-2 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition"
          >
            Télécharger le CV
          </a>
        </div>
      </nav>
    </header>
  );
}
