function TechStack({ techStack }) {

    return (
        <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2 border-b pb-2 border-gray-300">Tech Stack</h3>

            <div className="flex flex-wrap gap-2 mt-6">
                {
                    techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 
                            sm:text-lg text-base
                            px-3 py-1 rounded-full font-medium mr-2 mb-2"
                        >
                            {tech.title}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default TechStack;
