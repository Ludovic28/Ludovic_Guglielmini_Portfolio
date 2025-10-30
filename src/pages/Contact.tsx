import { Section, SectionItem, itemVariants } from "../components/Section";

export default function Contact() {
  return (
    <Section className="text-center">
      <SectionItem variants={itemVariants}>
        <h1 className="text-4xl font-bold text-indigo-400">Contact</h1>
        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
          Envie de collaborer, de me parler d’un projet ou juste d’échanger&nbsp;?
          Écris-moi, je te réponds rapidement.
        </p>
      </SectionItem>

      <SectionItem variants={itemVariants} className="mt-10">
        <div className="max-w-xl mx-auto bg-slate-800/60 border border-white/10 rounded-2xl p-6 text-left">
          <form
            action="https://formspree.io/f/your-id" /* remplace par ton ID Formspree ou gère côté backend */
            method="POST"
          >
            <label className="block text-sm text-slate-300 mb-1">Nom</label>
            <input name="name" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2 outline-none focus:border-indigo-500" />

            <label className="block text-sm text-slate-300 mt-4 mb-1">Email</label>
            <input type="email" name="email" required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2 outline-none focus:border-indigo-500" />

            <label className="block text-sm text-slate-300 mt-4 mb-1">Message</label>
            <textarea name="message" rows={5} required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2 outline-none focus:border-indigo-500" />

            <button className="mt-5 w-full rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 transition">
              Envoyer
            </button>
          </form>

          <div className="mt-6 text-center text-slate-400 text-sm">
            Ou écris-moi directement :{" "}
            <a className="text-indigo-400 hover:text-indigo-300" href="mailto:your.email@example.com">
              your.email@example.com
            </a>
          </div>
        </div>
      </SectionItem>
    </Section>
  );
}
