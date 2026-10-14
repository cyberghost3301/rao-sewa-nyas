import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed. Use POST." });
  }

  const { name, email, phone, organization, service, message } = req.body || {};

  // Basic required fields validation
  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      error: "Name, email, and message are required fields.",
    });
  }

  // 1. Strict Email Format Verification (username@domain.extension)
  const emailTrimmed = String(email).trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailTrimmed)) {
    return res.status(400).json({
      ok: false,
      error:
        "Invalid email format. Please enter a valid email address as username@domain.extension (e.g. example@gmail.com).",
    });
  }

  // 2. Strict Phone Verification (+91 prefix, 10 digits starting with 6, 7, 8, or 9)
  let formattedPhone = "Not provided";
  if (phone) {
    let rawDigits = String(phone).replace(/\D/g, "");
    if (rawDigits.startsWith("91") && rawDigits.length > 10) {
      rawDigits = rawDigits.slice(2);
    } else if (rawDigits.startsWith("0")) {
      rawDigits = rawDigits.slice(1);
    }
    const tenDigits = rawDigits.slice(0, 10);

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(tenDigits)) {
      return res.status(400).json({
        ok: false,
        error:
          "Invalid phone number. Must be a 10-digit Indian mobile number prefixed with +91, starting with 6, 7, 8, or 9.",
      });
    }
    formattedPhone = `+91 ${tenDigits}`;
  }

  // SMTP Configuration from Environment Variables
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const recipient =
    process.env.CONTACT_RECEIVER_EMAIL ||
    process.env.INQUIRY_NOTIFY_EMAIL ||
    "raosewanyas@gmail.com";

  if (!user || !pass) {
    console.warn(
      "[api/contact] SMTP_USER or SMTP_PASS not set in environment variables."
    );
    return res.status(503).json({
      ok: false,
      error:
        "Email delivery service is pending configuration. Please email raosewanyas@gmail.com directly.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const emailSubject = `New Website Inquiry: ${name}${
      organization ? ` (${organization})` : ""
    }${service ? ` [${service}]` : ""}`;

    const textContent = `
New Inquiry Received from Rao Sewa Nyas Official Website
=========================================================

Name:         ${name}
Organization: ${organization || "Not provided"}
Email:        ${emailTrimmed}
Phone:        ${formattedPhone}
Service Area: ${service || "General Inquiry"}

Message:
---------------------------------------------------------
${message}
---------------------------------------------------------

Sent at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
Origin: https://raosewanyas.org/contact
`;

    await transporter.sendMail({
      from: `"Rao Sewa Nyas Website" <${user}>`,
      to: recipient,
      replyTo: emailTrimmed,
      subject: emailSubject,
      text: textContent,
    });

    return res.status(200).json({
      ok: true,
      message: "Thank you. Your inquiry has been delivered.",
    });
  } catch (error: any) {
    console.error("[api/contact] Error sending email via SMTP:", error);
    return res.status(500).json({
      ok: false,
      error:
        error?.message ||
        "An unexpected error occurred while sending your message. Please reach out to raosewanyas@gmail.com directly.",
    });
  }
}
