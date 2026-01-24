'use client'

import Image from 'next/image'
import { Stethoscope, Activity, Heart } from 'lucide-react'
import siteInfo from '@/data/siteInfo.json'

const iconMap: Record<string, any> = {
  Stethoscope,
  Activity,
  Heart,
}

export const DoctorSection = () => {
  const { doctor } = siteInfo

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center animate-float">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-primary/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <Image
                src={doctor.image}
                alt={`${doctor.name} - ${doctor.title}`}
                width={400}
                height={500}
                className="rounded-2xl shadow-2xl shadow-accent/30 relative z-10 group-hover:shadow-3xl transition-shadow duration-500"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/15 rounded-full blur-3xl group-hover:bg-accent/25 transition-all" />
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-4 text-accent animate-text-glow">
              {doctor.name}
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-accent to-accent/30 mb-6 rounded-full" />
            <p className="text-sm text-accent font-semibold tracking-wider uppercase mb-4">Professional Credentials</p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {doctor.bio}
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {doctor.expertise}
            </p>

            <div className="flex flex-col gap-4">
              {doctor.credentials.map((credential, index) => {
                const Icon = iconMap[credential.icon]
                return (
                  <div key={index} className="group flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors">
                    <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-foreground font-semibold">{credential.title}</p>
                      <p className="text-sm text-muted-foreground">{credential.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}