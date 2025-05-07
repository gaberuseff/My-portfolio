import {motion} from "framer-motion";
import {CONTACT_CONTENT} from "../constants";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterXFill,
  RiWhatsappFill,
} from "@remixicon/react";

const textVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.8, ease: "easeOut"},
  },
};

const iconVariants = {
  hidden: {opacity: 0, scale: 0},
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {duration: 0.5, ease: "easeOut", delay},
  }),
};

function Contacts() {
  return (
    <section id="contact" className="px-6 py-10  flex flex-col justify-center">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Contact
      </h2>
      <div className="h-1 w-20 bg-white mb-8"></div>

      <motion.h3
        className="md:text-6xl lg:text-8xl text-4xl tracking-tight mb-10 uppercase"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}>
        {CONTACT_CONTENT.headline}
      </motion.h3>

      <motion.p
        className="md:text-2xl text-xl mb-10 max-w-3xl"
        variants={textVariants}
        initial="hidden"
        whileInView="visible">
        {CONTACT_CONTENT.description}
      </motion.p>

      <motion.a
        className="md:text-3xl text-xl mb-10 w-fit"
        href={`mailto:${CONTACT_CONTENT.email}`}
        variants={textVariants}
        initial="hidden"
        whileInView="visible">
        {CONTACT_CONTENT.email} ↗
      </motion.a>

      <div className="flex space-x-6 mt-8">
        {CONTACT_CONTENT.socialLinks.map((link, i) => {
          const Icon =
            link.icon === "RiTwitterXFill"
              ? RiTwitterXFill
              : link.icon === "RiGithubFill"
              ? RiGithubFill
              : link.icon === "RiLinkedinFill"
              ? RiLinkedinFill
              : RiWhatsappFill;

          return (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              className="md:text-3xl text-xl mb-10 w-fit"
              variants={textVariants}
              initial="hidden"
              whileInView="visible">
              <Icon size={36} />
            </motion.a>
          );
        })}
      </div>

      <motion.p
        className="md:text-base text-sm mt-8 text-gray-500"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}>
        {CONTACT_CONTENT.footerText}
      </motion.p>
    </section>
  );
}

export default Contacts;
