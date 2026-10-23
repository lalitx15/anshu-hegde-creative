"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  ExternalLink,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

interface ContactSectionProps {
  id?: string;
  defaultService?: string;
  showMap?: boolean;
}

export function ContactSection({
  id = "contact",
  defaultService = "",
  showMap = true,
}: ContactSectionProps) {
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService || siteConfig.servicesList[0],
    message: "",
    honeypot: "", // hidden spam field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please include a brief message about your project.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "95aeda51-8f4f-4322-a130-c9bdc44f0b37";

    const payload = {
      access_key: accessKey,
      subject: `New Brief from Website - ${formData.name}`,
      from_name: "Anshu Hegde Creative Website",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      ...(formData.honeypot ? { botcheck: formData.honeypot } : {}),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#F0CB5E", "#FBE38E", "#0B3B2C", "#EADFC8"],
        });
        showToast({
          type: "success",
          title: "Brief Sent Successfully",
          message:
            "Thank you! Anshu will review your brief within 24 business hours",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: defaultService || siteConfig.servicesList[0],
          message: "",
          honeypot: "",
        });

        // Background local database copy
        fetch("/api/enquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }).catch(() => {});
      } else {
        const errorMsg =
          data.message || "Failed to submit enquiry. Please try again.";
        setSubmitError(errorMsg);
        showToast({
          type: "error",
          title: "Submission Error",
          message: errorMsg,
        });
      }
    } catch {
      const networkErr =
        "Network connection issue. Please connect directly via WhatsApp.";
      setSubmitError(networkErr);
      showToast({
        type: "error",
        title: "Connection Error",
        message: networkErr,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id={id}
      className="relative bg-emerald emerald-luxury-bg py-24 sm:py-36 text-cream overflow-hidden"
    >
      {/* Background fluted lines */}
      <div className="absolute inset-0 emerald-fluted-lines opacity-25 pointer-events-none" />

      {/* Ambient gold glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-dark/60 border border-gold/40 mb-4 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Initiate The Conversation
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream mb-4 tracking-tight">
            Let’s Shape Your Enduring Brand
          </h2>

          <p className="text-sm sm:text-base text-cream/75 leading-relaxed">
            Whether preparing for an executive positioning campaign, directing a
            visual shoot, or joining an intimate mentorship cohort—Anshu is ready
            to guide your vision.
          </p>
        </div>

        {/* Main Grid: Details on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Direct Contact Details & Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Phone Card */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="p-6 rounded-24 bg-emerald-dark/80 border border-gold/30 hover:border-gold/60 backdrop-blur-md transition-all group flex items-center gap-5 shadow-xl"
            >
              <div className="w-12 h-12 rounded-full bg-emerald border border-gold/40 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gold font-medium">
                  Direct Line
                </p>
                <p className="text-base sm:text-lg font-semibold text-cream group-hover:text-gold transition-colors">
                  {siteConfig.phone}
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-6 rounded-24 bg-emerald-dark/80 border border-gold/30 hover:border-gold/60 backdrop-blur-md transition-all group flex items-center gap-5 shadow-xl"
            >
              <div className="w-12 h-12 rounded-full bg-emerald border border-gold/40 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gold font-medium">
                  Studio Inquiries
                </p>
                <p className="text-base sm:text-lg font-semibold text-cream group-hover:text-gold transition-colors break-all">
                  {siteConfig.email}
                </p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-24 bg-emerald-dark/80 border border-gold/30 hover:border-gold/60 backdrop-blur-md transition-all group flex items-center gap-5 shadow-xl"
            >
              <div className="w-12 h-12 rounded-full bg-emerald border border-gold/40 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gold font-medium">
                  Instant WhatsApp Direct
                </p>
                <p className="text-base sm:text-lg font-semibold text-cream group-hover:text-gold transition-colors">
                  Chat with Anshu
                </p>
              </div>
            </a>

            {/* Studio Address Card */}
            <div className="p-6 rounded-24 bg-emerald-dark/80 border border-gold/30 backdrop-blur-md flex items-start gap-5 shadow-xl">
              <div className="w-12 h-12 rounded-full bg-emerald border border-gold/40 flex items-center justify-center text-gold shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gold font-medium mb-1">
                  Private Studio Location
                </p>
                <p className="text-sm text-cream/80 leading-relaxed mb-3">
                  {siteConfig.address}
                </p>
                <a
                  href={siteConfig.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold hover:underline font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Icons row */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-gold/70 mr-1">
                Social Presence:
              </span>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-gold/40 bg-emerald/60 flex items-center justify-center text-gold hover:bg-gold hover:text-emerald-dark transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-gold/40 bg-emerald/60 flex items-center justify-center text-gold hover:bg-gold hover:text-emerald-dark transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-gold/40 bg-emerald/60 flex items-center justify-center text-gold hover:bg-gold hover:text-emerald-dark transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-28 p-8 sm:p-12 bg-cream text-ink shadow-2xl border-2 border-gold/40 relative">
              {/* Gold Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient rounded-t-28" />

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-2">
                Send a Direct Brief
              </h3>
              <p className="text-xs sm:text-sm text-ink/70 mb-8 leading-relaxed">
                Fill in the details below and Anshu will personally review your brief
                within 24 business hours.
              </p>

              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald text-gold flex items-center justify-center mb-5 shadow-emerald-glow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-emerald-dark mb-3">
                    Brief Received
                  </h4>
                  <p className="text-sm sm:text-base font-medium text-emerald bg-emerald/10 border border-emerald/25 rounded-20 px-6 py-4 max-w-md leading-relaxed mb-8 shadow-sm">
                    Thank you! Anshu will review your brief within 24 business hours
                  </p>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Brief
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Hidden Web3Forms Access Key */}
                  <input
                    type="hidden"
                    name="access_key"
                    value="95aeda51-8f4f-4322-a130-c9bdc44f0b37"
                  />

                  {/* Hidden Honeypot Field for Spam Prevention */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        honeypot: e.target.checked ? "bot" : "",
                      })
                    }
                  />

                  {/* Name */}
                  <Input
                    label="Your Full Name *"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    error={errors.name}
                    required
                  />

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Email Address *"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      error={errors.email}
                      required
                    />

                    <Input
                      label="Contact Number / WhatsApp *"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      error={errors.phone}
                      required
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div className="mb-6">
                    <label className="block text-xs uppercase font-medium tracking-wider text-ink/60 mb-2 pl-1">
                      Select Service of Interest
                    </label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full min-h-[52px] px-4 py-3 text-base text-ink bg-white/70 backdrop-blur-md rounded-xl border border-gold/40 shadow-sm focus:border-gold-dark focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/30 appearance-none cursor-pointer"
                      >
                        {siteConfig.servicesList.map((service, idx) => (
                          <option key={idx} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-ink/60">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <Textarea
                    label="Tell Us About Your Vision & Goals *"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    error={errors.message}
                    required
                  />

                  {/* Error Notification */}
                  {submitError && (
                    <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium text-center">
                      {submitError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full text-center"
                    icon={
                      isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )
                    }
                  >
                    {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Responsive Lazy-Loaded Google Map */}
        {showMap && (
          <div className="mt-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="font-serif text-2xl font-bold text-cream">
                  Visit Anshu Hegde Creative Studio
                </h4>
                <p className="text-xs text-gold uppercase tracking-wider">
                  Indiranagar, Bengaluru, Karnataka
                </p>
              </div>
              <a
                href={siteConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                  icon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  Get Directions
                </Button>
              </a>
            </div>

            <div className="relative w-full h-[360px] sm:h-[420px] rounded-24 sm:rounded-28 overflow-hidden border-2 border-gold/40 shadow-2xl bg-emerald-dark">
              <iframe
                title="Google Maps Location - Anshu Hegde Creative"
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-125 contrast-105"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
