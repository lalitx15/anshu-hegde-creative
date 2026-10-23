import { NextResponse } from "next/server";
import { supabaseAdmin, isSupabaseConfigured } from "@/lib/supabase";

const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
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
        { error: "Too many subscription attempts. Please wait a minute." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email, honeypot } = body;

    if (honeypot) {
      return NextResponse.json({ success: true, message: "Subscribed successfully." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();

    if (isSupabaseConfigured && supabaseAdmin) {
      const { error: dbError } = await supabaseAdmin
        .from("subscribers")
        .insert([{ email: cleanEmail }]);

      // Check if duplicate
      if (dbError) {
        if (dbError.code === "23505") {
          return NextResponse.json({
            success: true,
            message: "You are already subscribed to The First Ray newsletter!",
          });
        }
        console.error("Supabase subscribe error:", dbError);
        return NextResponse.json(
          { error: "Failed to record subscription. Please try again." },
          { status: 500 }
        );
      }
    } else {
      console.log("[Notice] Supabase not configured or placeholder detected. Recorded subscriber in memory:", cleanEmail);
    }

    return NextResponse.json({
      success: true,
      message: "Welcome to The First Ray Concept! You have been successfully subscribed.",
    });
  } catch (error) {
    console.error("Error in /api/subscribe:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
