import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: ReactNode
}

export default function Button({ 
  variant = 'primary', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-bold transition-colors duration-200 cursor-pointer'
  
  const variants = {
    primary: 'bg-gold text-white hover:bg-gold-light',
    secondary: 'bg-navy text-white hover:bg-navy-dark',
    outline: 'border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-white'
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}
