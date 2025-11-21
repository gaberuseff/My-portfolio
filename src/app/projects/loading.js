import { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import ProjectsSkeleton from "../_components/Skeletons"

export default function Loading() {
  return (
    <div className="py-12">
      <SkeletonTheme baseColor="#d6cec7" highlightColor="#ebe5df">
        <ProjectsSkeleton />
      </SkeletonTheme>
    </div>
  )
}