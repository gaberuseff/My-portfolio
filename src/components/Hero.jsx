import {motion} from "framer-motion";
import {HERO_CONTENT} from "../constants";
import myPhoto2 from "../assets/my-photo-2.jpg";
import {clipPath} from "framer-motion/client";

const textVariants = {
  hidden: {opacity: 0, y: 50},
  visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease: "easeOut"}},
};

const containerVariants = {
  hidden: {opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: {clipPath: "inset(0 50% 0  50%)"},
  visible: {
    clipPath: "inset(0 0 0  0)",
    transition: {duration: 1.2, ease: "easeInOut"},
  },
};

function Hero() {
  return (
    <section>
      <div
        className="relative z-10 min-h-screen flex flex-wrap flex-col
        md:flex-row items-center justify-center text-white">
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}>
          <motion.h1
            className="text-2xl md:text-3xl lg:text-5xl my-14"
            variants={textVariants}>
            {HERO_CONTENT.greeting}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-3xl leading-[1.5]
            mb-4"
            variants={textVariants}>
            {HERO_CONTENT.introduction}
          </motion.p>
          <motion.p
            className="text-lg md:text-xl lg:text-3xl
            mb-4"
            variants={textVariants}>
            {HERO_CONTENT.description}
          </motion.p>

          <motion.a
            className="bg-stone-50 text-stone-900 p-3 bg:p-4
            mt-8 inline-block rounded-2xl"
            href={HERO_CONTENT.resumeLink}
            target="_blank"
            variants={textVariants}>
            {HERO_CONTENT.resumeLinkText}
          </motion.a>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={imageVariants}>
          <img
            src={myPhoto2}
            alt="Gaber Usef"
            width={500}
            height={500}
            className="rounded-3xl justify-self-end"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
