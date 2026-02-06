"use client"
import Image from "next/image";
import Link from "../Link";

function Work({ work }) {
    const { id, name, description, image } = work;

    return (
        <Link href={`/projects/${id}`} className="group relative flex flex-col 
            items-start justify-start gap-4 py-4">
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl 
                border border-gray-300 transition-all duration-500 ease-in-out">
                <Image
                    src={image}
                    alt={name}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 ease-in-out 
                        group-hover:scale-105"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                />
            </div>

            <div className="flex flex-col w-full gap-2">
                <div className="flex items-center justify-between w-full">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-black transition-colors">
                        {name}
                    </h3>
                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full border border-gray-200">
                        View Project
                    </span>
                </div>
                <p className="text-gray-600 text-sm md:text-base line-clamp-2 leading-relaxed">
                    {description}
                </p>
            </div>
        </Link>
    )
}

export default Work
