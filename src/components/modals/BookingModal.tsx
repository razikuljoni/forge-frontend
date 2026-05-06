"use client";

import { Modal } from "@/components/ui/Modal";
import { api } from "@/lib/api";
import { useAuth } from "@/providers/AuthProvider";
import { useBookings } from "@/providers/BookingProvider";
import { useToast } from "@/providers/ToastProvider";
import type { BookingPrefill, Program } from "@/types";
import { useEffect, useState, type FormEvent } from "react";

const TIME_SLOTS = ["06:00", "07:30", "09:00", "12:00", "17:00", "18:30", "20:00"];

function BookingModal({
    open,
    onClose,
    prefill,
}: {
    open: boolean;
    onClose: () => void;
    prefill?: BookingPrefill;
}) {
    const { user } = useAuth();
    const { create } = useBookings();
    const { toast } = useToast();

    const [programs, setPrograms] = useState<Program[]>([]);
    const [selectedTime, setSelectedTime] = useState(prefill?.time || "");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (open) {
            api.getPrograms()
                .then((res) => setPrograms(res.data))
                .catch(() => {});
            // setSelectedTime(prefill?.time || "");
        }
    }, [open, prefill?.time]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedTime) {
            setError("Please select a time.");
            return;
        }

        setLoading(true);
        setError("");
        const data = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await create({
                program: data.program as string,
                date: data.date as string,
                time: selectedTime,
                level: data.level as string,
                goal: data.goal as string,
                notes: data.notes as string,
            });
            toast(`Trial booked for ${data.date} at ${selectedTime}. See you at FORGE.`, "success");
            onClose();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(err.message || "Booking failed.");
            setLoading(false);
            toast(err.message || "Booking failed.", "error");
        }
    };

    if (error) toast(error, "error");

    return (
        <Modal open={open} onClose={onClose}>
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-mt hover:text-white transition-colors"
                aria-label="Close"
            >
                <i className="fas fa-times" />
            </button>
            <p className="font-bd text-or text-xs tracking-[0.3em] uppercase mb-1">Free Trial</p>
            <h3 className="font-dp text-4xl text-white mb-5">BOOK YOUR CLASS</h3>

            <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                    <label className="font-bd text-xs text-sv tracking-wider uppercase block mb-1">
                        Full Name
                    </label>
                    <input
                        name="name"
                        required
                        defaultValue={user?.name}
                        className="w-full bg-cd border border-bd px-3 py-2 font-bd text-sm text-white focus:outline-hidden focus:border-or transition-colors"
                    />
                </div>
                <div>
                    <label className="font-bd text-xs text-sv tracking-wider uppercase block mb-1">
                        Email
                    </label>
                    <input
                        name="email"
                        type="email"
                        required
                        defaultValue={user?.email}
                        className="w-full bg-cd border border-bd px-3 py-2 font-bd text-sm text-white focus:outline-hidden focus:border-or transition-colors"
                    />
                </div>
                <div>
                    <label className="font-bd text-xs text-sv tracking-wider uppercase block mb-1">
                        Phone
                    </label>
                    <input
                        name="phone"
                        type="tel"
                        defaultValue={user?.phone}
                        className="w-full bg-cd border border-bd px-3 py-2 font-bd text-sm text-white focus:outline-hidden focus:border-or transition-colors"
                    />
                </div>
                <div>
                    <label className="font-bd text-xs text-sv tracking-wider uppercase block mb-1">
                        Program
                    </label>
                    <select
                        name="program"
                        required
                        defaultValue={prefill?.programId}
                        className="w-full bg-cd border border-bd px-3 py-2 font-bd text-sm text-white focus:outline-hidden focus:border-or transition-colors"
                    >
                        <option value="">Select a program</option>
                        {programs.map((p) => (
                            <option key={p._id} value={p._id}>
                                {p.name} ({p.category})
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="font-bd text-xs text-sv tracking-wider uppercase block mb-1">
                        Preferred Date
                    </label>
                    <input
                        name="date"
                        type="date"
                        required
                        defaultValue={new Date().toISOString().split("T")[0]}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full bg-cd border border-bd px-3 py-2 font-bd text-sm text-white focus:outline-hidden focus:border-or transition-colors"
                    />
                </div>
                <div>
                    <label className="font-bd text-xs text-sv tracking-wider uppercase block mb-1">
                        Preferred Time
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                        {TIME_SLOTS.map((t) => (
                            <button
                                key={t}
                                type="button"
                                onClick={() => setSelectedTime(t)}
                                className={`font-bd text-xs px-2 py-1.5 border transition-colors ${selectedTime === t ? "border-or text-white bg-or/10" : "border-bd text-mt hover:border-or hover:text-white"}`}
                            >
                                {new Date(`1970-01-01T${t}:00`).toLocaleTimeString("en-US", {
                                    hour: "numeric",
                                    minute: "2-digit",
                                })}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="font-bd text-xs text-sv tracking-wider uppercase block mb-1">
                        Fitness Level
                    </label>
                    <div className="flex gap-2">
                        {["beginner", "intermediate", "advanced"].map((l) => (
                            <label key={l} className="flex-1 cursor-pointer">
                                <input
                                    type="radio"
                                    name="level"
                                    value={l}
                                    className="hidden peer"
                                    defaultChecked={l === "intermediate"}
                                />
                                <span className="block font-bd text-xs text-mt border border-bd px-2 py-1.5 text-center peer-checked:border-or peer-checked:text-white transition-colors capitalize">
                                    {l}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="font-bd text-xs text-sv tracking-wider uppercase block mb-1">
                        Primary Goal
                    </label>
                    <select
                        name="goal"
                        className="w-full bg-cd border border-bd px-3 py-2 font-bd text-sm text-white focus:outline-hidden focus:border-or transition-colors"
                    >
                        <option value="muscle">Build Muscle</option>
                        <option value="fatloss">Lose Fat</option>
                        <option value="fitness">General Fitness</option>
                        <option value="performance">Athletic Performance</option>
                    </select>
                </div>

                {error && <p className="font-bd text-xs text-red-500">{error}</p>}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-bd text-sm tracking-widest text-white bg-or hover:bg-orl uppercase py-3 transition-colors orange-glow disabled:opacity-50"
                >
                    {loading ? "Booking..." : "Confirm Booking"}
                </button>
            </form>
        </Modal>
    );
}

export default BookingModal;
