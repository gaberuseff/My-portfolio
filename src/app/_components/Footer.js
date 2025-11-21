"use client"
import Link from "./Link";
import { motion } from "framer-motion";

function Footer() {
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    const socialLinks = [
        { href: "https://github.com/Gaberuseff", label: "GitHub" },
        { href: "https://www.linkedin.com/in/gaberuseff/", label: "LinkedIn" },
    ];

    return (
        <footer className=" mt-12 border-t border-gray-300 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="pt-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8  md:text-left">
                    <div className="space-y-4 col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center">
                            <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                            <span className="ml-2 sm:text-xl text-lg font-semibold">Gaber Usef</span>
                        </Link>

                        <p className="p-small">
                            A passionate Front-End Developer dedicated to building modern and user-friendly web applications.
                        </p>

                        <p className="p-small">
                            &copy; {new Date().getFullYear()} Gaber Usef. For Works.
                        </p>
                    </div>

                    <div className="md:justify-self-center">
                        <h3 className="text-base font-semibold text-gray-800 uppercase tracking-wider">Links</h3>
                        <ul className="mt-4 space-y-2">
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href}
                                        className="sm:text-base text-sm text-gray-500 hover:text-gray-900 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="justify-self-center md:justify-self-end">
                        <h3 className="text-base font-semibold text-gray-800 uppercase tracking-wider">Connect</h3>
                        <ul className="mt-4 space-y-2">
                            {socialLinks.map(link => (
                                <li key={link.href}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer"
                                        className="sm:text-base text-sm text-gray-500 hover:text-gray-900 transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="relative text-center py-4 w-full overflow-hidden text-slate-700/20">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute top-1/3 left-2/5 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center z-10"
                >
                    <h2 className="leading-tight flex items-center justify-center gap-2">
                        <span className="block sm:text-3xl text-lg">Front-End </span>
                        <span className="block sm:text-3xl text-lg  italic font-serif">Web</span>
                        <span className="block sm:text-3xl text-lg  font-black tracking-tight">Developer</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:text-[300px] md:text-[200px] sm:text-[150px] text-[100px] font-bold"
                >
                    Iconic
                </motion.p>
            </div>
        </footer>
    );
}

export default Footer;
