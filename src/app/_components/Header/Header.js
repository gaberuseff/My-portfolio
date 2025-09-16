"use client"
import { useEffect, useState } from "react"
import Logo from "./Logo"
import Navigation from "./Navigation"

function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`sticky top-0 z-50 flex items-center justify-between sm:py-6 py-4 sm:px-12 px-4 
            ${scrolled ? 'bg-[#ccc4be7f] supports-[backdrop-filter]:bg-[#ccc4be7f]/80 backdrop-blur shadow-xs' : 'bg-transparent'}
        `}>
            <Logo />
            <Navigation />
        </header>
    )
}

export default Header
