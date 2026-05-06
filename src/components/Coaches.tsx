'use client'

import React from 'react'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

interface CoachCardProps {
    name: string
    role: string
    certs: string
    exp: string
    specialty: string
    img: string
}

function CoachCard({ name, role, certs, exp, specialty, img }: CoachCardProps) {
    return (
        <motion.div whileHover={{ y: -5 }} className="coach-card group cursor-pointer">
            <div className="relative overflow-hidden aspect-3/4 bg-forge-gray">
                <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover grayscale contrast-[1.2] brightness-[0.75] transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-[1.1] group-hover:brightness-[0.9] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-forge-black via-transparent to-transparent" />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <a
                        href="#"
                        className="w-8 h-8 bg-forge-black/70 flex items-center justify-center hover:bg-forge-orange transition-colors backdrop-blur-xs"
                    >
                        <Icon icon="lucide:instagram" className="text-white" width="14" />
                    </a>
                    <a
                        href="#"
                        className="w-8 h-8 bg-forge-black/70 flex items-center justify-center hover:bg-forge-orange transition-colors backdrop-blur-xs"
                    >
                        <Icon icon="lucide:linkedin" className="text-white" width="14" />
                    </a>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-forge-orange mb-1">
                        {role}
                    </div>
                    <div className="font-heading text-lg font-bold text-white uppercase">
                        {name}
                    </div>
                </div>
            </div>
            <div className="mt-3 space-y-1.5">
                <div className="flex items-center gap-2">
                    <Icon icon="lucide:award" className="text-forge-orange" width="12" />
                    <span className="text-[10px] text-forge-silver">{certs}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Icon icon="lucide:timer" className="text-forge-orange" width="12" />
                    <span className="text-[10px] text-forge-silver">{exp}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Icon icon="lucide:target" className="text-forge-orange" width="12" />
                    <span className="text-[10px] text-forge-silver">{specialty}</span>
                </div>
            </div>
        </motion.div>
    )
}

export default function Coaches() {
    const coaches = [
        {
            name: 'Marcus Chen',
            role: 'Head Coach / Founder',
            certs: 'NSCA-CSCS, NASM-CPT',
            exp: '12 Years Experience',
            specialty: 'Strength & Hypertrophy',
            img: 'https://picsum.photos/seed/forge-marcus/400/533.jpg',
        },
        {
            name: 'Sarah Kim',
            role: 'Performance Coach',
            certs: 'ACSM-EP, Precision L2',
            exp: '8 Years Experience',
            specialty: 'Fat Loss & MetCon',
            img: 'https://picsum.photos/seed/forge-sarah/400/533.jpg',
        },
        {
            name: 'James Rivera',
            role: 'Strength Coach',
            certs: 'USAW, CSCS, FMS L2',
            exp: '10 Years Experience',
            specialty: 'Olympic Lifting',
            img: 'https://picsum.photos/seed/forge-james/400/533.jpg',
        },
        {
            name: 'Mia Liu',
            role: 'Recovery Specialist',
            certs: 'NASM-CES, RYT-500',
            exp: '7 Years Experience',
            specialty: 'Mobility & Recovery',
            img: 'https://picsum.photos/seed/forge-mia/400/533.jpg',
        },
    ]

    return (
        <section id="coaches" className="relative py-20 md:py-28 bg-forge-dark">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="accent-line" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-forge-orange">
                                Expert Coaching Staff
                            </span>
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
                            Led By
                            <br />
                            The Best
                        </h2>
                    </div>
                    <p className="text-sm text-forge-silver max-w-md leading-relaxed">
                        Every FORGE coach holds nationally recognized certifications and has a
                        minimum of 5 years experience in strength & conditioning.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {coaches.map((coach, idx) => (
                        <CoachCard key={idx} {...coach} />
                    ))}
                </div>
            </div>
        </section>
    )
}
