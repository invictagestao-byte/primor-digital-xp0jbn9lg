import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/ui/animated-section'
import iconWhite from '@/assets/icone-branco4x-032a2.png'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0a0e27] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(160,32,240,0.15)_0,transparent_50%)]" />
      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection className="flex flex-col gap-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading text-white leading-tight">
            Se o seu negócio não cresce, o problema não é o{' '}
            <span className="text-gradient">mercado.</span>
          </h1>
          <p className="text-xl text-gray-300 font-medium">
            A Primor Digital cria sistemas automatizados que geram clientes todos os dias.
          </p>
          <p className="text-lg text-gray-400">
            Não somos uma agência. Somos um sistema de vendas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-primary text-white hover:opacity-90 glow-effect text-lg h-14"
              asChild
            >
              <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
                Falar com especialista
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/20 hover:bg-white/10 h-14"
              asChild
            >
              <a href="#como-funciona">Ver como funciona</a>
            </Button>
          </div>
        </AnimatedSection>
        <AnimatedSection
          animation="animate-fade-in"
          className="hidden md:flex justify-center relative"
        >
          <div className="absolute w-64 h-64 bg-[#1E90FF] rounded-full blur-[100px] opacity-30 animate-pulse" />
          <img
            src={iconWhite}
            alt="Primor Digital"
            className="w-64 h-64 object-contain relative z-10 drop-shadow-[0_0_30px_rgba(160,32,240,0.5)]"
          />
        </AnimatedSection>
      </div>
    </section>
  )
}
