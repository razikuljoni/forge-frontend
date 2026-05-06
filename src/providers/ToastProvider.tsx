'use client'

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'

type ToastType = 'success' | 'error' | 'info'
interface Toast {
    id: number
    message: string
    type: ToastType
}
interface ToastContextType {
    toast: (message: string, type?: ToastType) => void
}

const ToastContext = createContext<ToastContextType | null>(null)

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([])

    const addToast = useCallback((message: string, type: ToastType = 'info') => {
        const id = Date.now()
        setToasts((t) => [...t, { id, message, type }])
        setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000)
    }, [])

    return (
        <ToastContext.Provider value={{ toast: addToast }}>
            {children}
            <div
                className="fixed top-16 right-4 z-[70] flex flex-col gap-2 w-80"
                aria-live="polite"
            >
                {toasts.map((t) => (
                    <div
                        key={t.id}
                        className="bg-dk border border-sv/30 px-4 py-3 flex items-start gap-3 toast-in"
                    >
                        <i
                            className={`fas ${t.type === 'success' ? 'fa-check-circle text-green-400' : t.type === 'error' ? 'fa-exclamation-circle text-red-400' : 'fa-info-circle text-sv'} mt-0.5`}
                        />
                        <p className="font-bd text-sm text-sv leading-snug">{t.message}</p>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    )
}

export function useToast() {
    const ctx = useContext(ToastContext)
    if (!ctx) throw new Error('useToast must be used within ToastProvider')
    return ctx
}
