import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedBackgroundProps {
  variant?: 'mesh' | 'particles' | 'gradient' | 'geometric'
  theme?: 'primary' | 'surroundai' | 'datacoffee' | 'seismic' | 'finance' | 'healthcare' | 'government' | 'retail'
  className?: string
  children?: React.ReactNode
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  variant = 'mesh',
  theme = 'primary',
  className,
  children
}) => {
  const getBackgroundClass = () => {
    switch (variant) {
      case 'mesh':
        return 'bg-mesh'
      case 'gradient':
        return 'bg-animated-gradient animate-gradient'
      case 'particles':
        return 'bg-background'
      case 'geometric':
        return 'bg-background'
      default:
        return 'bg-mesh'
    }
  }

  const getThemeClass = () => {
    return `theme-${theme}`
  }

  return (
    <div className={cn(
      "relative overflow-hidden",
      getBackgroundClass(),
      getThemeClass(),
      className
    )}>
      {variant === 'particles' && (
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-30 pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {variant === 'geometric' && (
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => {
            const size = Math.random() * 120 + 60;
            const startX = Math.random() * 80 + 10; // Keep within bounds
            const startY = Math.random() * 80 + 10; // Keep within bounds
            
            return (
              <motion.div
                key={i}
                className="absolute border border-primary/10 pointer-events-none"
                style={{
                  width: size,
                  height: size,
                  left: `${startX}%`,
                  top: `${startY}%`,
                  borderRadius: Math.random() > 0.5 ? '50%' : '12px',
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1.1, 0.8],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 15 + 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            );
          })}
        </div>
      )}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export { AnimatedBackground }