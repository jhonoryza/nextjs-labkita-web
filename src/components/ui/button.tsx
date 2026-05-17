import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none border-2 border-foreground transition-all duration-100 ease-linear active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-neo hover:shadow-neo-sm hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-neo hover:shadow-neo-sm hover:bg-destructive/90",
        outline:
          "bg-background shadow-neo hover:shadow-neo-sm hover:bg-secondary hover:text-secondary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-neo hover:shadow-neo-sm hover:bg-secondary/80",
        ghost: "border-transparent hover:bg-accent hover:text-accent-foreground shadow-none active:shadow-none",
        link: "text-primary underline-offset-4 hover:underline border-transparent shadow-none active:shadow-none",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-4",
        sm: "h-8 rounded px-3 has-[>svg]:px-2.5",
        lg: "h-11 rounded px-8 has-[>svg]:px-6",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
