'use client'

import { useState, useEffect } from 'react'

export const PhilosophySection = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-accent">
          Clinical Recovery Protocol
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Our evidence-based 4-step therapeutic approach to comprehensive rehabilitation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Add your 4-step protocol content here */}
        </div>
      </div>
    </section>
  )
}