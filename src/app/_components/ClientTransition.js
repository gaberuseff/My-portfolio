"use client"
import ScrollToTop from "./ScrollToTop"

function ClientTransition({ children }) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  )
}

export default ClientTransition