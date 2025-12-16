import Link from "../Link"
import Image from "next/image"

function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2">
            <Image
                src="/icon.svg"
                alt="Gaber Usef Logo"
                width={32}
                height={32}
                className="w-8 h-8"
            />
            <span className="sm:text-xl text-lg font-semibold">Gaber Usef</span>
        </Link>
    )
}

export default Logo
