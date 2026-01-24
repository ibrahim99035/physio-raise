'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, Phone, MessageCircle } from 'lucide-react'
import siteInfo from '@/data/siteInfo.json'

interface ServicesCTAProps {
  title: string
  titleAccent: string
  buttonText: string
  buttonLink: string
}

export const ServicesCTA = ({ title, titleAccent, buttonText, buttonLink }: ServicesCTAProps) => {
  const { contact } = siteInfo

  return (
    <section className="relative py-24 px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          {title.replace(titleAccent, '')}
          <span className="text-accent">{titleAccent}</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Take the first step toward restored mobility and optimal health. Our expert team is ready to create a personalized treatment plan for you.
        </p>

        {/* Primary CTA */}
        <div className="mb-12">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-lg font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 cursor-pointer"
            asChild
          >
            <Link href={buttonLink}>
              <Calendar className="w-5 h-5 mr-2" />
              {buttonText}
            </Link>
          </Button>
        </div>

        {/* Quick Contact Options */}
        <div className="border-t border-accent/20 pt-8">
          <p className="text-sm text-muted-foreground mb-6">Or contact us directly:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`tel:${contact.phone}`}
              className="group flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 hover:bg-accent/20 transition-all duration-300 border border-accent/20 hover:border-accent/50"
            >
              <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Call Us</p>
                <span className="text-foreground font-semibold group-hover:text-accent transition-colors">
                  {contact.phone}
                </span>
              </div>
            </a>

            <a 
              href={`https://wa.me/${contact.whatsapp}`}
              className="group flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 hover:bg-accent/20 transition-all duration-300 border border-accent/20 hover:border-accent/50"
            >
              <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">WhatsApp</p>
                <span className="text-foreground font-semibold group-hover:text-accent transition-colors">
                  Message Us
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}