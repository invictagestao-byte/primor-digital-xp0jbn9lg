import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: string
}

export function AnimatedSection({
  children,
  className,
  animation = 'animate-fade-in-up',
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver()

  return (
    <div
      ref={ref as any}
      className={cn(className, isIntersecting ? animation : 'opacity-0')}
      style={{ animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  )
}
