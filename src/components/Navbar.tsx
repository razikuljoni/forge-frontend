'use client'

import { useOpen } from '@/hooks'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import AuthModal from './modals/AuthModal'
import BookingModal from './modals/BookingModal'

const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Coaches', href: '#coaches' },
    { name: 'Stories', href: '#stories' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // const { user, logout } = useAuth();
    const authModal = useOpen()
    const bookingsModal = useOpen()
    // const mobileNav = useOpen();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled ? 'bg-forge-black/85 backdrop-blur-xl py-1' : 'bg-transparent py-3'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="#" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-forge-orange flex items-center justify-center">
                                <span className="font-heading font-extrabold text-forge-black text-2xl leading-none">
                                    F
                                </span>
                            </div>
                            <span className="font-heading font-bold text-2xl tracking-wider text-white uppercase">
                                Forge
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative font-heading text-xs tracking-wide uppercase text-forge-silver hover:text-white transition-colors group"
                                >
                                    {link.name}
                                    <span className="absolute tracking-wider text-white uppercase -bottom-1 left-0 w-0 h-px bg-forge-orange transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        {/* CTA + Mobile Toggle */}
                        <div className="flex items-center gap-4">
                            <div
                                onClick={authModal.toggle}
                                className="hidden md:inline-flex items-center gap-2 border border-white/20 hover:border-forge-orange/50 font-heading text-white text-xs uppercase tracking-wider px-6 py-3 transition-all duration-200 hover:bg-white/5 cursor-pointer"
                            >
                                <span>Sign In</span>
                                {/* <Icon icon="lucide:arrow-right" width="14" /> */}
                            </div>
                            <div
                                onClick={bookingsModal.toggle}
                                className="hidden font-heading md:inline-flex items-center gap-2 bg-forge-orange hover:bg-forge-orangeLight text-forge-black text-xs uppercase tracking-wider px-6 py-3 transition-all duration-200 orange-glow pulse-ring cursor-pointer"
                            >
                                <span>Book Trial</span>
                                <Icon icon="lucide:arrow-right" width="14" />
                            </div>
                            <button
                                onClick={() => setIsOpen(true)}
                                className="lg:hidden font-heading w-10 h-10 flex items-center justify-center text-white hover:text-forge-orange transition-colors"
                            >
                                <Icon icon="lucide:menu" width="24" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 w-80 max-w-full h-screen bg-forge-black border-l border-white/5 z-50 transition-transform duration-400 ease-in-out ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
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
                                    className="hidden font-heading md:inline-flex items-center justify-center gap-2 border border-white/20 hover:border-forge-orange/50 text-white text-xs font-bold uppercase tracking-wider px-6 py-4 transition-all duration-200 hover:bg-white/5 w-full cursor-pointer"
                                >
                                    <span>Sign In</span>
                                    <Icon icon="lucide:log-in" width="14" />
                                </div>
                                <div
                                    onClick={bookingsModal.toggle}
                                    className="flex font-heading items-center justify-center gap-2 bg-forge-orange text-forge-black text-sm font-bold uppercase tracking-wider px-6 py-4 w-full hover:bg-forge-orangeLight transition-colors cursor-pointer"
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
            </nav>

            <AuthModal open={authModal.open} onClose={authModal.setOpen} />
            <BookingModal open={bookingsModal.open} onClose={() => bookingsModal.setOpen(false)} />
        </>
    )
}
