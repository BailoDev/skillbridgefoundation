import PillarHero from '@/components/pillars/PillarHero'
import type { PillarMeta } from '@/components/pillars/types'
import {
  AreasSection,
  CorporateClosing,
  FitSection,
  ProcessSection,
  WhySection,
  type Area,
  type Step,
} from './CorporateBlocks'

export const corporateMeta: PillarMeta = {
  id: 'corporate',
  tab: 'Corporate',
  eyebrow: 'For businesses, NGOs & institutions', // kept for the type; not shown in the hero
  title: 'Build the capability your organisation needs to perform.',
  intro: "Training built around your organisation's needs, not a generic course.",
  image: '/images/corporate/corporate1.jpg',
  cta: { label: 'Talk to our team', interest: 'Corporate — Talk to Our Team' },
  secondaryCta: {
    label: 'Get in touch',
    interest: 'Corporate — Tell Us What Your Team Needs',
  },
}

const steps: Step[] = [
  {
    title: 'We Listen',
    text: "We sit with your team and leadership to find the real capability gaps.",
    icon: 'listen',
  },
  {
    title: 'We Design',
    text: "A plan fitted to your people, from a short workshop to a full programme.",
    icon: 'design',
  },
  {
    title: 'We Deliver',
    text: "Practical sessions your team can apply straight away.",
    icon: 'deliver',
  },
  {
    title: 'We Follow Up',
    text: "We check what is sticking and adjust.",
    icon: 'follow',
  },
]

const areas: Area[] = [
  {
    title: 'Digital Skills',
    text: 'Confidence with the everyday and advanced digital tools your work needs.',
    icon: 'digital',
    image: '/images/corporate/digital-skills.jpg',
  },
  {
    title: 'Data & Analytics',
    text: 'Understand, use, and make decisions from data.',
    icon: 'data',
    image: '/images/corporate/analytics.jpg',
  },
  {
    title: 'Technology & AI Literacy',
    text: 'Understand and start using new technology, including AI, responsibly.',
    icon: 'ai',
    image: '/images/corporate/ai.jpg',
  },
  {
    title: 'Professional Development',
    text: 'Communication, leadership and workplace skills at every level.',
    icon: 'professional',
    image: '/images/corporate/development.jpg',
  },
  {
    title: 'Workplace Productivity',
    text: 'Systems and habits that help teams work more efficiently.',
    icon: 'productivity',
    image: '/images/corporate/workplace.jpg',
  },
  {
    title: 'Organisation-Specific Training',
    text: "Something else? We'll design around it.",
    icon: 'custom',
    image: '/images/corporate/organization.jpg',
  },
]

export default function CorporateContent() {
  return (
    <div className="pb-14">
      <PillarHero
        title={corporateMeta.title}
        intro={corporateMeta.intro}
        image={corporateMeta.image}
        cta={{
          label: 'Talk to us about your team needs',
          interest: corporateMeta.cta.interest,
        }}
      />

      <WhySection
        eyebrow="Why Corporate exists"
        title="Real problems. Tailored solutions."
        text="We start by understanding your organisation, then design training around it. That means your team gets the skills they need, in a way that actually sticks."
        // image="/images/corporate/focus.png"
        card={{
          title: 'Your goals. Our focus.',
          text: 'We listen. We design. We deliver. Training that solves real problems and builds lasting capability.',
          linkLabel: 'Our process',
        }}
      />

      <ProcessSection eyebrow="" title="How we work with you" steps={steps} />

      <AreasSection
        eyebrow="Areas we can support"
        title="Practical skills for real impact."
        subtitle="We offer training and development in the following areas, and can also create bespoke programmes for your organisation."
        // banner="/images/corporate/corporate.jpg"
        areas={areas}
      />

      <FitSection
        who={{
          title: 'Who Corporate is for',
          image: '/images/corporate/focus.png',
          items: [
            'Businesses & SME',
            'NGOs & Agencies',
            'Institutions & Organisations ',
          ],
        }}
        why={{
          title: 'Why work with us',
          items: [
            'We build around your organisation, not a fixed course catalogue',
            "Local trainers who understand The Gambia's specific work context",
            "Training that connects directly to SkillBridge's wider talent pipeline if you need more people after training your existing team, we can help there too",
          ],
        }}
      />

      <CorporateClosing
        eyebrow="Ready to upskill your team?"
        title="Tell us what your team needs."
        text="We'll design a training solution that fits your goals and people."
        buttonLabel={corporateMeta.secondaryCta?.label ?? 'Talk to our team'}
        interest={corporateMeta.secondaryCta?.interest ?? corporateMeta.cta.interest}
        image="/images/corporate/corporate.jpg"
      />
    </div>
  )
}