"use client";

import { useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export function useInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    // Check if running in standalone mode (already installed)
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;

    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      setShowInstallBanner(false);
    };

    window.addEventListener("appinstalled", handleAppInstalled);

    // Global event listener to open install modal from anywhere on site
    const handleOpenModal = () => {
      setShowIOSModal(true);
    };
    window.addEventListener("open-app-install", handleOpenModal);

    // Show mobile banner after 20 seconds if not dismissed previously
    const hasDismissed = localStorage.getItem("ah_pwa_banner_dismissed");
    if (!hasDismissed && !isStandalone) {
      const timer = setTimeout(() => {
        setShowInstallBanner(true);
      }, 20000);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        window.removeEventListener("appinstalled", handleAppInstalled);
        window.removeEventListener("open-app-install", handleOpenModal);
      };
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
      window.removeEventListener("open-app-install", handleOpenModal);
    };
  }, []);

  const triggerInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
      setShowInstallBanner(false);
    } else {
      // Trigger global modal event for browsers that don't emit beforeinstallprompt
      window.dispatchEvent(new CustomEvent("open-app-install"));
      setShowIOSModal(true);
    }
  };

  const dismissBanner = () => {
    setShowInstallBanner(false);
    localStorage.setItem("ah_pwa_banner_dismissed", "true");
  };

  return {
    isInstalled,
    canInstall: !isInstalled,
    isIOS,
    showIOSModal,
    setShowIOSModal,
    showInstallBanner,
    triggerInstall,
    dismissBanner,
  };
}
