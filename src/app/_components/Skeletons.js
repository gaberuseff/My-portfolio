"use client"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function WorkCardSkeleton() {
  return (
    <div className="py-4 md:border-b border-gray-300">
      <div className="relative w-full md:aspect-video aspect-3/2 mb-4 sm:rounded-4xl rounded-2xl overflow-hidden">
        <Skeleton height="100%" width="100%" />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-1">
        <Skeleton width={180} height={24} />
        <Skeleton width={240} height={16} />
      </div>
    </div>
  )
}

function ProjectsSkeleton() {
  return (
    <SkeletonTheme baseColor="#14130d" highlightColor="#f3f4f6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <WorkCardSkeleton key={i} />
        ))}
      </div>
    </SkeletonTheme>
  )
}

export default ProjectsSkeleton
export { WorkCardSkeleton }