import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function Loading() {
  return (
    <div className="flex flex-col">
      <SkeletonTheme baseColor="#d6cec7" highlightColor="#ebe5df">
        <section className="sm:py-16 py-8 px-2 flex flex-col gap-18">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full aspect-square md:h-full md:aspect-auto order-1 md:order-2 overflow-hidden rounded-[5%]">
              <Skeleton height="100%" width="100%" />
            </div>
            <div className="max-w-3xl flex flex-col items-start justify-center gap-4 order-2 md:order-1">
              <Skeleton width={260} height={40} />
              <Skeleton width={320} height={48} />
              <Skeleton width={280} height={24} style={{ marginTop: 16 }} />
              <Skeleton width={140} height={44} style={{ marginTop: 16 }} />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-3 mt-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col items-start relative md:border-r md:border-gray-300 pr-8">
                <Skeleton width={160} height={18} />
                <Skeleton width={220} height={14} style={{ marginTop: 8 }} />
              </div>
            ))}
          </div>
        </section>

        <section className="py-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <Skeleton width={180} height={32} />
            <Skeleton width={360} height={16} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="py-4">
                <div className="relative w-full md:aspect-video aspect-3/2 mb-4 sm:rounded-4xl rounded-2xl overflow-hidden">
                  <Skeleton height="100%" width="100%" />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-1">
                  <Skeleton width={180} height={24} />
                  <Skeleton width={240} height={16} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </SkeletonTheme>
    </div>
  )
}
