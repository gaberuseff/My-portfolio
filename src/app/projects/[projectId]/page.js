import BulletIcon from "@/app/_components/BulletIcon";
import ButtonLink from "@/app/_components/ButtonLink";
import TechStack from "@/app/_components/Works/TechStack";
import { getWorkById, getWorks } from "@/app/_services/data-service";
import Image from "next/image";

export async function generateStaticParams() {
    const works = await getWorks();
    return works.map((work) => ({
        projectId: work.id.toString(),
    }));
}

export async function generateMetadata({ params }) {
    const { projectId } = await params;
    try {
        const project = await getWorkById(projectId);
        const title = `${project?.name || 'Project'} — Gaber Usef | جابر يوسف`;
        const description = project?.description?.split('-')?.[0] || 'Project details and tech stack.';
        const url = `https://gaberuseff.com/projects/${projectId}`;
        return {
            title,
            description,
            alternates: { canonical: `/projects/${projectId}` },
            openGraph: {
                type: 'article',
                url,
                title,
                description,
                images: [{ url: project?.image || '/me.jpg', width: 1200, height: 630 }]
            },
            twitter: { card: 'summary_large_image', title, description, images: [project?.image || '/me.jpg'] }
        };
    } catch {
        return { title: 'Project — Gaber Usef | جابر يوسف', alternates: { canonical: `/projects/${projectId}` } };
    }
}

async function Page({ params }) {
    const { projectId } = await params;
    const project = await getWorkById(projectId);

    if (!project) return <div className="text-center text-2xl text-red-600">Project not found</div>;

    const {
        name = "",
        description = "",
        image,
        liveLink,
        repoLink,
        techStack = [],
    } = project;

    const descriptionPoints =
        typeof description === "string"
            ? description
                .split("-")
                .map((point) => point.trim())
                .filter(Boolean)
            : [];

    return (
        <section className="py-12 sm:py-16" aria-labelledby="project-title">
            <div className="flex flex-col gap-2 mb-6">
                <h2 id="project-title" className="mb-1">{name}</h2>
                {descriptionPoints[0] && (
                    <p className="p-small text-gray-600">{descriptionPoints[0]}</p>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7">
                    <div className="relative w-full aspect-video overflow-hidden 
                        sm:rounded-4xl rounded-2xl ring-1 ring-gray-300/60">
                        <Image
                            src={image}
                            alt={name || "Project image"}
                            fill
                            sizes="100vw"
                            className="object-cover"
                            placeholder="blur"
                            blurDataURL={image}
                        />
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <div className="bg-gray-100/70 sm:rounded-4xl rounded-2xl p-6 ring-1 ring-gray-300/60">
                        <ul className="space-y-4">
                            {descriptionPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <BulletIcon variant="dot" />
                                    <span className="text-gray-700 sm:text-base text-sm leading-relaxed">{point.trim()}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <ButtonLink
                                href={liveLink}
                                target="_blank"
                                className="btn-secondary"
                                rel="noopener noreferrer"
                                aria-label={`Open ${name} live demo (opens in a new tab)`}
                            >
                                Live Demo
                            </ButtonLink>

                            {repoLink && (
                                <ButtonLink
                                    href={repoLink}
                                    target="_blank"
                                    className="btn-primary"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${name} on GitHub (opens in a new tab)`}
                                >
                                    View on GitHub
                                </ButtonLink>
                            )}
                        </div>
                    </div>

                    <div className="mt-8">
                        <TechStack techStack={techStack ?? []} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page;