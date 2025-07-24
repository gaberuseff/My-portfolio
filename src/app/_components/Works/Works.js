import { getSomeWorks } from "@/app/_services/data-service"
import Work from "../Works/Work"
import Link from "../Link"
import ButtonLink from "../ButtonLink"

async function Works() {
    const works = await getSomeWorks()

    return (
        <section className="py-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h2>Works</h2>

                <p className="text-gray-600 text-sm">
                    Explore my recent web project creations and discover how we can transform your vision into reality.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {
                    works?.map((work) => (
                        <Work key={work.id} work={work} />
                    ))
                }
            </div>


            <div className="sm:mt-6 mt-3 flex justify-center">
                <ButtonLink href="/projects" className="btn-primary">View All</ButtonLink>
            </div>
        </section>
    )
}

export default Works
