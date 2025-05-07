import {motion} from "framer-motion";

import {SKILLS} from "../constants";

const containerVariants = {
  hidden: {opacity: 0, y: 50},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: {opacity: 0, y: 30},
  visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}},
};

function Skills() {
  return (
    <section id="skills" className="px-6 py-10">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Skills
      </h2>
      <div className="h-1 w-20 bg-white mb-8"></div>

      <motion.div
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.3}}
        variants={containerVariants}>
        {SKILLS.map((skill, i) => (
          <motion.div
            key={i}
            className="flex md:flex-row flex-col justify-around md:items-center items-start gap-2"
            variants={childVariants}>
            <h3 className="text-2xl md:text-4xl font-medium mb-4">
              {skill.title}
            </h3>

            <div className="bg-gray-800/40 px-4 sm:py-6 py-3 rounded-xl">
              <p className="text-lg md:text-xl max-w-3xl">
                {skill.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
