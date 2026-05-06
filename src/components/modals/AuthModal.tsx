'use client'

import { Modal } from '@/components/ui/Modal'
import { useAuth } from '@/providers/AuthProvider'
import { useToast } from '@/providers/ToastProvider'
import { useState, type FormEvent } from 'react'

function AuthModal({ open, onClose }: { open: boolean; onClose: (v: boolean) => void }) {
    const { login, register } = useAuth()
    const { toast } = useToast()
    const [mode, setMode] = useState<'login' | 'signup'>('login')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const resetAndClose = () => {
        setError('')
        setLoading(false)
        onClose(false)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        const form = e.currentTarget
        const data = Object.fromEntries(new FormData(form))

        try {
            if (mode === 'login') {
                await login(data.email as string, data.password as string)
                toast('Welcome back.', 'success')
            } else {
                if (data.password !== data.confirmPassword) {
                    setError('Passwords do not match.')
                    setLoading(false)
                    return
                }
                await register({
                    name: data.name as string,
                    email: data.email as string,
                    password: data.password as string,
                    phone: data.phone as string,
                })
                toast('Account created. Welcome to FORGE.', 'success')
            }
            resetAndClose()
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(err.message || 'Authentication failed.')
            setLoading(false)
        }
    }

    const toggleMode = () => {
        setMode((m) => (m === 'login' ? 'signup' : 'login'))
        setError('')
    }

    return (
        <Modal open={open} onClose={resetAndClose}>
            <button
                onClick={resetAndClose}
                className="absolute top-4 right-4 text-mt hover:text-white transition-colors"
                aria-label="Close"
            >
                <i className="fas fa-times" />
            </button>
            <p className="font-heading text-or text-xs tracking-[0.3em] uppercase mb-1">FORGE</p>
            <h3 className="font-heading text-4xl text-white mb-5">
                {mode === 'login' ? 'SIGN IN' : 'CREATE ACCOUNT'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3">
                {mode === 'signup' && (
                    <div>
                        <label className="font-body text-xs text-sv tracking-wider uppercase block mb-1">
                            Full Name
                        </label>
                        <input
                            name="name"
                            required
                            className="w-full bg-forge-gray border border-bd px-3 py-2 font-body text-sm text-white focus:outline-hidden focus:border-or transition-colors"
                            placeholder="Your name"
                        />
                    </div>
                )}
                <div>
                    <label className="font-body text-xs text-sv tracking-wider uppercase block mb-1">
                        Email
                    </label>
                    <input
                        name="email"
                        type="email"
                        required
                        className="w-full bg-forge-gray border border-bd px-3 py-2 font-body text-sm text-white focus:outline-hidden focus:border-or transition-colors"
                        placeholder="you@email.com"
                    />
                </div>
                {mode === 'signup' && (
                    <div>
                        <label className="font-body text-xs text-sv tracking-wider uppercase block mb-1">
                            Phone
                        </label>
                        <input
                            name="phone"
                            type="tel"
                            className="w-full bg-forge-gray border border-bd px-3 py-2 font-body text-sm text-white focus:outline-hidden focus:border-or transition-colors"
                            placeholder="(555) 000-0000"
                        />
                    </div>
                )}
                <div>
                    <label className="font-body text-xs text-sv tracking-wider uppercase block mb-1">
                        Password
                    </label>
                    <input
                        name="password"
                        type="password"
                        required
                        minLength={6}
                        className="w-full bg-forge-gray border border-bd px-3 py-2 font-body text-sm text-white focus:outline-hidden focus:border-or transition-colors"
                        placeholder="Min 6 characters"
                    />
                </div>
                {mode === 'signup' && (
                    <div>
                        <label className="font-body text-xs text-sv tracking-wider uppercase block mb-1">
                            Confirm Password
                        </label>
                        <input
                            name="confirmPassword"
                            type="password"
                            required
                            minLength={6}
                            className="w-full bg-forge-gray border border-bd px-3 py-2 font-body text-sm text-white focus:outline-hidden focus:border-or transition-colors"
                            placeholder="Repeat password"
                        />
                    </div>
                )}

                {error && <p className="font-body text-xs text-red-500">{error}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-body text-sm tracking-widest text-white bg-or hover:bg-orl uppercase py-2.5 transition-colors disabled:opacity-50"
                >
                    {loading ? 'Processing...' : mode === 'login' ? 'Sign In' : 'Create Account'}
                </button>
            </form>

            <div className="mt-4 text-center">
                <button
                    onClick={toggleMode}
                    className="font-body text-sm text-mt hover:text-or transition-colors"
                >
                    {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                    <span className="text-or underline">
                        {mode === 'login' ? 'Sign Up' : 'Sign In'}
                    </span>
                </button>
            </div>
        </Modal>
    )
}

export default AuthModal
