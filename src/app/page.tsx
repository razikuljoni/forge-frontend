import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Programs from '@/components/Programs'
import Coaches from '@/components/Coaches'
import Schedule from '@/components/Schedule'
import Stories from '@/components/Stories'
import BookingSection from '@/components/BookingSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
    return (
        <>
            <Navbar />
            <Hero />
            <Marquee />
            <Programs />
            <Coaches />
            <Schedule />
            <Stories />
            <BookingSection />
            <Contact />
            <Footer />
        </>
    )
}
