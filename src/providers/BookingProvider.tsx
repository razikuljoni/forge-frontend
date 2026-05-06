"use client";

import BookingModal from "@/components/modals/BookingModal";
import { api } from "@/lib/api";
import type { Booking, BookingPrefill } from "@/types";
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

interface BookingContextType {
    bookings: Booking[];
    refresh: () => Promise<void>;
    create: (data: {
        program: string;
        date: string;
        time: string;
        level?: string;
        goal?: string;
        notes?: string;
    }) => Promise<void>;
    cancel: (id: string) => Promise<void>;
    openBooking: (prefill?: BookingPrefill) => void;
    closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [prefill, setPrefill] = useState<BookingPrefill | undefined>(undefined);

    const refresh = useCallback(async () => {
        try {
            const res = await api.getBookings();
            setBookings(res.data);
        } catch {
            /* not authenticated - ignore */
        }
    }, []);

    const create = useCallback(
        async (data: Parameters<typeof api.createBooking>[0]) => {
            await api.createBooking(data);
            await refresh();
        },
        [refresh],
    );

    const cancel = useCallback(
        async (id: string) => {
            await api.cancelBooking(id);
            await refresh();
        },
        [refresh],
    );

    const openBooking = useCallback((prefillData?: BookingPrefill) => {
        setPrefill(prefillData);
        setIsOpen(true);
    }, []);

    const closeBooking = useCallback(() => setIsOpen(false), []);

    return (
        <BookingContext.Provider
            value={{ bookings, refresh, create, cancel, openBooking, closeBooking }}
        >
            {children}
            <BookingModal open={isOpen} onClose={closeBooking} prefill={prefill} />
        </BookingContext.Provider>
    );
}

export function useBookings() {
    const ctx = useContext(BookingContext);
    if (!ctx) throw new Error("useBookings must be used within BookingProvider");
    return ctx;
}
