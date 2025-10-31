import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClasses = ({
    isActive,
  }: {
    isActive: boolean;
  }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition ${
      isActive
        ? "bg-indigo-500 text-white"
        : "text-slate-200 hover:text-white hover:bg-white/10"
    }`;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-slate-900/70 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-semibold tracking-wide text-slate-200"
        >
          Ludovic
          <span className="text-indigo-400">
            .dev
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <NavLink to="/" className={linkClasses}>
            Accueil
          </NavLink>
          <NavLink
            to="/projects"
            className={linkClasses}
          >
            Projets
          </NavLink>
          <NavLink
            to="/contact"
            className={linkClasses}
          >
            Contact
          </NavLink>
          <a
            href="/CV_Ludovic_Guglielmini.pdf"
            download
            className="ml-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-600"
          >
            Télécharger le CV
          </a>
        </div>
      </nav>
    </header>
  );
}
