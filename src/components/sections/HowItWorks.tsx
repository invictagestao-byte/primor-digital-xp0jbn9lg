import { AnimatedSection } from '@/components/ui/animated-section'
import { Search, Hammer, BarChart, Bot, TrendingUp } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    { icon: Search, title: 'Diagnóstico', desc: 'Análise profunda do seu negócio e metas.' },
    { icon: Hammer, title: 'Estrutura', desc: 'Criação de landing pages e funis.' },
    { icon: BarChart, title: 'Tráfego', desc: 'Lançamento de campanhas otimizadas.' },
    { icon: Bot, title: 'Automação', desc: 'Implementação de IA para atendimento.' },
    { icon: TrendingUp, title: 'Escala', desc: 'Otimização contínua para maximizar lucros.' },
  ]

  return (
    <section className="py-24 bg-[#0a0e27]" id="como-funciona">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-heading text-white mb-6">
            A Jornada do Crescimento
          </h2>
          <p className="text-gray-400 text-lg">Nosso processo comprovado de 5 etapas.</p>
        </AnimatedSection>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-10 left-0 right-0 h-1 bg-white/10 hidden md:block" />

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection
                key={i}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#111827] border-4 border-[#0a0e27] shadow-[0_0_15px_rgba(30,144,255,0.3)] flex items-center justify-center mb-6 relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-primary opacity-20 blur-sm" />
                  <step.icon className="w-8 h-8 text-white relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {i + 1}. {step.title}
                </h3>
                <p className="text-sm text-gray-400 px-2">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
