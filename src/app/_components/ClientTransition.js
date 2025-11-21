"use client"
import { SkeletonTheme } from "react-loading-skeleton"

function ClientTransition({ children }) {
  return (
    <SkeletonTheme baseColor="#e5e7eb" highlightColor="#f3f4f6">
      {children}
    </SkeletonTheme>
  )
}

export default ClientTransition