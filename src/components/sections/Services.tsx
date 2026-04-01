import { AnimatedSection } from '@/components/ui/animated-section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Rocket, Bot, Globe } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Rocket,
      title: 'Gestão de Tráfego + Automação',
      desc: 'Máquina de vendas previsível que funciona 24/7',
      price: 'R$ 3k – R$ 5k/mês',
      benefits: [
        'Tráfego pago otimizado',
        'Automação de leads',
        'Funil de vendas estruturado',
        'Relatórios em tempo real',
      ],
    },
    {
      icon: Bot,
      title: 'Automação com IA',
      desc: 'Atendimento automático + conteúdo gerado por IA',
      price: 'R$ 2k – R$ 4k/mês',
      benefits: [
        'Chatbot inteligente 24h',
        'Geração de conteúdo automática',
        'Qualificação de leads',
        'Economia de tempo da equipe',
      ],
    },
    {
      icon: Globe,
      title: 'Criação de Sites com IA',
      desc: 'Landing pages rápidas e que convertem',
      price: 'R$ 1k – R$ 2k',
      benefits: ['Design responsivo', 'Otimizado para conversão', 'SEO pronto', 'Entrega em dias'],
    },
  ]

  return (
    <section className="py-24 bg-[#0a0e27]" id="servicos">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading text-white mb-6">Catálogo Premium</h2>
          <p className="text-gray-400 text-lg">
            Soluções completas para escalar seu negócio no digital.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((srv, i) => (
            <AnimatedSection key={i}>
              <Card className="h-full bg-white/5 border-white/10 text-white glow-effect hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                    <srv.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{srv.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-base">{srv.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <span className="text-3xl font-heading font-bold text-gradient">
                      {srv.price}
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {srv.benefits.map((ben, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#1E90FF] shrink-0 mt-0.5" />
                        <span className="text-gray-300">{ben}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
