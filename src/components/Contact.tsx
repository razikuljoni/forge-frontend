'use client'

import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative py-16 md:py-20 bg-forge-dark border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-6">
                    {/* Address */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Icon icon="lucide:map-pin" className="text-forge-orange" width="16" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-forge-silver">
                                Location
                            </span>
                        </div>
                        <p className="text-sm text-white font-semibold mb-1">
                            FORGE Fitness Studio
                        </p>
                        <p className="text-xs text-forge-silver leading-relaxed">
                            234 Iron District Blvd
                            <br />
                            Suite 500
                            <br />
                            Los Angeles, CA 90015
                        </p>
                    </div>
                    {/* Hours */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Icon icon="lucide:clock" className="text-forge-orange" width="16" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-forge-silver">
                                Hours
                            </span>
                        </div>
                        <div className="space-y-1.5">
                            <div className="flex justify-between text-xs">
                                <span className="text-forge-silver">Mon – Fri</span>
                                <span className="text-white font-semibold">5:00 AM – 11:00 PM</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-forge-silver">Saturday</span>
                                <span className="text-white font-semibold">6:00 AM – 9:00 PM</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-forge-silver">Sunday</span>
                                <span className="text-white font-semibold">7:00 AM – 7:00 PM</span>
                            </div>
                        </div>
                    </div>
                    {/* Contact */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Icon icon="lucide:phone" className="text-forge-orange" width="16" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-forge-silver">
                                Contact
                            </span>
                        </div>
                        <div className="space-y-1.5">
                            <p className="text-xs text-white">(213) 555-FORGE</p>
                            <p className="text-xs text-forge-orange">hello@forgefitness.com</p>
                        </div>
                    </div>
                    {/* Social */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Icon icon="lucide:share-2" className="text-forge-orange" width="16" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-forge-silver">
                                Follow Us
                            </span>
                        </div>
                        <div className="flex gap-2">
                            {[
                                { icon: 'lucide:instagram' },
                                { icon: 'lucide:youtube' },
                                { icon: 'lucide:twitter' },
                                { icon: 'lucide:facebook' },
                            ].map((social, idx) => (
                                <Link
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-forge-orange hover:border-forge-orange hover:text-forge-black text-forge-silver transition-all"
                                >
                                    <Icon icon={social.icon} width="16" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
