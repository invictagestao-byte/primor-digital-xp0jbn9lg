import { AnimatedSection } from '@/components/ui/animated-section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { XCircle } from 'lucide-react'

export function PatternBreak() {
  const items = [
    {
      statement: 'Postar não escala',
      explanation: 'Redes sociais não geram clientes previsíveis.',
    },
    {
      statement: 'Indicação não é previsível',
      explanation: 'Depender de boca a boca limita crescimento.',
    },
    {
      statement: 'Mais esforço ≠ Mais faturamento',
      explanation: 'Sem sistema, trabalho extra não gera resultado.',
    },
  ]

  return (
    <section className="py-24 bg-[#f5f7fa]">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-[#0a0e27]">
            Você está travado em um desses padrões?
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <AnimatedSection key={i} animation="animate-fade-in-up" className="h-full">
              <Card className="h-full border-none shadow-lg hover:-translate-y-2 transition-transform duration-300">
                <CardHeader>
                  <XCircle className="w-12 h-12 text-red-500 mb-4" />
                  <CardTitle className="text-xl text-[#0a0e27]">{item.statement}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{item.explanation}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
