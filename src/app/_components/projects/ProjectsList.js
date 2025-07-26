import { unstable_noStore as noStore } from "next/cache";
import { getWorks } from "@/app/_services/data-service";
import Work from "../Works/Work";

async function ProjectsList() {
    noStore();
    const works = await getWorks();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {works.map((work) => (
                <Work key={work.id} work={work} />
            ))}
        </div>
    )
}

export default ProjectsList
