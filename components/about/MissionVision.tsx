'use client'

import { Card } from '@/components/ui/card'
import { Target, Eye } from 'lucide-react'

interface MissionVisionProps {
  mission: {
    title: string
    description: string
  }
  vision: {
    title: string
    description: string
  }
}

export const MissionVision = ({ mission, vision }: MissionVisionProps) => {
  return (
    <section id="approach" className="py-20 px-6 bg-gradient-to-b from-background to-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <Card className="group p-8 border border-accent/20 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Target className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-3xl font-bold text-accent">{mission.title}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {mission.description}
            </p>
          </Card>

          {/* Vision */}
          <Card className="group p-8 border border-accent/20 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Eye className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-3xl font-bold text-accent">{vision.title}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {vision.description}
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}