import { AnimatedSection } from '@/components/ui/animated-section'
import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Bot, Zap, DollarSign, Lock, Clock } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Clientes todos os dias',
      desc: 'Fluxo constante de leads qualificados.',
    },
    {
      icon: Bot,
      title: 'Atendimento IA 24/7',
      desc: 'Respostas instantâneas para não perder vendas.',
    },
    { icon: Zap, title: 'Execução Rápida', desc: 'Sistemas no ar em tempo recorde.' },
    { icon: DollarSign, title: 'Custo por Resultado', desc: 'Otimização focada em ROI e lucro.' },
    { icon: Lock, title: 'Estrutura Própria', desc: 'Você no controle dos seus dados e clientes.' },
    { icon: Clock, title: 'Escala sem Equipe', desc: 'Cresça o faturamento sem inflar a folha.' },
  ]

  return (
    <section className="py-24 bg-[#f5f7fa]">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading text-[#0a0e27] mb-6">
            Razões para escolher a Primor
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <AnimatedSection key={i} animation="animate-fade-in-up">
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                    <b.icon className="w-8 h-8 text-[#1E90FF]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0e27] mb-3">{b.title}</h3>
                  <p className="text-gray-600">{b.desc}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
