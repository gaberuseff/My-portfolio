import {PROJECTS} from "../constants";

function Projects() {
  return (
    <section className="px-6 py-10" id="work">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Works
      </h1>
      <div className="h-1 w-20 bg-white mb-8"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROJECTS.map((project, i) => (
          <div
            className="relative sm:rounded-3xl rounded-lg overflow-hidden"
            key={i}>
            <img src={project.image} alt="gaber usef projects" />
            <div
              className="absolute top-0 left-0 w-full h-full bg-black/50 
                bg flex flex-col justify-center items-center text-center px-6
                opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl sm:text-4xl font-medium mb-4">
                {project.name}
              </h3>
              <p className="sm:text-xl text-sm">{project.description}</p>
              <div className="mt-4">
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  //   make box shadow inset blue
                  className=" bg-gray-800 hover:bg-gray-900 transition-colors duration-200
                  text-white font-semibold px-4 py-2 rounded-full mr-2">
                  Git Hub
                </a>
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  //   make box shadow inset blue
                  className=" mt-4 bg-gray-800 hover:bg-gray-900
                    transition-colors duration-200 text-white font-semibold px-4 py-2 rounded-full">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
