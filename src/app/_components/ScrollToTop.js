"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

function ScrollToTop() {
    const pathname = usePathname()

    useEffect(() => {
        // تمرير الصفحة للأعلى عند تغيير المسار
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default ScrollToTop
