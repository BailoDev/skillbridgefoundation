import HeroSection from '@/components/home/hero-section'
import WhySection from '@/components/home/why-section'
import PillarsSection from '@/components/home/pillars-section'
import ImpactSection from '@/components/home/impact-section'
import EventsSection from '@/components/home/events-section'
import CTASection from '@/components/home/cta-section'
import CommunitySection from '@/components/home/community-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <PillarsSection />
      <ImpactSection />
      <CommunitySection />
      <EventsSection />
      {/* <CTASection /> */}
    </>
  )
}
