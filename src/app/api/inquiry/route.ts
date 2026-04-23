import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface InquiryBody {
  name: string;
  phone?: string;
  city?: string;
  product: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: InquiryBody = await req.json();

    // Validation
    if (!body.name || !body.product) {
      return NextResponse.json(
        { error: "Name and product are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Current date/time (IST)
    const now = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Build email HTML
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; margin: 0; padding: 0; background: #f5f0e8; }
    .container { max-width: 600px; margin: 20px auto; background: #ffffff; border: 1px solid #e0d5c0; }
    .header { background: #0a0a0a; padding: 30px; text-align: center; }
    .header h1 { color: #c9a35a; font-size: 22px; margin: 0; letter-spacing: 4px; font-weight: 600; }
    .header p { color: #e4c988; font-size: 11px; letter-spacing: 3px; margin-top: 8px; text-transform: uppercase; }
    .badge { display: inline-block; background: #c9a35a; color: #0a0a0a; padding: 6px 16px; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin: 20px 0 0; }
    .body { padding: 30px; }
    .field { margin-bottom: 20px; }
    .field-label { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #a6843f; font-weight: 600; margin-bottom: 6px; }
    .field-value { font-size: 16px; color: #0a0a0a; padding: 10px 14px; background: #faf8f3; border-left: 3px solid #c9a35a; }
    .divider { height: 1px; background: linear-gradient(90deg, transparent, #c9a35a 50%, transparent); margin: 20px 0; }
    .footer { padding: 20px 30px; background: #faf8f3; text-align: center; font-size: 12px; color: #6b6257; border-top: 1px solid #e0d5c0; }
    .footer a { color: #c9a35a; text-decoration: none; }
    .timestamp { font-size: 12px; color: #6b6257; text-align: right; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>PORWAL CLOTHES</h1>
      <p>Wholesale Men's Readymade</p>
      <div class="badge">📩 New Inquiry</div>
    </div>
    <div class="body">
      <div class="field">
        <div class="field-label">Customer Name</div>
        <div class="field-value">${escapeHtml(body.name)}</div>
      </div>
      
      ${body.phone ? `
      <div class="field">
        <div class="field-label">📱 Phone Number</div>
        <div class="field-value"><a href="tel:${escapeHtml(body.phone)}" style="color:#0a0a0a;text-decoration:none;">${escapeHtml(body.phone)}</a></div>
      </div>
      ` : ""}
      
      ${body.city ? `
      <div class="field">
        <div class="field-label">City / Shop Name</div>
        <div class="field-value">${escapeHtml(body.city)}</div>
      </div>
      ` : ""}
      
      <div class="field">
        <div class="field-label">Interested In</div>
        <div class="field-value">🏷️ ${escapeHtml(body.product)}</div>
      </div>
      
      ${body.message ? `
      <div class="divider"></div>
      <div class="field">
        <div class="field-label">Message</div>
        <div class="field-value">${escapeHtml(body.message)}</div>
      </div>
      ` : ""}
      
      <div class="timestamp">📅 ${now}</div>
    </div>
    <div class="footer">
      This inquiry was sent from <a href="#">porwalclothes.com</a><br/>
      Reply directly to this email or contact on WhatsApp
    </div>
  </div>
</body>
</html>`;

    // Plain text fallback
    const textContent = [
      `🔔 NEW INQUIRY — PORWAL CLOTHES`,
      `━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Name: ${body.name}`,
      body.phone ? `Phone: ${body.phone}` : "",
      body.city ? `City/Shop: ${body.city}` : "",
      `Interested In: ${body.product}`,
      body.message ? `Message: ${body.message}` : "",
      `━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Time: ${now}`,
      `From: Website Inquiry Form`,
    ]
      .filter(Boolean)
      .join("\n");

    // Send email
    await transporter.sendMail({
      from: `"${process.env.SENDER_NAME || "Porwal Clothes Website"}" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `🔔 New Inquiry: ${body.name} — ${body.product}`,
      text: textContent,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, message: "Inquiry sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send inquiry. Please try WhatsApp." },
      { status: 500 }
    );
  }
}

// Sanitize HTML to prevent XSS
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
