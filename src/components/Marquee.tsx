'use client'

import React from 'react'
import { motion } from 'framer-motion'

const categories = [
    'Strength Training',
    'HIIT Conditioning',
    'Functional Fitness',
    'Body Recomposition',
    'Athletic Performance',
    'Olympic Lifting',
]

export default function Marquee() {
    return (
        <div className="relative bg-forge-orange py-3 overflow-hidden z-10">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex items-center gap-8"
                    animate={{ x: [0, '-50%'] }}
                    transition={{
                        repeat: Infinity,
                        duration: 25,
                        ease: 'linear',
                    }}
                    whileHover={{ animationPlayState: 'paused' }}
                >
                    {[...categories, ...categories].map((cat, idx) => (
                        <React.Fragment key={idx}>
                            <span className="font-heading text-sm font-bold uppercase tracking-wider text-forge-black">
                                {cat}
                            </span>
                            <span className="text-forge-orangeDark">◆</span>
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
