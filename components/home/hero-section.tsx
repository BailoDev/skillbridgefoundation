"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Link2, Layers, GraduationCap, Users } from 'lucide-react'

const trustItems = [
  {
    icon: Layers,
    title: '4 Core Pillars',
    description: 'A complete development journey',
  },
  {
    icon: GraduationCap,
    title: 'Career-Focused',
    description: 'Practical skills and clarity for education and work',
  },
  {
    icon: Users,
    title: 'Youth-Focused',
    description: 'Empowering learners at every stage of their journey',
  },
]

function DotGridAccent({ className }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width="70"
      height="100"
      viewBox="0 0 70 100"
      fill="none"
    >
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * 16 + 8}
            cy={row * 16 + 8}
            r="2.5"
            fill="#7BA3D8"
            opacity="0.5"
          />
        ))
      )}
    </svg>
  )
}

function PatternOverlay({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg width="100%" height="100%" className="opacity-[0.03]">
        <defs>
          <pattern id="lines" patternUnits="userSpaceOnUse" width="100%" height="3">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="#1C376B" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lines)" />
      </svg>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-4 sm:pt-16 lg:pt-20 overflow-hidden bg-gradient-to-b from-white via-white to-blue-light/30">
      {/* Dot grid accents - positioned in corners */}
      <DotGridAccent className="top-28 left-6 lg:left-16" />
      <DotGridAccent className="top-28 right-6 lg:right-16" />
      <DotGridAccent className="bottom-32 left-6 lg:left-16" />
      <DotGridAccent className="bottom-32 right-6 lg:right-16" />

      {/* Bridge hero background image — bottom-anchored, clearly visible with blue tint */}
      <div className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none z-[1]">
        {/* Soft top fade only — preserves full visibility at bottom */}
        <div className="absolute top-0 left-0 right-0 h-[35%] bg-gradient-to-b from-white to-transparent z-[2]" />
        <Image
          src="/images/hero_bg.png"
          alt=""
          fill
          className="object-cover object-bottom"
          style={{
            opacity: 0.35,
            filter: 'grayscale(30%) hue-rotate(195deg) saturate(0.7) brightness(1.1)',
          }}
          priority
        />
      </div>

      {/* Full bridge logo watermark - centered at bottom with blue tint */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] lg:w-[1100px] h-[500px] lg:h-[650px] pointer-events-none">
        <div className="relative w-full h-full opacity-[0.06]">
          <Image
            src="/images/skillbridge-logo.png"
            alt=""
            fill
            className="object-contain object-bottom"
            style={{ 
              filter: 'brightness(0) saturate(100%) invert(18%) sepia(45%) saturate(1200%) hue-rotate(193deg) brightness(95%) contrast(95%)'
            }}
          />
        </div>
        <PatternOverlay />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Launch Partner Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-navy shadow-sm">
              <Link2 className="h-4 w-4 text-navy" />
              Bridging Potential, Building Futures
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 text-4xl sm:text-5xl lg:text-[56px] font-serif font-bold text-navy leading-[1.1] tracking-tight text-balance"
          >
            Building Skills, Clarity &<br />
            Opportunity for Gambian Youth
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            SkillBridge Foundation equips young people with practical digital skills, 
            learning strategies, career clarity, and professional exposure to thrive in 
            education, work, and life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-dark transition-colors shadow-md"
            >
              Join Programs
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-navy font-semibold rounded-lg border-2 border-navy/20 hover:border-navy/40 hover:bg-gray-50 transition-colors"
            >
              Explore Our Mission
            </Link>
          </motion.div>

          {/* Decorative divider line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 mb-8 mx-auto w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
          />

          {/* Trust Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {trustItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-3 text-left"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-blue-light/60 rounded-full border border-blue-glow/30">
                  <item.icon className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}