'use client'

import { FloatingParticles } from '@/components/layout'
import { ServicesHero, ServicesGrid, ServicesCTA } from '@/components/services'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

import servicesData from '@/data/servicesDetails.json'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <FloatingParticles />
      <Navigation />
      
      <ServicesHero 
        title={servicesData.hero.title}
        description={servicesData.hero.description}
      />
      
      <ServicesGrid services={servicesData.services} />
      
      <ServicesCTA 
        title={servicesData.cta.title}
        titleAccent={servicesData.cta.titleAccent}
        buttonText={servicesData.cta.buttonText}
        buttonLink={servicesData.cta.buttonLink}
      />
      
      <Footer />
    </main>
  )
}