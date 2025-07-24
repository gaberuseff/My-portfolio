import ButtonLink from "@/app/_components/ButtonLink";
import { getWorkById, getWorks } from "@/app/_services/data-service";
import { Dot } from "lucide-react";
import Image from "next/image";

import TechStack from "@/app/_components/Works/TechStack";

export async function generateStaticParams() {
    const works = await getWorks();
    return works.map((work) => ({
        projectId: work.id.toString(),
    }));
}

async function page({ params }) {
    const { projectId } = params;
    const project = await getWorkById(projectId);

    if (!project) return <div>Project not found.</div>;

    const { name, description, image, liveLink, repoLink, techStack } = project;
    const descriptionPoints = description.split('-').filter(point => point.trim());

    return (
        <section className="py-12 sm:py-16 flex flex-col gap-4">
            <h2>{name}</h2>

            <div className="relative w-full aspect-video mb-4 overflow-hidden sm:rounded-4xl rounded-2xl">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-fill"
                    placeholder="blur"
                    blurDataURL={image}
                />
            </div>

            <div className="max-w-3xl text-gray-700">
                <ul className="space-y-4">
                    {descriptionPoints.map((point, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <Dot className="text-gray-600 mt-1 h-6 w-6" />
                            <span className="text-gray-600 sm:text-sm text-xs">{point.trim()}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-4 flex gap-2">
                    <ButtonLink
                        href={liveLink}
                        target="_blank"
                        className="btn-secondary"
                        rel="noopener noreferrer"
                    >
                        Live Demo
                    </ButtonLink>

                    {repoLink && (
                        <ButtonLink
                            href={repoLink}
                            target="_blank"
                            className="btn-primary"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </ButtonLink>
                    )}
                </div>

                <TechStack techStack={techStack} />
            </div>
        </section>
    )
}

export default page;