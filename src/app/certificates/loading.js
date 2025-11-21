import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function Loading() {
  return (
    <section className="py-12">
      <SkeletonTheme baseColor="#d6cec7" highlightColor="#ebe5df">
        <Skeleton width={250} height={40} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="overflow-hidden">
              <div className="relative w-full md:aspect-video aspect-3/2 overflow-hidden sm:rounded-4xl rounded-2xl">
                <Skeleton height="100%" width="100%" />
              </div>
              <div className="p-4 flex items-center justify-between gap-3">
                <Skeleton width={180} height={24} />
                <Skeleton width={80} height={32} />
              </div>
            </div>
          ))}
        </div>
      </SkeletonTheme>
    </section>
  )
}