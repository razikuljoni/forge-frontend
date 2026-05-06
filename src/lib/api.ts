import type {
    ApiOk,
    AuthResponse,
    Booking,
    Coach,
    MemberStory,
    Program,
    ScheduleSlot,
    User,
} from '@/types'

class ApiClient {
    private baseUrl: string

    constructor() {
        this.baseUrl = process.env.NEXT_PUBLIC_API_URL || ''
    }

    private getToken(): string | null {
        if (typeof window === 'undefined') return null
        return localStorage.getItem('forge_token')
    }

    private headers(init?: HeadersInit): HeadersInit {
        const h = new Headers(init)
        if (!h.has('Content-Type')) h.set('Content-Type', 'application/json')
        const token = this.getToken()
        if (token) h.set('Authorization', `Bearer ${token}`)
        return h
    }

    private async request<T>(path: string, init?: RequestInit): Promise<T> {
        const res = await fetch(`${this.baseUrl}/api/${path}`, {
            ...init,
            headers: this.headers(init?.headers),
        }).catch((e) => {
            throw new Error(e.message || 'API request failed')
        })
        const json = await res.json().catch(() => null)
        if (!res.ok || !json) throw new Error(json?.message || `Request failed (${res.status})`)
        return json
    }

    // Auth
    register(data: { name: string; email: string; password: string; phone?: string }) {
        return this.request<ApiOk<AuthResponse>>('auth/register', {
            method: 'POST',
            body: JSON.stringify(data),
        })
    }
    login(email: string, password: string) {
        return this.request<ApiOk<AuthResponse>>('auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        })
    }
    me() {
        return this.request<ApiOk<User>>('auth/me')
    }

    // Programs
    getPrograms() {
        return this.request<ApiOk<Program[]>>('programs')
    }

    // Coaches
    getCoaches() {
        return this.request<ApiOk<Coach[]>>('coaches')
    }
    getCoach(id: string) {
        return this.request<ApiOk<Coach>>(`coaches/${id}`)
    }

    // Schedule
    getSchedule() {
        return this.request<ApiOk<ScheduleSlot[]>>('schedule/week')
    }

    // Members
    getStories() {
        return this.request<ApiOk<MemberStory[]>>('members/stories')
    }

    // Bookings (auth required)
    createBooking(data: {
        program: string
        date: string
        time: string
        level?: string
        goal?: string
        notes?: string
    }) {
        return this.request<ApiOk<Booking>>('bookings', {
            method: 'POST',
            body: JSON.stringify(data),
        })
    }
    getBookings() {
        return this.request<ApiOk<Booking[]>>('bookings')
    }
    cancelBooking(id: string) {
        return this.request<ApiOk<{ id: string; status: string }>>(`bookings/${id}`, {
            method: 'DELETE',
        })
    }
}

export const api = new ApiClient()

// Server-side fetch (no auth token)
export async function fetchApi<T>(path: string): Promise<T> {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL
    const res = await fetch(`${baseUrl}/api/${path}`, { cache: 'no-store' })
    console.log('res ==> ', res)

    if (!res.ok) throw new Error(`API error: ${res.status}`)
    return res.json()
}
