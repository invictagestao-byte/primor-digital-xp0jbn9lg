import { AnimatedSection } from '@/components/ui/animated-section'

export function Positioning() {
  return (
    <section className="py-32 bg-[#0a0e27] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#A020F01a,#1E90FF1a)]" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <AnimatedSection>
          <h2 className="text-5xl md:text-7xl font-heading text-white mb-6 tracking-tight">
            Não somos uma agência.
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading text-gradient mb-8">
            Somos um sistema de vendas.
          </h3>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            Enquanto agências tradicionais cobram por horas, nós cobramos por resultado. Você paga
            apenas pelo que funciona.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
