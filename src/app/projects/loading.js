export default function Loading() {
  return (
    <div className="py-12 animate-pulse">
      <div className="h-8 bg-[#ccc4be] rounded w-48 mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border border-[#ccc4be] rounded-2xl overflow-hidden">
            <div className="h-48 bg-[#ccc4be]"></div>
            <div className="p-6">
              <div className="h-6 bg-[#ccc4be] rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-[#ccc4be] rounded w-full mb-2"></div>
              <div className="h-4 bg-[#ccc4be] rounded w-5/6"></div>
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="h-6 bg-[#ccc4be] rounded-full w-16"></div>
                <div className="h-6 bg-[#ccc4be] rounded-full w-20"></div>
                <div className="h-6 bg-[#ccc4be] rounded-full w-14"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}