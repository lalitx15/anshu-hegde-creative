"use client";

import React, { useEffect } from "react";
import { useLenis } from "@/hooks/useLenis";
import { useInstallPrompt } from "@/hooks/useInstallPrompt";
import { InstallAppModal, InstallBanner } from "@/components/layout/InstallAppModal";

export function LenisWrapper({ children }: { children: React.ReactNode }) {
  useLenis();
  const {
    isIOS,
    showIOSModal,
    setShowIOSModal,
    showInstallBanner,
    triggerInstall,
    dismissBanner,
  } = useInstallPrompt();

  useEffect(() => {
    // Register service worker for PWA
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("PWA Service Worker registered:", registration.scope);
        })
        .catch((error) => {
          console.log("PWA Service Worker registration failed:", error);
        });
    }
  }, []);

  return (
    <>
      {children}

      {/* PWA iOS Guide Modal */}
      <InstallAppModal
        isOpen={showIOSModal}
        onClose={() => setShowIOSModal(false)}
        isIOS={isIOS}
        onTriggerInstall={triggerInstall}
      />

      {/* Dismissible 20s Mobile Install Banner */}
      {showInstallBanner && (
        <InstallBanner
          onInstall={triggerInstall}
          onDismiss={dismissBanner}
        />
      )}
    </>
  );
}
