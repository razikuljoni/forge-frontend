'use client'

import { api } from '@/lib/api'
import type { Program } from '@/types'
import { Icon } from '@iconify/react'
import { useEffect, useState, type FormEvent } from 'react'

const TIME_SLOTS = ['06:00', '07:30', '09:00', '12:00', '17:00', '18:30', '20:00']

export interface BookingFormProps {
    /** Called with the FormData entries object on submit */
    onSubmit: (values: Record<string, string>, form: HTMLFormElement) => void
    /** Pre-fill values (e.g. from logged-in user) */
    defaults?: {
        name?: string
        email?: string
        phone?: string
        programId?: string
        time?: string
    }
    /** Submit button text */
    submitLabel?: string
    /** Loading state for the submit button */
    loading?: boolean
    /** Error message to display */
    error?: string
}

export default function BookingForm({
    onSubmit,
    defaults,
    submitLabel = 'Confirm Booking',
    loading = false,
    error,
}: BookingFormProps) {
    const [programs, setPrograms] = useState<Program[]>([])
    const [selectedTime, setSelectedTime] = useState(defaults?.time || '')

    useEffect(() => {
        api.getPrograms()
            .then((res) => setPrograms(res.data))
            .catch(() => {})
    }, [])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        // Inject selected time since it's managed via buttons, not a native input
        formData.set('time', selectedTime)
        const values = Object.fromEntries(formData.entries()) as Record<string, string>
        console.log('Booking form values:', values)
        onSubmit(values, form)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name */}
            <div>
                <label className="font-body text-[10px] font-bold text-forge-silver tracking-wider uppercase block mb-1">
                    Full Name *
                </label>
                <input
                    name="name"
                    required
                    defaultValue={defaults?.name}
                    placeholder="Your Full Name"
                    className="w-full bg-forge-gray border border-forge-mid px-3 py-2 font-body text-sm text-white focus:outline-hidden focus:border-forge-orange transition-colors"
                />
            </div>

            {/* Email */}
            <div>
                <label className="font-body text-[10px] font-bold text-forge-silver tracking-wider uppercase block mb-1">
                    Email *
                </label>
                <input
                    name="email"
                    type="email"
                    required
                    defaultValue={defaults?.email}
                    placeholder="your.email@example.com"
                    className="w-full bg-forge-gray border border-forge-mid px-3 py-2 font-body text-sm text-white focus:outline-hidden focus:border-forge-orange transition-colors"
                />
            </div>

            {/* Phone */}
            <div>
                <label className="font-body text-[10px] font-bold text-forge-silver tracking-wider uppercase block mb-1">
                    Phone *
                </label>
                <input
                    name="phone"
                    type="tel"
                    required
                    defaultValue={defaults?.phone}
                    placeholder="(+880) 1623-208660"
                    className="w-full bg-forge-gray border border-forge-mid px-3 py-2 font-body text-sm text-white focus:outline-hidden focus:border-forge-orange transition-colors"
                />
            </div>

            {/* Program */}
            <div>
                <label className="font-body text-[10px] font-bold text-forge-silver tracking-wider uppercase block mb-1">
                    Program *
                </label>
                <div className="relative">
                    <select
                        name="program"
                        required
                        defaultValue={defaults?.programId || ''}
                        className="w-full bg-forge-gray border border-forge-mid px-3 py-2 font-body text-sm text-white focus:outline-hidden focus:border-forge-orange transition-colors appearance-none"
                    >
                        <option value="">Select a program</option>
                        {/* {programs.map((p) => (
                            <option key={p._id} value={p._id}>
                                {p.name} ({p.category})
                            </option>
                        ))} */}
                        <option value="muscle">Build Muscle</option>
                        <option value="fatloss">Lose Fat</option>
                        <option value="fitness">General Fitness</option>
                        <option value="performance">Athletic Performance</option>
                    </select>
                    <Icon
                        icon="lucide:chevron-down"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-forge-silver pointer-events-none"
                        width="14"
                    />
                </div>
            </div>

            {/* Preferred Date */}
            <div>
                <label className="font-body text-[10px] font-bold text-forge-silver tracking-wider uppercase block mb-1">
                    Preferred Date *
                </label>
                <input
                    name="date"
                    type="date"
                    required
                    defaultValue={new Date().toISOString().split('T')[0]}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-forge-gray border border-forge-mid px-3 py-2 font-body text-sm text-white focus:outline-hidden focus:border-forge-orange transition-colors"
                />
            </div>

            {/* Preferred Time */}
            <div>
                <label className="font-body text-[10px] font-bold text-forge-silver tracking-wider uppercase block mb-1">
                    Preferred Time *
                </label>
                <div className="grid grid-cols-4 gap-2">
                    {TIME_SLOTS.map((t) => (
                        <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTime(t)}
                            className={`font-body text-xs px-2 py-1.5 border transition-colors cursor-pointer ${
                                selectedTime === t
                                    ? 'border-forge-orange text-white bg-forge-orange/10'
                                    : 'border-forge-mid text-forge-silverDark hover:border-forge-orange hover:text-white'
                            }`}
                        >
                            {new Date(`1970-01-01T${t}:00`).toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: '2-digit',
                            })}
                        </button>
                    ))}
                </div>
            </div>

            {/* Fitness Level */}
            <div>
                <label className="font-body text-[10px] font-bold text-forge-silver tracking-wider uppercase block mb-1">
                    Fitness Level
                </label>
                <div className="flex gap-2">
                    {['beginner', 'intermediate', 'advanced'].map((l) => (
                        <label key={l} className="flex-1 cursor-pointer">
                            <input
                                type="radio"
                                name="level"
                                value={l}
                                className="hidden peer"
                                defaultChecked={l === 'beginner'}
                            />
                            <span className="block font-body text-xs text-forge-silverDark border border-forge-mid px-2 py-1.5 text-center peer-checked:border-forge-orange peer-checked:text-white transition-colors capitalize">
                                {l}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Goal */}
            {/* <div>
                <label className="font-body text-[10px] font-bold text-forge-silver tracking-wider uppercase block mb-1">
                    Primary Goal
                </label>
                <div className="relative">
                    <select
                        name="goal"
                        className="w-full bg-forge-gray border border-forge-mid px-3 py-2 font-body text-sm text-white focus:outline-hidden focus:border-forge-orange transition-colors appearance-none"
                    >
                        <option value="muscle">Build Muscle</option>
                        <option value="fatloss">Lose Fat</option>
                        <option value="fitness">General Fitness</option>
                        <option value="performance">Athletic Performance</option>
                    </select>
                    <Icon
                        icon="lucide:chevron-down"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-forge-silver pointer-events-none"
                        width="14"
                    />
                </div>
            </div> */}

            {error && <p className="font-body text-xs text-red-500">{error}</p>}

            <button
                type="submit"
                disabled={loading}
                className="w-full font-heading tracking-widest text-sm text-white bg-forge-orange hover:bg-forge-orangeLight uppercase py-3 transition-colors orange-glow disabled:opacity-50 cursor-pointer"
            >
                {loading ? 'Processing...' : submitLabel}
            </button>
        </form>
    )
}
