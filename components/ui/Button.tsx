"use client";

import React, { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "goldOutline";
  size?: "sm" | "md" | "lg" | "icon";
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isMagnetic?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      icon,
      iconPosition = "right",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 relative select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variantStyles = {
      primary:
        "shimmer-btn bg-gold-btn text-emerald-dark font-semibold shadow-gold-card hover:shadow-gold-glow hover:brightness-105 rounded-full border border-gold-light/40",
      secondary:
        "bg-emerald hover:bg-emerald-light text-gold rounded-full border border-gold/40 shadow-emerald-glow",
      outline:
        "border-[1.5px] border-gold text-gold hover:bg-gold hover:text-emerald-dark rounded-full transition-colors duration-300",
      goldOutline:
        "border-[1.5px] border-ink/30 text-ink hover:bg-ink hover:text-gold rounded-full transition-colors duration-300",
      ghost:
        "text-gold hover:text-gold-light hover:bg-emerald/30 rounded-full",
    };

    const sizeStyles = {
      sm: "text-xs tracking-wider uppercase py-2 px-5 min-h-[44px]",
      md: "text-sm tracking-wide py-3 px-7 min-h-[46px]",
      lg: "text-base tracking-wide py-4 px-9 min-h-[52px]",
      icon: "w-11 h-11 p-0 rounded-full",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.02 }}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="mr-2 inline-flex items-center">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="ml-2 inline-flex items-center transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
