import ProgramsHero from '@/components/programs/program-hero'
import ProgramPillarsAccordion from '@/components/programs/program-pillar-accordion'
import LearningJourney from '@/components/programs/learning-journey'
import WhatToExpect from '@/components/programs/what-to-expect'

export default function ProgramsPage() {
  return (
    <>
      <ProgramsHero />
      <ProgramPillarsAccordion />
      <LearningJourney />
      <WhatToExpect />
    </>
  )
}