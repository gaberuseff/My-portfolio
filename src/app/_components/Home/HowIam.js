"use client"
import AboutText from "./AboutText";
import { motion } from "framer-motion";

function HowIam() {
    return (
        <section className="py-8 grid grid-cols-1 md:grid-cols-2 sm:gap-8 gap-4">
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-6xl font-bold"
            >
                Who I am?
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
                <AboutText />
            </motion.div>
        </section>
    )
}

export default HowIam;
