import Link from 'next/link'
import { Instagram, Facebook, Linkedin, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/events', label: 'Events' },
]

const resourceLinks = [
  { href: '/resources', label: 'All Resources' },
  { href: '/resources/cv-guides', label: 'CV Guides' },
  { href: '/resources/study-templates', label: 'Study Templates' },
  { href: '/resources/career-maps', label: 'Career Maps' },
]

const socialLinks = [
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:skillbridgef@gmail.com', icon: Mail, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-navy to-blue-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Be Part of the Movement
            </h2>
            <p className="text-blue-light/90 mb-7 max-w-xl mx-auto">
              Join us in building a future where every young person has the skills, clarity and opportunity to thrive.
            </p>
            <Link
              href="/community"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-navy font-semibold rounded-xl hover:bg-blue-light transition-colors"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center">
              <img
                src="/images/skillbridge-logo.png"
                alt="SkillBridge Logo"
                className="h-10 w-auto object-contain sm:h-10 lg:h-12"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building skills, clarity, and opportunity for Gambian youth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-navy transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-navy transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:skillbridgef@gmail.com" className="text-sm text-muted-foreground hover:text-navy transition-colors">
                  skillbridgef@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Kairaba Avenue</span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-navy transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SkillBridge Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}