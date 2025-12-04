"use client"
import { SkeletonTheme } from "react-loading-skeleton"
import ScrollToTop from "./ScrollToTop"

function ClientTransition({ children }) {
  return (
    <SkeletonTheme baseColor="#d6cec7" highlightColor="#ebe5df">
      <ScrollToTop />
      {children}
    </SkeletonTheme>
  )
}

export default ClientTransition