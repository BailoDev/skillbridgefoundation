import type { PillarMeta } from '@/components/pillars/types'
import { INTERESTS } from '@/lib/contact-interests'
import {
  AcademyHero,
  CoursesSection,
  FeatureStrip,
  type Course,
  type Feature,
} from './Academyblocks'

/* Everything on the Academy page lives in this file.
   Edit the copy / courses below — the full page (/academy) and the slide-over sheet both use it.
   Keep `academyMeta` and the default export: page.tsx and the sheet registry import them.

   Course outlines: save each PDF in  public/documents/course-outlines/  with the file names
   used below (or change the paths). The "Course Outline" button opens the PDF in a new tab. */

export const academyMeta: PillarMeta = {
  id: 'academy',
  tab: 'Academy',
  eyebrow: 'Practical skills. Real opportunities.', // kept for the type; not shown in the hero
  title: 'Build the skills you need for what comes next.',
  intro: 'Practical, hands-on courses for students, graduates and young professionals.',
  image: '/images/academy.jpg',
  cta: { label: 'Apply Now', interest: INTERESTS.academy },
}

const OUTLINES = '/documents/course-outlines'

const courses: Course[] = [
  {
    title: 'Front-end Development',
    description:
      'Build responsive websites and web apps with HTML, CSS, JavaScript and modern frameworks.',
    duration: '12 weeks',
    price: 'GMD 6,000',
    icon: 'code',
    image: '/images/academy/web.jpg',
    outline: `${OUTLINES}/front-end-development.pdf`,
  },
  {
    title: 'Accounting Software (Quickbooks)',
    description:
      'Manage finances, track expenses and produce professional reports in QuickBooks.',
    duration: '4 weeks',
    price: 'GMD 2,500',
    icon: 'calculator',
    image: '/images/academy/quickbooks.jpg',
    outline: `${OUTLINES}/quickbooks.pdf`,
  },
  {
    title: 'Workspace Technology and AI',
    description: 'Master Google Workspace and use data to make better decisions.',
    duration: '12 weeks',
    price: 'GMD 6,000',
    icon: 'workspace',
    image: '/images/academy/gworkspace.jpg',
    outline: `${OUTLINES}/workspace-technology-and-ai.pdf`,
  },
  {
    title: 'Public Speaking',
    description: 'Speak with clarity, confidence and impact in any setting.',
    duration: '4 weeks',
    price: 'GMD 2,500',
    icon: 'speaking',
    image: '/images/academy/communication.jpg',
    outline: `${OUTLINES}/public-speaking.pdf`,
  },
  {
    title: 'UI/UX for Beginners',
    description: 'Design user-friendly digital experiences, from research to prototype.',
    duration: '12 weeks',
    price: 'GMD 6,000',
    icon: 'design',
    image: '/images/academy/ui.jpg',
    // outline: `${OUTLINES}/ui-ux-for-beginners.pdf`, // add this PDF, then uncomment to show the button
  },
]

const features: Feature[] = [
  { title: 'Learn by Doing', text: 'Hands on projects.', icon: 'learn' },
  {
    title: 'Expert Instructors',
    text: 'Learn from experienced industry professionals.',
    icon: 'instructors',
  },
  {
    title: 'Build Your Portfolio',
    text: 'Create work you can show employers.',
    icon: 'portfolio',
  },
  { title: 'Career Ready', text: 'Gain skills, confidence and connections.', icon: 'career' },
]

export default function AcademyContent() {
  return (
    <div className="pb-14">
      <AcademyHero
        title={academyMeta.title}
        intro={academyMeta.intro}
        image={academyMeta.image ?? '/images/academy/hero.jpg'}
      />

      <CoursesSection
        eyebrow="Our courses"
        title="In-demand skills for a brighter future"
        subtitle="Gain practical skills that employers value."
        courses={courses}
      />

      <FeatureStrip features={features} />

      {/* Closing band removed for now. To bring it back, also add ClosingBand to the import above, then uncomment:
      <ClosingBand title="Your next chapter starts with a skill." buttonLabel="Apply Now" /> */}
    </div>
  )
}