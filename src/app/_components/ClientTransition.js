"use client"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { SkeletonTheme } from "react-loading-skeleton"

function ClientTransition({ children }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <SkeletonTheme baseColor="#e5e7eb" highlightColor="#f3f4f6">
          {children}
        </SkeletonTheme>
      </motion.div>
    </AnimatePresence>
  )
}

export default ClientTransition