import { Outlet, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import logoHorizontal from '@/assets/horizontal4x-25415.png'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <header className="fixed top-0 w-full z-50 bg-[#0a0e27]/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logoHorizontal} alt="Primor Digital" className="h-8 md:h-10 object-contain" />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#servicos" className="hover:text-white transition-colors">
              Serviços
            </a>
            <a href="#como-funciona" className="hover:text-white transition-colors">
              Como Funciona
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              className="hidden sm:inline-flex bg-gradient-primary text-white hover:opacity-90 glow-effect"
              asChild
            >
              <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
                Falar com consultor
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <footer className="bg-[#050714] text-gray-400 py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src={logoHorizontal} alt="Primor Digital" className="h-8 mb-6 object-contain" />
              <p className="text-sm leading-relaxed mb-6">
                Criamos sistemas de vendas automatizados para empresas que desejam escalar com
                previsibilidade e inteligência artificial.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 font-heading">Primor Digital</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Carreiras
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 font-heading">Serviços</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Gestão de Tráfego
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Automação com IA
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Criação de Sites
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 font-heading">Suporte</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>© 2026 Primor Digital. Todos os direitos reservados.</p>
            <div className="flex gap-4 items-center opacity-70">
              <span>SSL Seguro</span>
              <span>•</span>
              <span>LGPD Compliant</span>
              <span>•</span>
              <span>Dados Protegidos</span>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-[#0a0e27] px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale com um especialista
        </span>
      </a>
    </div>
  )
}
