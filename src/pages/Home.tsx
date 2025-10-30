import { motion } from "framer-motion";
import { container, item, photoWrap } from "../animations/variants";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto py-24 px-6">
      {/* Bloc 1 : présentation principale */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        {/* Texte animé */}
        <motion.div
          className="flex-1"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-5xl font-extrabold leading-tight"
            variants={item}
          >
            Bonjour, je suis{" "}
            <span className="text-indigo-400">Ludovic Guglielmini</span>
          </motion.h1>

          <motion.h2
            className="text-2xl mt-3 text-slate-300"
            variants={item}
          >
            Développeur logiciel & application 💻
          </motion.h2>

          <motion.p
            className="text-slate-400 mt-6 max-w-lg leading-relaxed"
            variants={item}
          >
            Passionné d’informatique depuis mon plus jeune âge, je découvre
            le monde du jeu vidéo à 7 ans — une révélation. Très vite, je
            m’intéresse à ce qui se cache derrière ces univers interactifs :
            la logique, la technique, et la créativité qu’exige le
            développement.
          </motion.p>

          <motion.p
            className="text-slate-400 mt-4 max-w-lg leading-relaxed"
            variants={item}
          >
            Aujourd’hui, je suis un développeur <strong>back-end</strong> et{" "}
            <strong>logiciel</strong> passionné, basé en France. J’aime créer
            des expériences modernes, performantes et accessibles. Ma stack
            principale : <strong>React</strong>, <strong>TypeScript</strong>,{" "}
            <strong>Node.js</strong>, <strong>C / C++ / C#</strong>,{" "}
            <strong>PHP</strong>, ainsi que <strong>Unreal Engine</strong> et{" "}
            <strong>Unity</strong> — avec un fort intérêt pour le{" "}
            <strong>développement 3D</strong>.
          </motion.p>

          <motion.p
            className="text-slate-400 mt-4 max-w-lg leading-relaxed"
            variants={item}
          >
            En dehors du code : veille technologique, apprentissage continu
            et partage. Je crois qu’un bon logiciel doit allier{" "}
            <strong>qualité technique</strong> et <strong>émotion</strong>.
          </motion.p>
        </motion.div>

        {/* Photo animée */}
        <motion.div
          className="flex-1 flex justify-center"
          variants={photoWrap}
          initial="hidden"
          animate="show"
        >
          <div className="p-[3px] rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500">
            <img
              src="/img/GUGLIELMINI_Ludovic.jpg"
              alt="Portrait de Ludovic Guglielmini"
              className="block h-80 w-80 rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Bloc 2 : ton parcours / passion jeux vidéo */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Image secondaire */}
        <motion.div
          className="flex-1 flex justify-center md:justify-start"
          variants={photoWrap}
          initial="hidden"
          animate="show"
        >
          <div className="p-[3px] rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-500">
            <img
              src="/img/setup_img.png"
              alt="Setup de développement"
              className="block rounded-lg object-cover h-64 w-full md:w-96"
            />
          </div>
        </motion.div>

        {/* Texte à droite */}
        <motion.div
          className="flex-1"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h3
            className="text-3xl font-bold text-indigo-400 mb-4"
            variants={item}
          >
            Une passion née du jeu 🎮
          </motion.h3>

          <motion.p
            className="text-slate-400 leading-relaxed mb-4"
            variants={item}
          >
            Depuis l’enfance, le jeu vidéo m’a toujours fasciné — non seulement
            en tant que joueur, mais surtout pour ce qu’il représente : un
            mélange parfait entre technologie, design et narration.
          </motion.p>

          <motion.p
            className="text-slate-400 leading-relaxed"
            variants={item}
          >
            Cette curiosité m’a naturellement conduit vers le{" "}
            <strong>développement logiciel</strong> et la création
            d’expériences interactives. Aujourd’hui, je mets cette passion au
            service de projets concrets, en cherchant toujours à allier
            performance, esthétique et plaisir d’utilisation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
