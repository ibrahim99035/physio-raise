'use client'

import { useState } from 'react'
import faqsData from '@/data/faqs.json'

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="faqs" className="py-20 px-6 bg-gradient-to-b from-background to-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-accent">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Find answers to common questions about our services and treatments
        </p>

        <div className="space-y-4">
          {faqsData.faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-accent/30 rounded-xl overflow-hidden transition-all duration-500 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.08}s both`,
              }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/10 transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-foreground text-left group-hover:text-accent transition-colors">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <span className="text-accent text-xl">+</span>
                </div>
              </button>
              
              {activeIndex === index && (
                <div className="px-6 pb-4 border-t border-accent/20 animate-fade-scale">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}