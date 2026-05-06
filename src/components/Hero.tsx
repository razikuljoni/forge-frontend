/* eslint-disable react/no-unescaped-entities */
"use client";

import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import React from "react";

const stats = [
    { label: "Active Members", value: "2,400+" },
    { label: "Goal Achievement", value: "98%" },
    { label: "Elite Coaches", value: "15+" },
];

const coaches = [
    { name: "Sarah K.", img: "https://picsum.photos/seed/forge-coach-2/300/200.jpg" },
    { name: "James R.", img: "https://picsum.photos/seed/forge-coach-3/300/200.jpg" },
    { name: "Mia L.", img: "https://picsum.photos/seed/forge-coach-4/300/200.jpg" },
];

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="https://picsum.photos/seed/forge-hero-gym/1920/1080.jpg"
                    alt="Athlete training"
                    className="w-full h-full object-cover grayscale contrast-[1.3] brightness-[0.7] transition-all duration-700 hover:grayscale-0 hover:contrast-[1.15] hover:brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-linear-to-r from-forge-black via-forge-black/90 to-forge-black/50" />
                <div className="absolute inset-0 bg-linear-to-t from-forge-black via-transparent to-forge-black/40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-20 md:pt-40 md:pb-28 w-full">
                <div className="grid lg:grid-cols-12 gap-6 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="accent-line" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-forge-orange">
                                Elite Training Facility — Est. 2019
                            </span>
                        </motion.div>

                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.1 }}
                            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tight text-white mb-6"
                        >
                            Break
                            <br />
                            <span className="relative inline-block">
                                Your
                                <span className="absolute -bottom-1 left-0 w-full h-1 bg-forge-orange" />
                            </span>
                            <br />
                            Limits
                        </motion.h1>

                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="text-sm md:text-base text-forge-silver max-w-lg leading-relaxed mb-8"
                        >
                            Where discipline meets community. FORGE is not just a gym—it's a
                            brotherhood of iron. Professional coaching, proven results, and an
                            environment designed to push you beyond what you thought possible.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-8 mb-10"
                        >
                            {stats.map((stat, idx) => (
                                <React.Fragment key={stat.label}>
                                    <div>
                                        <div className="stat-number font-heading text-3xl md:text-4xl font-bold">
                                            {stat.value}
                                        </div>
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-forge-silverDark mt-1">
                                            {stat.label}
                                        </div>
                                    </div>
                                    {idx !== stats.length - 1 && (
                                        <div className="w-px bg-white/10" />
                                    )}
                                </React.Fragment>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                href="#book"
                                className="inline-flex items-center gap-2 bg-forge-orange hover:bg-forge-orangeLight text-forge-black text-xs font-bold uppercase tracking-wider px-8 py-4 transition-all duration-200 animate-pulse-glow"
                            >
                                <span>Start Your Transformation</span>
                                <Icon icon="lucide:arrow-right" width="16" />
                            </Link>
                            <Link
                                href="#programs"
                                className="inline-flex items-center gap-2 border border-white/20 hover:border-forge-orange/50 text-white text-xs font-bold uppercase tracking-wider px-8 py-4 transition-all duration-200 hover:bg-white/5"
                            >
                                <span>Explore Programs</span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Coach Thumbnails */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-5"
                    >
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-xs">
                                <img
                                    src="https://picsum.photos/seed/forge-coach-main/600/750.jpg"
                                    alt="Head Coach"
                                    className="w-full h-[400px] md:h-[500px] object-cover object-top grayscale contrast-[1.2] brightness-[0.75] transition-all duration-500 hover:grayscale-0 hover:contrast-[1.1] hover:brightness-[0.9] hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-forge-black via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-forge-orange mb-1">
                                                Head Coach
                                            </div>
                                            <div className="font-heading text-xl font-bold text-white uppercase">
                                                Marcus Chen
                                            </div>
                                            <div className="text-xs text-forge-silver mt-0.5">
                                                NSCA-CSCS • 12 Years Experience
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-forge-orange animate-pulse" />
                                            <span className="text-[10px] uppercase tracking-wider text-forge-orange font-semibold">
                                                Available
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2 mt-2">
                                {coaches.map((coach) => (
                                    <div
                                        key={coach.name}
                                        className="relative flex-1 overflow-hidden rounded-xs h-24 group"
                                    >
                                        <img
                                            src={coach.img}
                                            alt={coach.name}
                                            className="w-full h-full object-cover grayscale contrast-[1.2] brightness-[0.75] transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-[1.1] group-hover:brightness-[0.9] group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-forge-black/40" />
                                        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold uppercase tracking-wider text-white">
                                            {coach.name}
                                        </div>
                                    </div>
                                ))}
                                <Link
                                    href="#coaches"
                                    className="relative flex-1 overflow-hidden rounded-xs h-24 bg-forge-gray flex items-center justify-center group cursor-pointer border border-white/5 hover:border-forge-orange/30 transition-all"
                                >
                                    <div className="text-center">
                                        <div className="font-heading text-lg font-bold text-white group-hover:text-forge-orange transition-colors">
                                            12+
                                        </div>
                                        <div className="text-[8px] uppercase tracking-wider text-forge-silver">
                                            View All
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-[9px] uppercase tracking-[0.3em] text-forge-silverDark">
                    Scroll
                </span>
                <Icon icon="lucide:chevron-down" className="text-forge-orange" width="16" />
            </div>
        </section>
    );
}
