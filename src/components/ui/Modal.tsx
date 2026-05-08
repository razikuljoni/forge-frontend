'use client'

import { useEffect, type ReactNode } from 'react'

interface ModalProps {
    open: boolean
    onClose: () => void
    children: ReactNode
}

export function Modal({ open, onClose, children }: ModalProps) {
    useEffect(() => {
        if (!open) return
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handler)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handler)
            document.body.style.overflow = ''
        }
    }, [open, onClose])

    if (!open) return null

    return (
        <div
            className="h-screen fixed inset-0 w-full z-60 flex items-center justify-center backdrop-blur-xs bg-black/50 "
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div
                className="bg-forge-dark border border-forge-mid w-full max-w-lg mx-4 p-6 relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}
