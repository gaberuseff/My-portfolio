"use client"
import { SkeletonTheme } from "react-loading-skeleton"

function ClientTransition({ children }) {
  return (
    <SkeletonTheme baseColor="#d6cec7" highlightColor="#ebe5df">
      {children}
    </SkeletonTheme>
  )
}

export default ClientTransition