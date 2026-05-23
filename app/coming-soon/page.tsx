"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock } from 'lucide-react'

export default function ComingSoonPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-white to-blue-light/30">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center w-20 h-20 bg-blue-light rounded-3xl mx-auto mb-8">
            <Clock className="h-10 w-10 text-navy" />
          </div>

          <p className="text-navy/60 text-sm font-semibold uppercase tracking-widest mb-3">
            Under Construction
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
            Coming Soon...
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-10">
            We're working hard to bring this page to life. Stay tuned something great
            is on the way for Gambian youth.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-navy text-white font-semibold rounded-xl hover:bg-navy-dark transition-colors shadow-md"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  )
}