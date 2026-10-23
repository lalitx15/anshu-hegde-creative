"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Sparkles,
  Rss,
  GraduationCap,
  Eye,
  User,
  Menu,
  X,
  Download,
  PhoneCall,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/MagneticButton";
import { useInstallPrompt } from "@/hooks/useInstallPrompt";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navigationMenuItems = [
  { title: "Home", href: "/", icon: Home },
  { title: "Services", href: "/services", icon: Sparkles },
  { title: "Blogs", href: "/blogs", icon: Rss },
  { title: "Workshops", href: "/workshops", icon: GraduationCap },
  { title: "Gallery", href: "/gallery", icon: Eye },
  { title: "About", href: "/about", icon: User },
];

export function Header({
  onOpenBooking,
  onOpenInstall,
}: {
  onOpenBooking?: () => void;
  onOpenInstall?: () => void;
}) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isInstalled, triggerInstall } = useInstallPrompt();

  useEffect(() => {
    let ticking = false;
    let lastScrolled = false;

    const updateScrolled = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== lastScrolled) {
        lastScrolled = scrolled;
        setIsScrolled(scrolled);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrolled);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrolled();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 select-none",
          isScrolled
            ? "py-3 bg-emerald/95 backdrop-blur-md border-b border-gold/20 shadow-xl"
            : "py-5 bg-emerald/80 backdrop-blur-sm"
        )}
      >
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 flex items-center justify-between">
          {/* Brand Logo Circle + Title */}
          <NextLink href="/" className="flex items-center gap-3.5 group">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.25 }}
              className="w-12 h-12 rounded-full bg-emerald-dark border-2 border-gold flex items-center justify-center shadow-gold-glow relative overflow-hidden shrink-0"
            >
              <Image
                src="/images/logo-icon.png"
                alt="The First Ray Logo"
                fill
                className="object-cover scale-115 p-0.5"
                priority
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-bold text-cream tracking-tight group-hover:text-gold transition-colors">
                Anshu Hegde
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gold/80 font-medium">
                Creative
              </span>
            </div>
          </NextLink>

          {/* Desktop Navigation with Animated Underline and Icons */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-5 xl:space-x-8">
                {navigationMenuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink
                        active={isActive}
                        asChild
                        className={cn(
                          "group relative inline-flex h-9 w-max items-center justify-center px-1 py-2 font-medium text-sm transition-colors duration-200",
                          "text-cream/80 hover:text-gold focus:text-gold",
                          "before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:scale-x-0 before:bg-gold before:transition-transform before:duration-300 before:ease-out",
                          "hover:before:scale-x-100 focus:before:scale-x-100",
                          "disabled:pointer-events-none disabled:opacity-50",
                          "hover:bg-transparent focus:bg-transparent active:bg-transparent",
                          isActive && "text-gold font-semibold before:scale-x-100"
                        )}
                      >
                        <NextLink
                          className="flex items-center gap-2 cursor-pointer"
                          href={item.href}
                        >
                          <item.icon className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                          <span>{item.title}</span>
                        </NextLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Actions: Download App & Let's Connect Call */}
          <div className="hidden lg:flex items-center gap-4">
            {!isInstalled && (
              <button
                onClick={() => {
                  if (onOpenInstall) onOpenInstall();
                  else triggerInstall();
                }}
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold/90 hover:text-white px-3.5 py-2 rounded-full border border-gold/40 hover:border-gold hover:bg-gold/10 transition-all duration-200"
              >
                <Download className="w-3.5 h-3.5 text-gold" />
                <span>App</span>
              </button>
            )}

            <Magnetic strength={0.25}>
              <a href={`tel:${siteConfig.phoneRaw}`}>
                <Button
                  variant="primary"
                  size="sm"
                  icon={<PhoneCall className="w-3.5 h-3.5" />}
                >
                  Let&apos;s Connect
                </Button>
              </a>
            </Magnetic>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            {!isInstalled && (
              <button
                onClick={() => {
                  if (onOpenInstall) onOpenInstall();
                  else triggerInstall();
                }}
                aria-label="Download App"
                className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-gold bg-emerald-dark/50"
              >
                <Download className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold bg-emerald-dark/60 hover:bg-gold hover:text-emerald-dark transition-all duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-emerald emerald-luxury-bg pt-28 pb-12 px-8 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            {/* Fluted background lines */}
            <div className="absolute inset-0 emerald-fluted-lines opacity-40 pointer-events-none" />

            {/* Navigation links with icons and animated underline */}
            <div className="relative z-10 flex flex-col gap-6 my-auto">
              {navigationMenuItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * index, duration: 0.4 }}
                  >
                    <NextLink
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "group relative inline-flex items-center gap-3.5 py-1.5 font-serif text-2xl sm:text-3xl transition-colors",
                        "before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:scale-x-0 before:bg-gold before:transition-transform before:duration-300 before:ease-out",
                        "hover:before:scale-x-100",
                        isActive
                          ? "text-gold font-bold italic before:scale-x-100"
                          : "text-cream hover:text-gold"
                      )}
                    >
                      <item.icon className="h-5 w-5 text-gold shrink-0 transition-transform group-hover:scale-110" />
                      <span>{item.title}</span>
                    </NextLink>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Actions & Social in Mobile Menu */}
            <div className="relative z-10 pt-8 border-t border-gold/20 flex flex-col gap-5">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full text-center"
                  icon={<PhoneCall className="w-4 h-4" />}
                >
                  Let&apos;s Connect
                </Button>
              </a>

              {!isInstalled && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onOpenInstall) onOpenInstall();
                    else triggerInstall();
                  }}
                  className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-gold py-2.5 rounded-full border border-gold/40 bg-emerald-dark/40"
                >
                  <Download className="w-4 h-4" />
                  Install Mobile App (PWA)
                </button>
              )}

              <p className="text-center text-xs text-cream/50 uppercase tracking-widest pt-2">
                The First Ray Concept · Bengaluru
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
