import * as React from "react"
import { cn } from "@/lib/utils"

interface EnhancedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient' | 'product' | 'industry'
  theme?: 'surroundai' | 'datacoffee' | 'seismic' | 'finance' | 'healthcare' | 'government' | 'retail'
  children: React.ReactNode
  hoverable?: boolean
}

const EnhancedCard = React.forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({ className, variant = 'default', theme, children, hoverable = true, ...props }, ref) => {
    const getCardClasses = () => {
      const baseClasses = "relative overflow-hidden rounded-xl transition-all duration-300"
      
      const variantClasses = {
        default: "bg-gradient-card-subtle border border-border p-8",
        glass: "glass p-8",
        gradient: "bg-gradient-primary p-8 text-white",
        product: "bg-gradient-card-subtle border border-border p-8",
        industry: "bg-gradient-card-subtle border border-border p-8"
      }
      
      const themeClasses = theme ? `theme-${theme}` : ""
      
      const hoverClasses = hoverable 
        ? "hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20"
        : ""
      
      return cn(
        baseClasses,
        variantClasses[variant],
        themeClasses,
        hoverClasses,
        className
      )
    }

    return (
      <div
        ref={ref}
        className={getCardClasses()}
        {...props}
      >
        {variant === 'glass' && (
          <div className="absolute inset-0 bg-gradient-glass opacity-50 pointer-events-none" />
        )}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    )
  }
)

EnhancedCard.displayName = "EnhancedCard"

export { EnhancedCard }