"use client"
import Image from "next/image"
import { motion } from "framer-motion"

function WhyMe() {
    return (
        <section className="py-12 grid md:grid-cols-2 grid-cols-1 items-center gap-8">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col"
            >
                <h2>Why Me?</h2>

                <p className="text-gray-600 text-sm  max-w-[500px]">
                    I combine a passion for design with my ability to bring it to life through code. I work diligently to deliver creative and practical solutions, and I adhere to high-quality standards in every project I undertake. If you are looking for a front-end developer who can add a touch of creativity and professionalism to your project, don&apos;t hesitate to get in touch!
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full min-h-[300px] overflow-hidden rounded-lg border border-gray-300"
            >
                <Image src="/whyme.png" loading="lazy" alt="Gaber Usef" fill className="object-contain rounded-2xl sm:py-3" />
            </motion.div>
        </section>
    )
}

export default WhyMe
