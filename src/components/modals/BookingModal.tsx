'use client'

import BookingForm from '@/components/ui/BookingForm'
import { Modal } from '@/components/ui/Modal'
import { useAuth } from '@/providers/AuthProvider'
import { useBookings } from '@/providers/BookingProvider'
import type { BookingPrefill } from '@/types'
import { useState } from 'react'
import toast from 'react-hot-toast'

function BookingModal({
    open,
    onClose,
    prefill,
}: {
    open: boolean
    onClose: () => void
    prefill?: BookingPrefill
}) {
    const { user } = useAuth()
    const { create } = useBookings()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (values: Record<string, string>) => {
        if (!values.time) {
            setError('Please select a time.')
            return
        }

        setLoading(true)
        setError('')

        try {
            // await create({
            //     program: values.program,
            //     date: values.date,
            //     time: values.time,
            //     level: values.level,
            //     goal: values.goal,
            //     notes: values.notes || '',
            // })
            setTimeout(() => {
                setLoading(false)
                toast.success(
                    `Trial booked for ${values.date} at ${values.time}. See you at FORGE.`,
                )
                onClose()
            }, 1500)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(err.message || 'Booking failed.')
            setLoading(false)
            toast.error(err.message || 'Booking failed.')
        }
    }

    return (
        <Modal open={open} onClose={onClose}>
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-forge-silverDark hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
            >
                <i className="fas fa-times" />
            </button>
            <p className="font-body text-forge-orange text-xs tracking-[0.3em] uppercase mb-1">
                Free Trial
            </p>
            <h3 className="font-heading text-4xl text-white mb-5">BOOK YOUR CLASS</h3>

            <BookingForm
                onSubmit={handleSubmit}
                defaults={{
                    name: user?.name,
                    email: user?.email,
                    phone: user?.phone,
                    programId: prefill?.programId,
                    time: prefill?.time,
                }}
                submitLabel="Confirm Booking"
                loading={loading}
                error={error}
            />
        </Modal>
    )
}

export default BookingModal
