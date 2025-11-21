"use client"
import Image from "next/image"
import Link from "../Link";

function Work({ work }) {
    const { id, name, description, image } = work;

    return (
        <Link href={`/projects/${id}`} className="relative flex flex-col 
            items-start justify-between py-4 overflow-hidden">
            <div className="relative w-full md:aspect-video aspect-3/2 mb-4">
                <Image
                    src={image}
                    alt={name}
                    fill
                    loading="lazy"
                    className="object-cover sm:rounded-4xl rounded-2xl"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-1">
                <p className="md:text-2xl sm:text-xl text-lg font-semibold">{name}</p>
                <p className="text-gray-500 sm:text-sm text-xs">{description.split('-').at(0)}.</p>
            </div>
        </Link>
    )
}

export default Work
