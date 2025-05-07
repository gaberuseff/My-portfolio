import {motion} from "framer-motion";

import {ABOUT_CONTENT} from "../constants";

const textVariants = {
  hidden: {opacity: 0, y: 50},
  visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}},
};

function About() {
  return (
    <section id="about" className="px-6 py-10">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        About
      </h2>
      <div className="h-1 w-20 bg-white mb-8"></div>

      <div className="max-w-4xl mx-auto">
        {ABOUT_CONTENT.paragraphs.map((paragraph, i) => (
          <motion.p
            key={i}
            className="mb-10 text-xl md:text-2xl lg:text-4xl"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{once: true, amount: 0.5}}
            >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

export default About;
