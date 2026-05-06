"use client";

import { useOpen } from "@/hooks";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import AuthModal from "./modals/AuthModal";
import BookingModal from "./modals/BookingModal";

const navLinks = [
    { name: "Programs", href: "#programs" },
    { name: "Coaches", href: "#coaches" },
    { name: "Stories", href: "#stories" },
    { name: "Schedule", href: "#schedule" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // const { user, logout } = useAuth();
    const authModal = useOpen();
    const bookingsModal = useOpen();
    // const mobileNav = useOpen();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-forge-black/85 backdrop-blur-xl py-3" : "bg-transparent py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="#" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-forge-orange flex items-center justify-center">
                            <span className="font-heading font-bold text-forge-black text-lg leading-none">
                                F
                            </span>
                        </div>
                        <span className="font-heading font-bold text-xl tracking-wider text-white uppercase">
                            Forge
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-xs font-semibold uppercase tracking-[0.2em] text-forge-silver hover:text-white transition-colors group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-forge-orange transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <div
                            onClick={authModal.toggle}
                            className="hidden md:inline-flex items-center gap-2 border border-white/20 hover:border-forge-orange/50 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 transition-all duration-200 hover:bg-white/5"
                        >
                            <span>Sign In</span>
                            {/* <Icon icon="lucide:arrow-right" width="14" /> */}
                        </div>
                        <div
                            onClick={bookingsModal.toggle}
                            className="hidden md:inline-flex items-center gap-2 bg-forge-orange hover:bg-forge-orangeLight text-forge-black text-xs font-bold uppercase tracking-wider px-6 py-3 transition-all duration-200"
                        >
                            <span>Book Trial</span>
                            <Icon icon="lucide:arrow-right" width="14" />
                        </div>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-forge-orange transition-colors"
                        >
                            <Icon icon="lucide:menu" width="24" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 w-80 max-w-full h-screen bg-forge-black border-l border-white/5 z-50 transition-transform duration-400 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="p-6">
                    <div className="flex justify-end mb-10">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-10 h-10 flex items-center justify-center text-white hover:text-forge-orange transition-colors"
                        >
                            <Icon icon="lucide:x" width="24" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="font-heading text-2xl font-bold uppercase tracking-wider text-white hover:text-forge-orange transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-6 pt-6 space-y-4 border-t border-white/10">
                            <div
                                onClick={authModal.toggle}
                                className="hidden md:inline-flex items-center justify-center gap-2 border border-white/20 hover:border-forge-orange/50 text-white text-xs font-bold uppercase tracking-wider px-6 py-4 transition-all duration-200 hover:bg-white/5 w-full"
                            >
                                <span>Sign In</span>
                                <Icon icon="lucide:log-in" width="14" />
                            </div>
                            <div
                                onClick={bookingsModal.toggle}
                                className="flex items-center justify-center gap-2 bg-forge-orange text-forge-black text-sm font-bold uppercase tracking-wider px-6 py-4 w-full hover:bg-forge-orangeLight transition-colors"
                            >
                                <span>Book Free Trial</span>
                                <Icon icon="lucide:arrow-right" width="16" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 backdrop-blur-xs"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <AuthModal open={authModal.open} onClose={authModal.setOpen} />
            <BookingModal open={bookingsModal.open} onClose={() => bookingsModal.setOpen(false)} />
            {/* <MyBookingsModal open={bookingsModal.open} onClose={() => bookingsModal.setOpen(false)} /> */}
        </nav>
    );
}
