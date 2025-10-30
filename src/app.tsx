import Navbar from "./components/Navbar";
import HomePage from "./pages/Home/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Navbar />
      <HomePage />

      {/* Sections cibles pour la nav */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <h3 className="text-2xl font-bold mb-4">Projects</h3>
        <p className="text-slate-400">Coming soon…</p>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <h3 className="text-2xl font-bold mb-4">Contact</h3>
        <p className="text-slate-400">Email: you@example.com</p>
      </section>
    </div>
  );
}
