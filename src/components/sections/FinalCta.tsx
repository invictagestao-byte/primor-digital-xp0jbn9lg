import { AnimatedSection } from '@/components/ui/animated-section'
import { Button } from '@/components/ui/button'

export function FinalCta() {
  return (
    <section className="py-32 bg-[#0a0e27] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,144,255,0.2)_0,transparent_70%)]" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-10 md:p-16 rounded-3xl backdrop-blur-md glow-effect">
          <h2 className="text-4xl md:text-6xl font-heading text-white mb-6">
            Ou você escala… ou continua travado.
          </h2>
          <h3 className="text-2xl md:text-3xl text-gradient font-bold mb-8">
            Escolha agora qual caminho seguir.
          </h3>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Cada dia que passa é um dia perdido de crescimento. Fale com um especialista hoje e
            descubra como estruturar seu sistema de vendas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xl h-16 px-8 glow-effect shadow-[0_0_20px_rgba(37,211,102,0.4)]"
              asChild
            >
              <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
                Quero escalar agora
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/20 hover:bg-white/10 text-xl h-16 px-8"
              asChild
            >
              <a href="https://cal.com" target="_blank" rel="noreferrer">
                Agendar chamada
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
