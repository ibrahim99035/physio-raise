'use client'

import { Card } from '@/components/ui/card'
import { Heart, Award, TrendingUp, Users } from 'lucide-react'

const iconMap: Record<string, any> = {
  Heart,
  Award,
  TrendingUp,
  Users,
}

interface Value {
  icon: string
  title: string
  description: string
}

interface CoreValuesProps {
  values: Value[]
}

export const CoreValues = ({ values }: CoreValuesProps) => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-accent">
          Our Core Values
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Guiding principles that drive our commitment to your recovery
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon]
            return (
              <Card 
                key={index} 
                className="group p-6 border border-accent/20 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-accent/10 rounded-full blur-lg group-hover:blur-xl transition-all" style={{width: '60px', height: '60px'}} />
                  <Icon className="w-10 h-10 text-accent group-hover:scale-125 transition-transform duration-500 relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}