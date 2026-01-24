'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Stethoscope, Dumbbell, TrendingUp, Heart, Aperture, Apple } from 'lucide-react'
import servicesData from '@/data/services.json'

const iconMap: Record<string, any> = {
  Stethoscope,
  Dumbbell,
  TrendingUp,
  Heart,
  Aperture,
  Apple,
}

export const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-primary">
          Our Services
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Comprehensive rehabilitation solutions for optimal recovery
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <Card
                key={index}
                className="group p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-accent/20 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-accent/50"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-accent/10 rounded-full blur-lg group-hover:blur-xl transition-all" style={{width: '60px', height: '60px'}} />
                  <Icon className="w-12 h-12 text-accent group-hover:scale-125 transition-transform duration-500 relative z-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <Button
                  variant="ghost"
                  className="text-accent hover:bg-accent/10 p-0 group/btn cursor-pointer"
                >
                  <span className="group-hover/btn:translate-x-1 transition-transform">Learn More</span>
                  <span className="ml-1 group-hover/btn:translate-x-1 transition-transform">→</span>
                </Button>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}