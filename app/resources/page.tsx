"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, BookOpen, Map, Download } from 'lucide-react'

const resources = [
  {
    icon: FileText,
    title: 'CV Guides',
    description: 'Learn how to craft compelling CVs that stand out to employers.',
    href: '/coming-soon',
  },
  {
    icon: BookOpen,
    title: 'Study Templates',
    description: 'Effective study templates and planners to boost your learning.',
    href: '/coming-soon',
  },
  {
    icon: Map,
    title: 'Career Maps',
    description: 'Explore different career pathways and plan your professional journey.',
    href: '/coming-soon',
  },
  {
    icon: Download,
    title: 'Free Downloads',
    description: 'Access free resources, worksheets, and guides to support your growth.',
    href: '/coming-soon', // Placeholder link
  },
]

export default function ResourcesPage() {
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
              <span className="text-navy font-medium">Resources</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-navy">
              Resources
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Access free guides, templates, and tools to support your learning and career journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={resource.href}
                  className="group block p-6 bg-white rounded-2xl border border-border hover:border-blue-glow/50 hover:shadow-xl hover:shadow-blue-glow/10 transition-all duration-300 h-full"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-light rounded-xl mb-4 group-hover:bg-navy transition-colors">
                    <resource.icon className="h-6 w-6 text-navy group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-navy transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              More Resources Coming Soon
            </h2>
            <p className="text-muted-foreground">
              We are continuously developing new resources to support your journey. 
              Join our community to be the first to know when new materials are available.
            </p>
            <Link
              href="/community"
              className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-navy text-white font-semibold rounded-xl hover:bg-navy-dark transition-colors"
            >
              Join Our Community
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
