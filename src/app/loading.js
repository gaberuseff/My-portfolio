export default function Loading() {
  return (
    <div className="flex flex-col animate-pulse">
      <section className="sm:py-16 py-8 px-2 flex flex-col gap-18">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full aspect-square md:h-full md:aspect-auto order-1 md:order-2 overflow-hidden rounded-[5%] bg-[#ccc4be]">
          </div>
          <div className="max-w-3xl flex flex-col items-start justify-center gap-4 order-2 md:order-1">
            <div className="h-10 bg-[#ccc4be] rounded w-64"></div>
            <div className="h-12 bg-[#ccc4be] rounded w-80"></div>
            <div className="h-6 bg-[#ccc4be] rounded w-72 mt-4"></div>
            <div className="h-11 bg-[#ccc4be] rounded-full w-36 mt-4"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-3 mt-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-start pr-8">
              <div className="h-5 bg-[#ccc4be] rounded w-40"></div>
              <div className="h-4 bg-[#ccc4be] rounded w-56 mt-2"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="h-8 bg-[#ccc4be] rounded w-48"></div>
          <div className="h-4 bg-[#ccc4be] rounded w-96 mt-2 md:mt-0"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="py-4">
              <div className="relative w-full md:aspect-video aspect-3/2 mb-4 sm:rounded-4xl rounded-2xl overflow-hidden bg-[#ccc4be]">
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-1">
                <div className="h-6 bg-[#ccc4be] rounded w-48"></div>
                <div className="h-4 bg-[#ccc4be] rounded w-64 mt-1 lg:mt-0"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}