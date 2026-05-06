export interface User {
    id: string
    name: string
    email: string
    phone?: string
    role: string
}

export interface Program {
    _id: string
    slug: string
    name: string
    description: string
    category: 'muscle' | 'fatloss' | 'fitness'
    level: string
    duration: string
    frequency: string
    sessionLength: string
    maxCapacity: number
    intensity: number
}

export interface Coach {
    _id: string
    name: string
    title: string
    photo: string
    certifications: string[]
    yearsExperience: number
    specialties: string[]
    bio: string
    stats: Record<string, string>
}

export interface ScheduleSlot {
    _id: string
    dayOfWeek: number
    startTime: string
    program: Program
    capacity: number
}

export interface MemberStory {
    _id: string
    name: string
    age: number
    program: string
    duration: string
    photo: string
    metrics: Record<string, [string, string]>
    quote: string
    tags: string[]
}

export interface Booking {
    _id: string
    program: Program
    date: string
    time: string
    level: string
    goal: string
    notes: string
    status: string
    createdAt: string
}

export interface AuthResponse {
    token: string
    user: User
}

export interface ApiOk<T> {
    data: T
    message?: string
}

export interface BookingPrefill {
    programId?: string
    programName?: string
    time?: string
}
