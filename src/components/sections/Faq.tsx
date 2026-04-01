import { AnimatedSection } from '@/components/ui/animated-section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Faq() {
  const faqs = [
    {
      q: 'Quanto tempo leva para ver resultados?',
      a: 'Normalmente, nossos clientes começam a ver aumento de leads qualificados nas primeiras 2 a 4 semanas após a implementação da estrutura.',
    },
    {
      q: 'Funciona para qualquer tipo de negócio?',
      a: 'Funciona perfeitamente para serviços B2B, prestadores de serviços, clínicas, imobiliárias e e-commerces que buscam previsibilidade.',
    },
    {
      q: 'Posso cancelar?',
      a: 'Sim. Não exigimos contratos de fidelidade de longo prazo (exceto em projetos específicos). Você fica pelo resultado.',
    },
    {
      q: 'Vocês dão garantia?',
      a: 'Garantimos a entrega de um sistema de vendas estruturado e a aplicação das melhores práticas do mercado para maximizar seu ROI.',
    },
    {
      q: 'Preciso ter conhecimento técnico?',
      a: 'Não. Nossa equipe cuida de toda a configuração técnica, desde as automações até a gestão das campanhas.',
    },
    {
      q: 'Qual o valor do investimento?',
      a: 'O investimento varia conforme o plano escolhido, partindo de R$ 1k para sites, até R$ 5k/mês para gestão completa e automação avançada.',
    },
    {
      q: 'A IA substitui vendedores humanos?',
      a: 'Não. A IA qualifica e atende inicialmente, repassando os leads mais quentes para sua equipe focar apenas no fechamento.',
    },
    {
      q: 'Como acompanho os resultados?',
      a: 'Fornecemos dashboards em tempo real onde você pode acompanhar cliques, leads gerados, custo por aquisição e conversões.',
    },
  ]

  return (
    <section className="py-24 bg-[#f5f7fa]" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading text-[#0a0e27] mb-6">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600 text-lg">Respostas rápidas para as objeções mais comuns.</p>
        </AnimatedSection>
        <AnimatedSection>
          <Accordion
            type="single"
            collapsible
            className="w-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b-gray-100 last:border-0"
              >
                <AccordionTrigger className="text-left font-bold text-[#0a0e27] text-lg hover:no-underline hover:text-[#1E90FF] py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  )
}
