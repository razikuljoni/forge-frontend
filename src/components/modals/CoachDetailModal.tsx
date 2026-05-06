'use client'

import { Modal } from '@/components/ui/Modal'
import { useBookings } from '@/providers/BookingProvider'
import type { Coach } from '@/types'

export function CoachDetailModal({
    open,
    onClose,
    coach,
}: {
    open: boolean
    onClose: () => void
    coach: Coach
}) {
    const { openBooking } = useBookings()

    const handleBook = () => {
        onClose()
        setTimeout(() => openBooking({ programName: `${coach.name.split(' ')[0]}'s Session` }), 200)
    }

    return (
        <Modal open={open} onClose={onClose}>
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-mt hover:text-white transition-colors z-10"
                aria-label="Close"
            >
                <i className="fas fa-times" />
            </button>
            <div className="relative h-64 -mx-6 -mt-6 mb-4 overflow-hidden vignette">
                <img
                    src={coach.photo}
                    alt={coach.name}
                    className="w-full h-full object-cover forge-photo"
                />
                <div className="absolute bottom-4 left-6">
                    <p className="font-dp text-4xl text-white drop-shadow-lg">
                        {coach.name.toUpperCase()}
                    </p>
                    <p className="font-bd text-sv text-sm tracking-wider uppercase">
                        {coach.title}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
                {Object.entries(coach.stats).map(([k, v]) => (
                    <div key={k} className="bg-cd border border-bd p-3 text-center">
                        <p className="font-dp text-2xl text-or">{v}</p>
                        <p className="font-bd text-[10px] text-mt uppercase tracking-wider">{k}</p>
                    </div>
                ))}
            </div>

            <div className="mb-4">
                <p className="font-bd text-xs text-or tracking-widest uppercase mb-2">
                    Certifications
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {coach.certifications.map((c) => (
                        <span key={c} className="font-bd text-xs bg-el text-sv px-2 py-1">
                            {c}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <p className="font-bd text-xs text-or tracking-widest uppercase mb-2">
                    Specialties
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {coach.specialties.map((s) => (
                        <span
                            key={s}
                            className="font-bd text-xs border border-or/30 text-or px-2 py-1"
                        >
                            {s}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <p className="font-bd text-xs text-or tracking-widest uppercase mb-2">About</p>
                <p className="font-bd text-sv text-sm leading-relaxed">{coach.bio}</p>
            </div>

            <button
                onClick={handleBook}
                className="w-full font-bd text-sm tracking-widest text-white bg-or hover:bg-orl uppercase py-2.5 transition-colors"
            >
                Book a Session with {coach.name.split(' ')[0]}
            </button>
        </Modal>
    )
}
