'use client'

import { useState, useEffect } from 'react'

interface AboutHeroProps {
  title: string
  description: string
}

export const AboutHero = ({ title, description }: AboutHeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-slate-900 via-background to-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 
          className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-accent transition-all duration-1000 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {title}
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-accent to-accent/30 mx-auto mb-8 rounded-full" />
        <p 
          className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {description}
        </p>
      </div>
    </section>
  )
}