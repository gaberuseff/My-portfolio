import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function Loading() {
  return (
    <section className="py-12 sm:py-16 flex flex-col gap-4">
      <SkeletonTheme baseColor="#e5e7eb" highlightColor="#f3f4f6">
        <Skeleton width={250} height={40} />

        <div className="relative w-full aspect-video mb-4 overflow-hidden sm:rounded-4xl rounded-2xl">
          <Skeleton height="100%" width="100%" />
        </div>

        <div className="max-w-3xl">
          <ul className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton circle width={24} height={24} />
                <Skeleton width={300} height={16} />
              </div>
            ))}
          </ul>

          <div className="mt-4 flex gap-2">
            <Skeleton width={120} height={44} />
            <Skeleton width={160} height={44} />
          </div>
        </div>
      </SkeletonTheme>
    </section>
  )
}