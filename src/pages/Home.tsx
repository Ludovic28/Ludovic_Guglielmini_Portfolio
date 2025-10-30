import { motion, type Variants } from "framer-motion";
import { container, item, photoWrap } from "../animations/variants";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto py-24">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Texte animé */}
        <motion.div className="flex-1" variants={container} initial="hidden" animate="show">
          <motion.h1 className="text-5xl font-extrabold" variants={item}>
            Bonjour, je suis <span className="text-indigo-400">Ludovic Guglielmini</span>
          </motion.h1>

          <motion.h2 className="text-2xl mt-2 text-slate-300" variants={item}>
            Développeur logiciel 💻
          </motion.h2>

          <motion.p className="text-slate-400 mt-6 max-w-lg leading-relaxed" variants={item}>
            Je suis un développeur full-stack passionné, basé en France. J’aime créer des expériences
            modernes, performantes et accessibles. Ma stack principale&nbsp;: <strong>React</strong>,{" "}
            <strong>TypeScript</strong> et <strong>Node.js</strong>, avec un intérêt marqué pour le{" "}
            <strong>design UI/UX</strong>.
          </motion.p>

          <motion.p className="text-slate-400 mt-4 max-w-lg leading-relaxed" variants={item}>
            En dehors du code&nbsp;: veille techno, apprentissage continu et partage. Je crois qu’un bon
            logiciel doit allier <strong>qualité technique</strong> et <strong>émotion</strong>.
          </motion.p>
        </motion.div>

        {/* Photo animée */}
        <motion.div className="flex-1 flex justify-center" variants={photoWrap} initial="hidden" animate="show">
          <div className="p-[3px] rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500">
            <img
              src="/img/GUGLIELMINI_Ludovic.jpg"
              alt="Portrait de Ludovic Guglielmini"
              className="block h-80 w-80 rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
