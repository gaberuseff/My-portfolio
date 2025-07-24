import Link from "../Link"

function Logo() {
    return (
        <Link href="/" className="flex items-center">
            <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
            <span className="ml-2 sm:text-xl text-lg font-semibold">Gaber Usef</span>
        </Link>
    )
}

export default Logo
