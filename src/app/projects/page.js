import { Suspense } from "react";
import ProjectsList from "../_components/projects/ProjectsList";
import ProjectsSkeleton from "../_components/Skeletons";

export const revalidate = 0;

export const metadata = {
    title: "Gaber Usef | Projects",
    description: "A list of projects created by Gaber Usef",
};


async function page() {
    return (
        <div className="py-12">
            <h1 className="text-3xl font-bold mb-4">
                All Projects
            </h1>

            <Suspense fallback={<ProjectsSkeleton />}>
                <ProjectsList />
            </Suspense>
        </div>
    )
}

export default page
