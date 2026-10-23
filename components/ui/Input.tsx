"use client";

import React, { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, value, onChange, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value !== undefined && value !== "";
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="relative w-full mb-6">
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            placeholder=" "
            className={cn(
              "peer w-full min-h-[52px] px-4 pt-5 pb-2 text-base text-ink bg-white/70 backdrop-blur-md rounded-xl border border-gold/40 shadow-sm transition-all duration-200 outline-none focus:border-gold-dark focus:bg-white focus:ring-2 focus:ring-gold/30",
              error && "border-red-500 focus:border-red-500 focus:ring-red-200",
              className
            )}
            {...props}
          />
          <label
            htmlFor={inputId}
            className={cn(
              "absolute left-4 top-2 text-xs font-medium uppercase tracking-wider text-ink/60 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-ink/50 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gold-dark",
              (isFocused || hasValue) && "top-2 text-xs text-gold-dark font-semibold"
            )}
          >
            {label}
          </label>
        </div>
        {error && (
          <p className="mt-1.5 text-xs text-red-600 font-medium pl-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, value, onChange, rows = 4, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value !== undefined && value !== "";
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="relative w-full mb-6">
        <div className="relative">
          <textarea
            ref={ref}
            id={inputId}
            value={value}
            onChange={onChange}
            rows={rows}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            placeholder=" "
            className={cn(
              "peer w-full px-4 pt-6 pb-2 text-base text-ink bg-white/70 backdrop-blur-md rounded-xl border border-gold/40 shadow-sm transition-all duration-200 outline-none focus:border-gold-dark focus:bg-white focus:ring-2 focus:ring-gold/30 resize-none",
              error && "border-red-500 focus:border-red-500 focus:ring-red-200",
              className
            )}
            {...props}
          />
          <label
            htmlFor={inputId}
            className={cn(
              "absolute left-4 top-2.5 text-xs font-medium uppercase tracking-wider text-ink/60 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-ink/50 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-gold-dark",
              (isFocused || hasValue) && "top-2.5 text-xs text-gold-dark font-semibold"
            )}
          >
            {label}
          </label>
        </div>
        {error && (
          <p className="mt-1.5 text-xs text-red-600 font-medium pl-1">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
