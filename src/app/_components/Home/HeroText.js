"use client"
import { motion } from "framer-motion"

function HeroText() {
    return (
        <div>
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="sm:text-4xl md:text-5xl text-2xl font-serif font-normal mb-2"
            >
                Hey. I&apos;m <span className="font-serif">Gaber</span>,
            </motion.h1>

            <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.12 }
                    }
                }}
                className="leading-tight"
            >
                <motion.span variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }} className="block sm:text-5xl text-4xl md:text-7xl font-black tracking-tight mb-2">A Front-End </motion.span>
                <motion.span variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }} className="block sm:text-5xl text-4xl md:text-7xl italic font-serif mb-2">Web</motion.span>
                <motion.span variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }} className="block sm:text-5xl text-4xl md:text-7xl font-black tracking-tight">Developer</motion.span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="mt-8 text-base md:text-2xl font-serif text-gray-800 max-w-sm"
            >
                I create beautiful and functional web experiences using the latest technologies and best practices.
                Let&apos;s build something amazing together!
            </motion.p>
        </div>
    )
}

export default HeroText
