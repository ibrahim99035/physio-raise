'use client'

import { FloatingParticles } from '@/components/layout'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import {
  HeroSection,
  ServicesSection,
  OffersSection,
  PhilosophySection,
  DoctorSection,
  LocationSection,
  GallerySection,
  FAQSection,
  TestimonialSection,
  ConditionsSection,
  CTASection,
  TeamSection,
} from '@/components/home'

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingParticles />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <OffersSection />
      <PhilosophySection />
      <DoctorSection />
      <TeamSection />
      <LocationSection />
      <GallerySection />
      <FAQSection />
      <TestimonialSection />
      <ConditionsSection />
      <CTASection />
      <Footer />
    </main>
  )
}