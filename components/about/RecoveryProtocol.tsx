'use client'

interface Step {
  number: string
  title: string
  description: string
}

interface RecoveryProtocolProps {
  steps: Step[]
}

export const RecoveryProtocol = ({ steps }: RecoveryProtocolProps) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900/30 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-accent">
          Our Recovery Protocol
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          A proven 4-step approach to comprehensive rehabilitation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-center text-center"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              {/* Number Badge */}
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/80 text-accent-foreground font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/30 relative z-10">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}