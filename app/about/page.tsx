'use client'

import { FloatingParticles } from '@/components/layout'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { 
  AboutHero, 
  AboutDoctor, 
  MissionVision, 
  CoreValues, 
  RecoveryProtocol,
  Achievements,
  AboutCTA 
} from '@/components/about'
import aboutData from '@/data/aboutDetails.json'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <FloatingParticles />
      <Navigation />
      
      <AboutHero 
        title={aboutData.hero.title}
        description={aboutData.hero.description}
      />
      
      <AboutDoctor />
      
      <MissionVision 
        mission={aboutData.mission}
        vision={aboutData.vision}
      />
      
      <CoreValues values={aboutData.values} />
      
      <RecoveryProtocol steps={aboutData.recoverySteps} />
      
      <Achievements achievements={aboutData.achievements} />
      
      <AboutCTA />
      
      <Footer />
    </main>
  )
}