import { AnimatedSection } from '@/components/ui/animated-section'

export function ClientFilter() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#A020F0] to-[#1E90FF] text-white text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl md:text-6xl font-heading mb-6 drop-shadow-md">
            Não é para curiosos.
          </h2>
          <h3 className="text-2xl md:text-4xl font-heading mb-8 opacity-90">
            É para quem quer crescer de verdade.
          </h3>
          <p className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto opacity-95 bg-black/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl">
            Se você está buscando uma solução rápida e barata, não somos para você. Nós trabalhamos
            com empresários que estão dispostos a investir em crescimento real e previsível.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
