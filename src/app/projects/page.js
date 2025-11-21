import ProjectsList from "../_components/projects/ProjectsList";

export const revalidate = 0;

export async function generateMetadata() {
    const title = "Projects | المشاريع — Gaber Usef | جابر يوسف"
    const description = "A list of projects created by Gaber Usef. قائمة بالمشاريع التى قمت بإنشائها."
    return {
        title,
        description,
        alternates: { canonical: "/projects" },
        openGraph: { type: 'website', url: 'https://gaberuseff.com/projects', title, description, images: [{ url: '/me.jpg', width: 1200, height: 630 }] },
        twitter: { card: 'summary_large_image', title, description, images: ['/me.jpg'] }
    }
}


async function page() {
    return (
        <div className="py-12">
            <h1 className="text-3xl font-bold mb-4">
                All Projects
            </h1>

            <ProjectsList />
        </div>
    )
}

export default page
