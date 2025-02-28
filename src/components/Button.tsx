import { motion } from "framer-motion";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#09090b] text-white hover:bg-[#09090b]/90 dark:bg-white dark:text-black dark:hover:bg-white/90 shadow-sm",
        outline:
          "border border-[#09090b] text-[#09090b] hover:bg-[#09090b]/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10",
        ghost:
          "text-[#09090b] hover:bg-[#09090b]/5 dark:text-white dark:hover:bg-white/10",
        subtle:
          "bg-[#09090b]/10 text-[#09090b] hover:bg-[#09090b]/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md text-xs",
        lg: "h-12 px-8 rounded-md",
        icon: "h-10 w-10 text-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(buttonVariants({ variant, size, className }))}
      {...(props as React.ComponentProps<typeof motion.button>)}
    />
  );
}
