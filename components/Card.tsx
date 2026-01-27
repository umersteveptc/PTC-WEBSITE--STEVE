import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'navy' | 'white'
  border?: boolean
}

export default function Card({ 
  children, 
  className, 
  variant = 'default',
  border = true 
}: CardProps) {
  const baseStyles = 'rounded-lg p-6'
  
  const variants = {
    default: 'bg-white',
    navy: 'bg-navy text-white',
    white: 'bg-white'
  }

  const borderStyle = border ? 'border border-gold' : ''

  return (
    <div className={cn(baseStyles, variants[variant], borderStyle, className)}>
      {children}
    </div>
  )
}
