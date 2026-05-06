import { AuthProvider } from '@/providers/AuthProvider'
import { BookingProvider } from '@/providers/BookingProvider'
import { ToastProvider } from '@/providers/ToastProvider'
import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const oswald = Oswald({
    subsets: ['latin'],
    variable: '--font-oswald',
})

export const metadata: Metadata = {
    title: 'FORGE — Elite Fitness Studio',
    description: 'Elite Training Facility',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`scroll-smooth ${inter.variable} ${oswald.variable}`}>
            <body className="texture-overlay font-body">
                <AuthProvider>
                    <ToastProvider>
                        <BookingProvider>{children}</BookingProvider>
                    </ToastProvider>
                </AuthProvider>
            </body>
        </html>
    )
}
