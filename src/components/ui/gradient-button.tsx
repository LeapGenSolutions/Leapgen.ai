import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const gradientButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-gradient-primary text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25",
        secondary: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
        surroundai: "bg-gradient-surroundai text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-surroundai-primary/25",
        datacoffee: "bg-gradient-datacoffee text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-datacoffee-primary/25",
        seismic: "bg-gradient-seismic text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-seismic-primary/25",
        finance: "bg-gradient-finance text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-finance-primary/25",
        healthcare: "bg-gradient-healthcare text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-healthcare-primary/25",
        government: "bg-gradient-government text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-government-primary/25",
        retail: "bg-gradient-retail text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-retail-primary/25",
        animated: "bg-gradient-animated bg-animated-gradient animate-gradient text-white hover:scale-[1.02]"
      },
      size: {
        sm: "h-9 px-4 py-2 text-sm",
        default: "h-12 px-6 py-3 text-base",
        lg: "h-14 px-8 py-4 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(gradientButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
GradientButton.displayName = "GradientButton"

export { GradientButton, gradientButtonVariants }