import Logo from "./Logo"
import Navigation from "./Navigation"

function Header() {
    return (
        <header className="flex items-center justify-between sm:py-6 py-4 sm:px-0 px-1">
            <Logo />
            <Navigation />
        </header>
    )
}

export default Header
