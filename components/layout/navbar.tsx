"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Linkedin, Mail, Home, Info, BookOpen, CalendarDays, FolderOpen, MessageCircle } from 'lucide-react'
import { FaTiktok } from 'react-icons/fa'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Info },
  { href: '/programs', label: 'Programs', icon: BookOpen },
  // { href: '/events', label: 'Events', icon: CalendarDays },
  { href: '/resources', label: 'Resources', icon: FolderOpen },
  { href: '/contact', label: 'Contact', icon: MessageCircle },
]

const socialLinks = [
  { href: 'https://www.instagram.com/skillbridge_foundation?igsh=MWl6eDFwYWliYnlncw==', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.linkedin.com/posts/skillbridge-foundation_technology-activity-7452412069867499520-RHoW?utm_source=share&utm_medium=member_android&rcm=ACoAAEeoPDgBBRvkTMp9TJvFUsQkgymiLYAkIG0', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://www.tiktok.com/@skillbridge_foundation?_r=1&_t=ZT-96a4UWtw2rF', icon: FaTiktok, label: 'TikTok' },
  { href: 'mailto:skillbridgef@gmail.com', icon: Mail, label: 'Email' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden lg:block',
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-border'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/images/skillbridge-logo.png"
                alt="SkillBridge Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Nav Links with icons */}
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-lg',
                    pathname === link.href
                      ? 'text-navy'
                      : 'text-muted-foreground hover:text-navy hover:bg-blue-light/40'
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-navy rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy hover:text-navy/70 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* ── Mobile Top Bar (logo + socials) ── */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 lg:hidden',
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-border'
            : 'bg-transparent'
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center">
            <img
              src="/images/skillbridge-logo.png"
              alt="SkillBridge Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-navy/70 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ── Mobile Bottom Tab Bar (Apple-style) ── */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        {/* Frosted glass pill */}
        <div className="mx-3 mb-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-border shadow-lg shadow-navy/10">
          <div className="flex items-center justify-around px-2 py-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex flex-col items-center gap-0.5 px-2 py-1 min-w-[44px] relative"
                >
                  <div className={cn(
                    'flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200',
                    isActive ? 'bg-navy' : 'bg-transparent'
                  )}>
                    <link.icon
                      className={cn(
                        'h-5 w-5 transition-colors',
                        isActive ? 'text-white' : 'text-muted-foreground'
                      )}
                      strokeWidth={isActive ? 2 : 1.5}
                    />
                  </div>
                  <span className={cn(
                    'text-[10px] font-medium transition-colors leading-none',
                    isActive ? 'text-navy' : 'text-muted-foreground'
                  )}>
                    {link.label}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Bottom padding spacer so content isn't hidden behind tab bar on mobile */}
      <div className="h-20 lg:hidden" />
    </>
  )
}