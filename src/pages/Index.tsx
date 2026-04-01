import { Hero } from '@/components/sections/Hero'
import { PatternBreak } from '@/components/sections/PatternBreak'
import { Positioning } from '@/components/sections/Positioning'
import { Services } from '@/components/sections/Services'
import { SocialProof } from '@/components/sections/SocialProof'
import { Benefits } from '@/components/sections/Benefits'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ClientFilter } from '@/components/sections/ClientFilter'
import { FinalCta } from '@/components/sections/FinalCta'
import { Faq } from '@/components/sections/Faq'

export default function Index() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <PatternBreak />
      <Positioning />
      <Services />
      <SocialProof />
      <Benefits />
      <HowItWorks />
      <ClientFilter />
      <FinalCta />
      <Faq />
    </div>
  )
}
