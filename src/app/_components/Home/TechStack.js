function TechStack() {
    const technologies = [
        "JavaScript (ES6+)",
        "React",
        "Redux Toolkit",
        "Next.js",
        "Tailwind CSS",
        "Styled Components",
        "Git & GitHub",
        "Supabase",
        "+ More Libraries For Features",
    ];

    return (
        <section className="py-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h2>My Tech Stack</h2>
                <p className="p-small">
                    The tools and technologies I use to build modern web experiences.
                </p>
            </div>

            <div className="flex flex-wrap md:justify-center gap-4 mt-10">
                {technologies.map((tech) => (
                    <div
                        key={tech}
                        className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-base sm:text-lg font-medium
                            hover:bg-gray-200 transition-colors cursor-default"
                    >
                        {tech}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechStack;