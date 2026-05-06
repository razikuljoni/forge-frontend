'use client'

import { useEffect } from 'react'
import { Modal } from '@/components/ui/Modal'
import { useBookings } from '@/providers/BookingProvider'
import { useToast } from '@/providers/ToastProvider'

export function MyBookingsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const { bookings, refresh, cancel } = useBookings()
    const { toast } = useToast()

    useEffect(() => {
        if (open) refresh()
    }, [open, refresh])

    const handleCancel = async (id: string) => {
        try {
            await cancel(id)
            toast('Booking cancelled.', 'info')
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            toast(err.message || 'Failed to cancel.', 'error')
        }
    }

    return (
        <Modal open={open} onClose={onClose}>
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-mt hover:text-white transition-colors"
                aria-label="Close"
            >
                <i className="fas fa-times" />
            </button>
            <p className="font-bd text-or text-xs tracking-[0.3em] uppercase mb-1">Your Account</p>
            <h3 className="font-dp text-4xl text-white mb-5">MY BOOKINGS</h3>

            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                {bookings.length === 0 ? (
                    <div className="text-center py-10">
                        <i className="fas fa-calendar-xmark text-3xl text-mt mb-3 block" />
                        <p className="font-bd text-mt text-sm">No bookings yet.</p>
                    </div>
                ) : (
                    bookings.map((b) => (
                        <div key={b._id} className="bg-cd border border-bd p-4">
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <p className="font-dp text-xl text-white">
                                        {b.program?.name || 'Unknown'}
                                    </p>
                                    <p className="font-bd text-xs text-mt tracking-wider uppercase">
                                        {b.level || 'N/A'} / {b.goal}
                                    </p>
                                </div>
                                <span className="font-bd text-[10px] bg-or/20 text-or px-2 py-0.5 uppercase tracking-wider">
                                    {b.status}
                                </span>
                            </div>
                            <div className="flex gap-4 font-bd text-xs text-sv mb-2">
                                <span>
                                    <i className="fas fa-calendar mr-1 text-mt" />
                                    {b.date}
                                </span>
                                <span>
                                    <i className="fas fa-clock mr-1 text-mt" />
                                    {b.time}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="font-bd text-xs text-mt">
                                    Booked {new Date(b.createdAt).toLocaleDateString()}
                                </p>
                                {b.status === 'confirmed' && (
                                    <button
                                        onClick={() => handleCancel(b._id)}
                                        className="font-bd text-xs text-red-500/70 hover:text-red-400 transition-colors uppercase tracking-wider"
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </Modal>
    )
}
