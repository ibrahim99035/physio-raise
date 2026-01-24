'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Stethoscope, 
  Dumbbell, 
  TrendingUp, 
  Heart, 
  Aperture, 
  Apple,
  CheckCircle,
  ArrowRight 
} from 'lucide-react'

const iconMap: Record<string, any> = {
  Stethoscope,
  Dumbbell,
  TrendingUp,
  Heart,
  Aperture,
  Apple,
}

interface Service {
  id: string
  icon: string
  title: string
  description: string
  benefits: string[]
  image?: string
}

interface ServicesGridProps {
  services: Service[]
}

export const ServicesGrid = ({ services }: ServicesGridProps) => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <Card
                key={service.id}
                id={service.id}
                className="group p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-accent/20 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-accent/50"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-accent/10 rounded-full blur-lg group-hover:blur-xl transition-all" style={{width: '60px', height: '60px'}} />
                  <Icon className="w-12 h-12 text-accent group-hover:scale-125 transition-transform duration-500 relative z-10" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 group/item">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <Button 
                  className="text-accent hover:bg-accent/10 p-0 group/btn cursor-pointer w-full justify-start" 
                  variant="ghost"
                >
                  <span className="group-hover/btn:translate-x-1 transition-transform">Learn More</span>
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform w-4 h-4" />
                </Button>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}