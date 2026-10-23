import { NextResponse } from "next/server";
import { supabaseAdmin, isSupabaseConfigured } from "@/lib/supabase";

// Simple in-memory rate limiter (per IP)
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 5;

  const current = rateLimitMap.get(ip);
  if (!current || now > current.expiresAt) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + windowMs });
    return false;
  }

  if (current.count >= maxRequests) {
    return true;
  }

  current.count += 1;
  return false;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown-ip";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before trying again." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, service, message, honeypot } = body;

    // Honeypot check: spam bots will fill in hidden fields
    if (honeypot) {
      // Silently return success to mislead bots
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    // Input validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide a valid name." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json({ error: "Please provide a valid contact number." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json({ error: "Please provide a detailed message." }, { status: 400 });
    }

    const enquiryRecord = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      service: (service || "General Inquiry").trim(),
      message: message.trim(),
    };

    // If Supabase is configured, insert into enquiries table
    if (isSupabaseConfigured && supabaseAdmin) {
      const { error: dbError } = await supabaseAdmin
        .from("enquiries")
        .insert([enquiryRecord]);

      if (dbError) {
        console.error("Supabase insert error:", dbError);
        return NextResponse.json(
          { error: "Failed to store enquiry in database. Please contact us directly via WhatsApp." },
          { status: 500 }
        );
      }
    } else {
      console.log("[Notice] Supabase not configured or placeholder detected. Recorded enquiry in memory:", enquiryRecord);
    }

    // Optional email notification if RESEND_API_KEY is available
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Anshu Hegde Creative <notifications@anshuhegdecreative.com>",
            to: ["anshuhegdecreative@gmail.com"],
            subject: `New Enquiry from ${enquiryRecord.name} [${enquiryRecord.service}]`,
            text: `Name: ${enquiryRecord.name}\nEmail: ${enquiryRecord.email}\nPhone: ${enquiryRecord.phone}\nService: ${enquiryRecord.service}\n\nMessage:\n${enquiryRecord.message}`,
          }),
        });
      } catch (err) {
        console.error("Failed to trigger Resend notification:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! Your enquiry has been received. Anshu will get back to you shortly.",
    });
  } catch (error) {
    console.error("Error in /api/enquiry:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again or reach out on WhatsApp." },
      { status: 500 }
    );
  }
}
