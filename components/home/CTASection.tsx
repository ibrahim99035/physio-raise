'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle, Smartphone, Mail } from 'lucide-react'
import siteInfo from '@/data/siteInfo.json'

export const CTASection = () => {
  const { contact } = siteInfo

  return (
    <section className="relative py-24 px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground leading-tight">
          Begin Your <span className="text-accent">Recovery</span> Journey Today
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto">
          Take the first step toward restored mobility, pain relief, and optimal physical performance with expert clinical care
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-lg font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Schedule Appointment
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent/60 text-accent hover:bg-accent/10 px-8 py-6 text-lg rounded-lg font-semibold bg-transparent transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Free Initial Consultation
          </Button>
        </div>

        <p className="text-primary-foreground/70 mb-8 text-lg font-medium">Quick Contact Methods</p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <a href={`https://wa.me/${contact.whatsapp}`} className="group flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 hover:bg-accent/20 transition-all duration-300 border border-accent/20 hover:border-accent/50">
            <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
              <MessageCircle className="w-6 h-6 text-accent" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">WhatsApp</p>
              <span className="text-primary-foreground font-semibold group-hover:text-accent transition-colors">Message Us</span>
            </div>
          </a>
          <a href={`tel:${contact.phone}`} className="group flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 hover:bg-accent/20 transition-all duration-300 border border-accent/20 hover:border-accent/50">
            <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
              <Smartphone className="w-6 h-6 text-accent" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Phone</p>
              <span className="text-primary-foreground font-semibold group-hover:text-accent transition-colors">{contact.phone}</span>
            </div>
          </a>
          <a href={`mailto:${contact.email}`} className="group flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 hover:bg-accent/20 transition-all duration-300 border border-accent/20 hover:border-accent/50">
            <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Email</p>
              <span className="text-primary-foreground font-semibold group-hover:text-accent transition-colors">{contact.email}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}