'use client'

import { Sparkles, Heart, Dumbbell, TrendingUp, Stethoscope, Activity } from 'lucide-react'
import conditionsData from '@/data/conditions.json'

const iconMap: Record<string, any> = {
  Sparkles,
  Heart,
  Dumbbell,
  TrendingUp,
  Stethoscope,
  Activity,
}

export const ConditionsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-accent">
          Specialized Medical Conditions & Education
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Dr. Mostafa Ezzat specializes in treating various medical conditions with proven therapeutic expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conditionsData.conditions.map((condition, index) => {
            const Icon = iconMap[condition.icon]
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-accent/30 rounded-2xl hover:border-accent/60 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2 cursor-pointer"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="mb-4 relative">
                    <div className="absolute inset-0 bg-accent/10 rounded-full blur-lg group-hover:blur-xl transition-all" style={{width: '60px', height: '60px'}} />
                    <Icon className="w-12 h-12 text-accent group-hover:scale-125 transition-transform duration-500 relative z-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {condition.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{condition.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}