import { motion } from "framer-motion";
import { Section, SectionItem, itemVariants } from "../components/Section";
import { Linkedin } from "lucide-react"; // si tu utilises lucide-react

export default function Contact() {
  return (
    <Section className="text-center">
      <SectionItem variants={itemVariants}>
        <h1 className="text-4xl font-bold text-indigo-400">Contact</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-400">
          Envie de collaborer&nbsp;?
          Écrivez-moi, je vous répondrai rapidement.
        </p>
      </SectionItem>

      {/* --- Bouton LinkedIn --- */}
      <SectionItem variants={itemVariants} className="mt-8">
        <a
          href="https://www.linkedin.com/in/ludovic-guglielmini-6283ab258/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900/60 px-5 py-2 text-slate-200 hover:bg-indigo-500/10 hover:text-indigo-400 transition"
        >
          <Linkedin className="h-5 w-5" />
          Mon profil LinkedIn
        </a>
      </SectionItem>

      {/* --- Formulaire --- */}
      <SectionItem variants={itemVariants} className="mt-10">
        <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-slate-800/60 p-6 text-left">
          <form
            action="https://formspree.io/f/xrboyjpo"
            method="POST"
          >
            <label className="mb-1 block text-sm text-slate-300">Nom</label>
            <input
              name="name"
              required
              className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 outline-none focus:border-indigo-500"
            />

            <label className="mb-1 mt-4 block text-sm text-slate-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 outline-none focus:border-indigo-500"
            />

            <label className="mb-1 mt-4 block text-sm text-slate-300">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 outline-none focus:border-indigo-500"
            />

            <button className="mt-5 w-full rounded-lg bg-indigo-500 py-2 font-medium text-white transition hover:bg-indigo-600">
              Envoyer
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-400">
            Ou écrivez-moi directement :{" "}
            <a
              className="text-indigo-400 hover:text-indigo-300"
              href="mailto:ludovic.guglielmini24@gmail.com"
            >
              ludovic.guglielmini24@gmail.com
            </a>
          </div>
        </div>
      </SectionItem>
    </Section>
  );
}
