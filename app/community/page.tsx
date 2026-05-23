"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, Heart, Award, Handshake } from 'lucide-react'

const communityOptions = [
  {
    icon: Users,
    title: 'Mentorship Program',
    description: 'Connect with experienced professionals who can guide your career journey and provide valuable insights.',
    href: '/coming-soon',
    cta: 'Find a Mentor',
  },
  {
    icon: Heart,
    title: 'Volunteer With Us',
    description: 'Share your skills and expertise to help young people in The Gambia reach their potential.',
    href: '/coming-soon',
    cta: 'Become a Volunteer',
  },
  {
    icon: Award,
    title: 'Ambassador Program',
    description: 'Represent SkillBridge at your institution and help spread our mission to more young people.',
    href: '/coming-soon',
    cta: 'Become an Ambassador',
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    description: 'Organizations and institutions can partner with us to create impact at scale.',
    href: '/coming-soon',
    cta: 'Explore Partnership',
  },
]

export default function CommunityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-navy transition-colors">Home</Link>
              <span>&gt;</span>
              <span className="text-navy font-medium">Community</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-navy">
              Join Our Community
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Be part of a growing network of young people, mentors, volunteers, and partners 
              working together to build skills, clarity, and opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Options */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {communityOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-white rounded-3xl border border-border hover:border-blue-glow/50 hover:shadow-xl hover:shadow-blue-glow/10 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-blue-light rounded-2xl mb-6 group-hover:bg-navy transition-colors">
                  <option.icon className="h-7 w-7 text-navy group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{option.title}</h3>
                <p className="text-muted-foreground mb-6">{option.description}</p>
                <Link
                  href={option.href}
                  className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-semibold rounded-xl hover:bg-navy-dark transition-colors"
                >
                  {option.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-blue-secondary" />
        <div className="absolute inset-0">
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-5"
            viewBox="0 0 600 300"
            fill="none"
          >
            <path
              d="M50 200 Q300 50 550 200"
              stroke="white"
              strokeWidth="30"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Make an Impact?
            </h2>
            <p className="mt-4 text-lg text-blue-light/90 max-w-xl mx-auto">
              Join our community and help shape the future of young people in The Gambia.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-8 px-8 py-4 bg-white text-navy font-semibold rounded-xl hover:bg-blue-light transition-colors shadow-lg"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
