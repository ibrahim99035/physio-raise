'use client'

import { Card } from '@/components/ui/card'
import { MapPin, Clock } from 'lucide-react'
import siteInfo from '@/data/siteInfo.json'

export const LocationSection = () => {
  const { location, hours } = siteInfo

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-accent">
          Visit Our Clinic
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Conveniently located with flexible scheduling for your rehabilitation needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="group p-8 border border-accent/30 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-accent/60 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20" style={{animation: 'slideUp 0.6s ease-out 0.2s both'}}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <MapPin className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Clinic Location</h3>
              </div>
            </div>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              {location.address}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">{location.city}</p>
          </Card>

          <Card className="group p-8 border border-accent/30 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-accent/60 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20" style={{animation: 'slideUp 0.6s ease-out 0.35s both'}}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Clock className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Clinic Hours</h3>
              </div>
            </div>
            <div className="space-y-4 text-lg">
              <div className="flex justify-between items-center pb-3 border-b border-accent/20">
                <span className="text-muted-foreground">{hours.weekdays.days}</span>
                <span className="text-foreground font-semibold text-accent">{hours.weekdays.time}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-accent/20">
                <span className="text-muted-foreground">{hours.saturday.days}</span>
                <span className="text-foreground font-semibold text-accent">{hours.saturday.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">{hours.sunday.days}</span>
                <span className="text-muted-foreground font-semibold">{hours.sunday.time}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}