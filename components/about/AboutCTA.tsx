'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

export const AboutCTA = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Start Your Recovery <span className="text-accent">Journey</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience the difference that personalized, expert care can make. Let's work together to restore your health and mobility.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-lg font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link href="/contact">
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Consultation
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent/40 text-accent hover:bg-accent/10 px-8 py-6 text-lg rounded-lg font-semibold"
            asChild
          >
            <Link href="/services">
              View Our Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}