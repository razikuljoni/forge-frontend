/* eslint-disable react/no-unescaped-entities */
'use client'

import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import BookingForm from './ui/BookingForm'

export default function BookingSection() {
    const [submitted, setSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (values: Record<string, string>, form: HTMLFormElement) => {
        if (!values.time) {
            toast.error('Please select a preferred time.')
            return
        }

        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)
            setTimeout(() => setSubmitted(false), 3000)
            toast.success('Your free trial is booked!')
            form.reset()
        }, 1500)
    }

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
                                'Free InBody Assessment',
                                'Full Facility Access',
                                '1-on-1 Coach Consultation',
                                'Personalized Plan Preview',
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
                            <div className="mb-6">
                                <h3 className="font-heading text-2xl font-bold uppercase text-white mb-2">
                                    Book Your Free Trial
                                </h3>
                                <p className="text-xs text-forge-silver">
                                    Fill out the form below and we'll get you started within 24
                                    hours.
                                </p>
                            </div>

                            <BookingForm
                                onSubmit={handleSubmit}
                                submitLabel={
                                    isSubmitting
                                        ? 'Processing...'
                                        : submitted
                                          ? '✓ Booking Confirmed!'
                                          : 'Claim Your Free Trial Class'
                                }
                                loading={isSubmitting}
                            />

                            <p className="text-xs text-forge-silverDark text-center mt-3">
                                By signing up, you agree to our Terms of Service. No credit card
                                required.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
