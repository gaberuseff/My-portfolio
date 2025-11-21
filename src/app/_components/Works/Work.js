"use client"
import Image from "next/image"
import Link from "../Link";
import { motion } from "framer-motion";

function Work({ work }) {
    const { id, name, description, image } = work;

    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <Link href={`/projects/${id}`} className="group relative flex flex-col items-start justify-between py-4 transition-shadow duration-300 ease-in-out md:border-b border-gray-300 overflow-hidden">
            <motion.div
                    className="relative w-full md:aspect-video aspect-3/2 mb-4 sm:rounded-4xl rounded-2xl"
                >
                <Image
                    src={image}
                    alt={name}
                    fill
                    loading="lazy"
                    className="object-fill group-hover:scale-102 transition-transform duration-300 ease-in-out sm:rounded-4xl rounded-2xl"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                />
                </motion.div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-1">
                    <p className="md:text-2xl sm:text-xl text-lg font-semibold">{name}</p>
                    <p className="text-gray-500 sm:text-sm text-xs">{description.split('-').at(0)}.</p>
                </div>
            </Link>
        </motion.div>
    )
}

export default Work
