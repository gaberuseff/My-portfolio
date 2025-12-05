"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import ButtonLink from "../ButtonLink"
import Features from "./Features"
import HeroText from "./HeroText"

function Hero() {
    return (
        <section className="sm:py-16 py-8 px-2 flex flex-col gap-18">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full aspect-square md:h-full md:aspect-auto order-1 md:order-2 overflow-hidden rounded-4xl"
                >
                    <Image
                        src="/me2.webp"
                        alt="Gaber Usef"
                        fill
                        priority
                        className="object-cover"
                        style={{ objectPosition: "50% 30%" }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="max-w-3xl flex flex-col items-start justify-center gap-4 order-2 md:order-1"
                >
                    <HeroText />

                    <ButtonLink href={"/contact"} className="mt-8 btn-primary">
                        Get in Touch
                    </ButtonLink>
                </motion.div>
            </div>

            <Features />
        </section>
    )
}

export default Hero