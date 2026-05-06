'use client'

import { motion } from 'framer-motion'

interface StoryProps {
    name: string
    role: string
    age: string
    weightLoss: string
    duration: string
    beforeImg: string
    afterImg: string
    quote: string
    tags: string[]
    initials: string
}

function StoryCard({ story }: { story: StoryProps }) {
    return (
        <motion.div whileHover={{ y: -5 }} className="story-card group">
            <div className="relative overflow-hidden bg-forge-gray">
                <div className="grid grid-cols-2">
                    <div className="relative">
                        <img
                            src={story.beforeImg}
                            alt="Before"
                            className="w-full h-64 object-cover grayscale contrast-[1.2] transition-all duration-500 group-hover:grayscale-0"
                        />
                        <div className="absolute bottom-2 left-2 bg-forge-black/80 px-2 py-1">
                            <span className="text-[9px] font-bold uppercase tracking-wider text-white">
                                Before
                            </span>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src={story.afterImg}
                            alt="After"
                            className="w-full h-64 object-cover"
                        />
                        <div className="absolute bottom-2 left-2 bg-forge-orange/90 px-2 py-1">
                            <span className="text-[9px] font-bold uppercase tracking-wider text-forge-black">
                                After
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-forge-orange/20 border border-forge-orange/30 flex items-center justify-center rounded-full">
                        <span className="font-heading font-bold text-forge-orange text-sm">
                            {story.initials}
                        </span>
                    </div>
                    <div>
                        <div className="text-sm font-bold text-white">{story.name}</div>
                        <div className="text-[10px] text-forge-silverDark">
                            {story.role} • {story.age}
                        </div>
                    </div>
                    <div className="ml-auto text-right">
                        <div className="text-xs font-bold text-forge-orange">
                            {story.weightLoss}
                        </div>
                        <div className="text-[10px] text-forge-silverDark">{story.duration}</div>
                    </div>
                </div>
                <p className="text-xs text-forge-silver leading-relaxed italic">{story.quote}</p>
                <div className="flex gap-2">
                    {story.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[9px] font-semibold uppercase tracking-wider bg-forge-orange/10 text-forge-orange px-2 py-0.5"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default function Stories() {
    const stories = [
        {
            name: 'David Kim',
            initials: 'DK',
            role: 'Software Engineer',
            age: '34 yrs',
            weightLoss: '-18 kg',
            duration: '6 months',
            beforeImg: 'https://picsum.photos/seed/forge-before-1/300/400.jpg',
            afterImg: 'https://picsum.photos/seed/forge-after-1/300/400.jpg',
            quote: "I walked in at 96kg with zero confidence. FORGE didn't just change my body—they changed how I see myself. The coaches held me accountable when I wanted to quit.",
            tags: ['Fat Loss', 'Muscle Gain'],
        },
        {
            name: 'Amanda Lin',
            initials: 'AL',
            role: 'Marketing Director',
            age: '29 yrs',
            weightLoss: '-12 kg',
            duration: '4 months',
            beforeImg: 'https://picsum.photos/seed/forge-before-2/300/400.jpg',
            afterImg: 'https://picsum.photos/seed/forge-after-2/300/400.jpg',
            quote: 'As a woman, I was intimidated by the hardcore gym culture. FORGE proved me wrong. The community here is incredibly supportive. I deadlifted 100kg last month!',
            tags: ['Strength', 'Body Recomp'],
        },
        {
            name: 'Julian Marc',
            initials: 'JM',
            role: 'Entrepreneur',
            age: '41 yrs',
            weightLoss: '+8 kg',
            duration: '8 months',
            beforeImg: 'https://picsum.photos/seed/forge-before-3/300/400.jpg',
            afterImg: 'https://picsum.photos/seed/forge-after-3/300/400.jpg',
            quote: "I had the time but not the plan. The custom programming at Forge took the guesswork out of my training. I'm in the best shape of my life at 40.",
            tags: ['Hypertrophy', 'Longevity'],
        },
    ]

    return (
        <section id="stories" className="relative py-20 md:py-28 bg-forge-dark">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="accent-line" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-forge-orange">
                                Real Transformations
                            </span>
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
                            Their Words,
                            <br />
                            Our Proof
                        </h2>
                    </div>
                    <p className="text-sm text-forge-silver max-w-md leading-relaxed">
                        No Photoshop. No exaggeration. Real members, real dedication, real results.
                        These are the stories that define FORGE.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    {stories.map((story, idx) => (
                        <StoryCard key={idx} story={story} />
                    ))}
                </div>
            </div>
        </section>
    )
}
