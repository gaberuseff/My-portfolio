import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function Loading() {
  return (
    <section className="pt-12">
      <SkeletonTheme baseColor="#d6cec7" highlightColor="#ebe5df">
        <div>
          <Skeleton width={240} height={36} style={{ marginBottom: 12 }} />
          <div className="space-y-2 max-w-5xl">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} height={14} />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <Skeleton width={220} height={28} />
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton circle width={24} height={24} />
                <Skeleton width={100} height={18} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Skeleton width={140} height={44} />
        </div>
      </SkeletonTheme>
    </section>
  )
}