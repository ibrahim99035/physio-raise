'use client'

import { FloatingParticles } from '@/components/layout'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactHero, ContactInfo, ContactForm, ContactMap } from '@/components/contact'
import contactData from '@/data/contactDetails.json'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <FloatingParticles />
      <Navigation />
      
      <ContactHero 
        title={contactData.hero.title}
        description={contactData.hero.description}
      />

      {/* Contact Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm 
              title={contactData.form.title}
              subtitle={contactData.form.subtitle}
            />
          </div>
        </div>
      </section>

      <ContactMap />
      
      <Footer />
    </main>
  )
}