/* eslint-disable react/no-unescaped-entities */
"use client";

import { Icon } from "@iconify/react";
import React, { useState } from "react";

export default function BookingSection() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
        }, 1500);
    };

    return (
        <section id="book" className="relative py-20 md:py-28 bg-forge-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="accent-line" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-forge-orange">
                                    Start Today
                                </span>
                            </div>
                            <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tight text-white mb-6">
                                Your First
                                <br />
                                <span className="text-forge-orange">Class is Free</span>
                            </h2>
                            <p className="text-sm md:text-base text-forge-silver max-w-lg leading-relaxed">
                                No contracts. No commitments. Just show up and give us everything
                                you've got for one hour. If FORGE isn't the hardest, most rewarding
                                workout of your life—we'll eat our protein powder.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 max-w-lg">
                            {[
                                "Free InBody Assessment",
                                "Full Facility Access",
                                "1-on-1 Coach Consultation",
                                "Personalized Plan Preview",
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-4 h-4 bg-forge-orange flex items-center justify-center shrink-0">
                                        <Icon
                                            icon="lucide:check"
                                            className="text-forge-black"
                                            width="10"
                                        />
                                    </div>
                                    <span className="text-xs text-forge-silver">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <img
                                        key={i}
                                        src={`https://picsum.photos/seed/user${i}/100/100`}
                                        className="w-10 h-10 rounded-full border-2 border-forge-black object-cover"
                                        alt="User"
                                    />
                                ))}
                                <div className="w-10 h-10 rounded-full bg-forge-orange border-2 border-forge-black flex items-center justify-center text-forge-black text-[10px] font-bold">
                                    2.4K
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Icon
                                            key={i}
                                            icon="lucide:star"
                                            className="text-orange-400"
                                            width="12"
                                        />
                                    ))}
                                    <span className="text-xs font-bold text-white ml-1">4.9</span>
                                </div>
                                <div className="text-[10px] text-forge-silverDark">
                                    Based on 500+ reviews
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="relative">
                        <div className="bg-forge-gray border border-white/10 p-6 md:p-10 rounded-xs relative z-10">
                            <div className="mb-8">
                                <h3 className="font-heading text-2xl font-bold uppercase text-white mb-2">
                                    Book Your Free Trial
                                </h3>
                                <p className="text-xs text-forge-silver">
                                    Fill out the form below and we'll get you started within 24
                                    hours.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase tracking-wider text-forge-silver">
                                            First Name *
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="John"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm focus:border-forge-orange outline-hidden transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase tracking-wider text-forge-silver">
                                            Last Name *
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Doe"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm focus:border-forge-orange outline-hidden transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-forge-silver">
                                        Email *
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm focus:border-forge-orange outline-hidden transition-all"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-forge-silver">
                                        Phone *
                                    </label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm focus:border-forge-orange outline-hidden transition-all"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-forge-silver">
                                        Your Goal *
                                    </label>
                                    <div className="relative">
                                        <select className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm focus:border-forge-orange outline-hidden appearance-none transition-all">
                                            <option className="bg-forge-gray">
                                                Select your primary goal
                                            </option>
                                            <option className="bg-forge-gray">Muscle Gain</option>
                                            <option className="bg-forge-gray">Fat Loss</option>
                                            <option className="bg-forge-gray">
                                                Overall Health
                                            </option>
                                            <option className="bg-forge-gray">
                                                Athletic Performance
                                            </option>
                                        </select>
                                        <Icon
                                            icon="lucide:chevron-down"
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-forge-silver pointer-events-none"
                                            width="16"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-forge-silver">
                                        Experience Level
                                    </label>
                                    <div className="flex gap-2">
                                        {["Beginner", "Intermediate", "Advanced"].map((level) => (
                                            <label key={level} className="flex-1 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="level"
                                                    value={level.toLowerCase()}
                                                    className="sr-only peer"
                                                    defaultChecked={level === "Beginner"}
                                                />
                                                <div className="text-center py-2.5 text-[10px] font-bold uppercase tracking-wider border border-white/10 text-forge-silver peer-checked:border-forge-orange peer-checked:text-forge-orange peer-checked:bg-forge-orange/10 transition-all hover:border-white/20">
                                                    {level}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-forge-orange hover:bg-forge-orangeLight text-forge-black text-xs font-bold uppercase tracking-wider px-8 py-4 transition-all duration-200 flex items-center justify-center gap-2 ${
                                        submitted ? "bg-green-600" : ""
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-forge-black border-t-transparent rounded-full animate-spin" />
                                            <span>Processing...</span>
                                        </>
                                    ) : submitted ? (
                                        <>
                                            <Icon icon="lucide:check-circle" width="16" />
                                            <span>Booking Confirmed!</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Claim Your Free Trial Class</span>
                                            <Icon icon="lucide:arrow-right" width="16" />
                                        </>
                                    )}
                                </button>
                                <p className="text-[10px] text-forge-silverDark text-center">
                                    By signing up, you agree to our Terms of Service. No credit card
                                    required.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
