"use client"
import { motion } from "framer-motion"

function WhyMe() {
    return (
        <section className="py-8 grid grid-cols-1 md:grid-cols-2 sm:gap-8 gap-4">
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-6xl font-bold"
            >
                Why Gaber?
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="flex flex-col gap-4 text-lg text-gray-700"
            >
                <p className="md:text-3xl sm:text-2xl text-xl">
                    I combine a passion for design with my ability to bring it to life through code.
                </p>
                <p className="text-gray-500 md:text-xl sm:text-lg text-base">
                    I work diligently to deliver creative and practical solutions,
                    and I adhere to high-quality standards in every project I undertake.
                </p>
                <p className="text-gray-500 md:text-xl sm:text-lg text-base">
                    If you are looking for a front-end developer who can add a touch of
                    creativity and professionalism to your project, don&apos;t hesitate to get in touch!
                </p>
            </motion.div>
        </section>
    )
}

export default WhyMe