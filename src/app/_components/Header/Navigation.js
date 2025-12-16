'use client';

import Link from "@/app/_components/Link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const active = (path) => pathname === path;

    const links = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/certificates", label: "Certificates" },
        { href: "/contact", label: "Contact" },
    ];

    const menuVariants = {
        hidden: {
            x: "100%",
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        },
        exit: {
            x: "100%",
            opacity: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
            }
        }
    };

    return (
        <nav className="z-10 text-xl">
            <button
                onClick={() => setOpen(!open)}
                className="block md:hidden"
                aria-label={open ? "Close navigation menu" : "Open navigation menu"}>
                <MenuLineIcon />
            </button>

            <ul className="md:flex md:items-center md:gap-10 md:text-lg hidden">
                {links.map((link) => (
                    <Link key={link.href} href={link.href}
                        className={`hover:text-gray-400 dark:hover:text-gray-600 transition-colors
                            ${link.href === '/contact' ? 'bg-gray-800 text-gray-100 px-4 py-1 rounded-full' : ''}
                            ${active(link.href) ? 'text-gray-400 dark:text-gray-600' : ''}`}>
                        {link.label}
                    </Link>
                ))}
            </ul>

            <AnimatePresence>
                {open && (
                    <motion.ul
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-50 flex flex-col justify-center h-screen items-center text-xl gap-8 bg-gray-100 text-gray-800 p-8 md:hidden"
                    >
                        <motion.button
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute top-6 right-4"
                            onClick={() => setOpen(false)}
                            aria-label="Close navigation menu"
                        >
                            <CloseLineIcon />
                        </motion.button>

                        {links.map((link) => (
                            <motion.div
                                key={link.href}
                                variants={itemVariants}
                            >
                                <Link href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`hover:text-gray-400 dark:hover:text-gray-600 transition-colors
                                        ${active(link.href) ? 'text-gray-400 dark:text-gray-600' : ''}`}>
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
}