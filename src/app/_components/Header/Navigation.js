'use client';

import Link from "@/app/_components/Link";
import { AlignRight, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const active = (path) => pathname === path;

    const links = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="z-10 text-xl">
            <button
                onClick={() => setOpen(!open)}
                className="block md:hidden"
                aria-label={open ? "Close navigation menu" : "Open navigation menu"}>
                <AlignRight />
            </button>

            <ul className={`
                md:flex md:items-center md:gap-10 md:text-lg 
                ${open
                    ? "fixed inset-0 z-50 flex flex-col justify-center h-screen items-center text-xl gap-8 bg-gray-100 text-gray-800 p-8"
                    : "hidden"
                } 
            `}>
                <button className="md:hidden absolute top-6 right-4"
                    onClick={() => setOpen(false)}
                    aria-label="Close navigation menu">
                    <X />
                </button>

                {links.map((link) => (
                    <Link key={link.href} href={link.href}
                        onClick={() => setOpen(false)}
                        className={`hover:text-gray-400 dark:hover:text-gray-600 transition-colors
                            ${link.href === '/contact' ? 'bg-gray-800 text-gray-100 px-4 py-1 rounded-full' : ''}
                            ${active(link.href) ? 'text-gray-400 dark:text-gray-600' : ''}`}>
                        {link.label}
                    </Link>
                ))}
            </ul>
        </nav>
    );
}