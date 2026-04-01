import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24 bg-[#0a0e27]">
      <h1 className="text-6xl font-heading text-white mb-4 drop-shadow-lg">404</h1>
      <p className="text-xl text-gray-400 mb-8">Página não encontrada</p>
      <Button asChild className="bg-gradient-primary glow-effect text-white">
        <Link to="/">Voltar ao Início</Link>
      </Button>
    </div>
  )
}
