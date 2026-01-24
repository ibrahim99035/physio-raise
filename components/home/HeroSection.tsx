'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import siteInfo from '@/data/siteInfo.json'

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const { hero, doctor } = siteInfo

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image with overlay */}
      <Image
        src={hero.backgroundImage}
        alt="Medical clinic background"
        fill
        className="object-cover -z-10"
        priority
        quality={100}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-background/70 to-slate-950/90 -z-10" />
      
      {/* Animated background elements */}
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-30' : ''
        }`}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main heading */}
        <h1
          className={`text-6xl md:text-7xl font-bold mb-6 transition-all duration-1000 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-primary animate-text-glow">{hero.title}</span>
        </h1>

        <p
          className={`text-2xl md:text-3xl font-semibold text-foreground mb-4 transition-all duration-1000 delay-100 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {hero.subtitle}
        </p>

        <p
          className={`text-lg text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Led by <span className="font-semibold text-foreground">{doctor.name}</span>
        </p>

        <p
          className={`text-lg text-foreground mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-300 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {hero.tagline}
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            Book Your Session
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg rounded-lg font-semibold bg-transparent cursor-pointer"
          >
            View Services
          </Button>
        </div>
      </div>
    </div>
  )
}