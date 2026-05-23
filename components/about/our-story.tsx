"use client"

import { motion } from 'framer-motion'
import { MessageSquare, Lightbulb, GraduationCap, Rocket } from 'lucide-react'

const storySteps = [
  {
    icon: MessageSquare,
    title: 'The Problem',
    description: 'Young people lack the skills, clarity and exposure they need to succeed.',
  },
  {
    icon: Lightbulb,
    title: 'Our Response',
    description: 'We created a structured program to close the gap intentionally.',
  },
  {
    icon: GraduationCap,
    title: 'Launch at UTG',
    description: 'We start at UTG to build, learn and refine our model.',
  },
  {
    icon: Rocket,
    title: 'Our Vision',
    description: 'Expanding to empower young people across The Gambia.',
  },
]

export default function OurStory() {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">Our Story</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {storySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-gold rounded-full mb-4 shadow-lg">
                    <step.icon className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}