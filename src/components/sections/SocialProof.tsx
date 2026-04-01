import { AnimatedSection } from '@/components/ui/animated-section'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

export function SocialProof() {
  const testimonials = [
    {
      name: 'Ricardo Silva',
      role: 'Founder de E-commerce',
      quote: 'A automação com IA economizou 40 horas semanais da nossa equipe de atendimento.',
      img: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
    },
    {
      name: 'Ana Costa',
      role: 'Especialista em Tráfego Pago',
      quote: 'O sistema de vendas da Primor triplicou nosso ROAS em menos de 2 meses.',
      img: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=2',
    },
    {
      name: 'Carlos Mendes',
      role: 'Diretor Comercial',
      quote: 'Nunca vi leads tão qualificados. A página de alta conversão fez toda a diferença.',
      img: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=3',
    },
    {
      name: 'Mariana Lima',
      role: 'Infoprodutora',
      quote: 'Lançamento recorde graças à estrutura de tráfego e automação implementada.',
      img: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=4',
    },
  ]

  return (
    <section className="py-24 bg-[#0a0e27] border-t border-white/5">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading text-white mb-6">
            Indicado por especialistas
          </h2>
          <p className="text-gray-400 text-lg">Agências, creators e empresários confiam em nós.</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} animation="animate-fade-in-up">
              <Card className="h-full bg-[#111827] border-white/5 text-white">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full ring-2 ring-[#A020F0] p-0.5 object-cover"
                    />
                    <div>
                      <p className="font-heading font-bold text-sm">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
