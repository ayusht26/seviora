import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  organisation?: string;
  subject?: string;
  message: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body: ContactFormData = await req.json();
    const { name, email, phone, organisation, subject, message } = body;

    // 1. Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = phone ? escapeHtml(phone.trim()) : "Not provided";
    const safeOrg = organisation ? escapeHtml(organisation.trim()) : "Not provided";
    const safeSubject = subject ? escapeHtml(subject.trim()) : "General Enquiry";
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br/>");

    // Email recipient (the site owner or contact team)
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL || "seviorapharma@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Seviora Inquiries <onboarding@resend.dev>";

    // Clean HTML template for the email
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f6f9fc; color: #1e293b; margin: 0; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
            .header { background: linear-gradient(135deg, #0d2137 0%, #16385d 100%); padding: 30px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px; }
            .header p { margin: 6px 0 0; font-size: 14px; opacity: 0.85; color: #2ecc71; }
            .content { padding: 30px; }
            .badge { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 4px 12px; border-radius: 9999px; font-size: 13px; font-weight: 600; margin-bottom: 20px; }
            .field-group { margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #f1f5f9; }
            .field-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #0f172a; line-height: 1.5; }
            .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; margin-top: 10px; font-size: 15px; line-height: 1.6; color: #334155; }
            .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 30px; text-align: center; font-size: 12px; color: #94a3b8; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Seviora Pharma</h1>
              <p>New Website Contact Form Submission</p>
            </div>
            <div class="content">
              <span class="badge">${safeSubject}</span>
              
              <div class="field-group">
                <div class="field-label">Sender Name</div>
                <div class="field-value"><strong>${safeName}</strong></div>
              </div>

              <div class="field-group">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${safeEmail}" style="color: #0284c7; text-decoration: none;">${safeEmail}</a></div>
              </div>

              <div class="field-group">
                <div class="field-label">Phone Number</div>
                <div class="field-value">${safePhone}</div>
              </div>

              <div class="field-group">
                <div class="field-label">Organisation / Hospital</div>
                <div class="field-value">${safeOrg}</div>
              </div>

              <div>
                <div class="field-label">Message Content</div>
                <div class="message-box">
                  ${safeMessage}
                </div>
              </div>
            </div>
            <div class="footer">
              This message was sent from the contact form on Seviora Pharma website.<br/>
              You can hit &quot;Reply&quot; in your email client to directly email ${safeName} (${safeEmail}).
            </div>
          </div>
        </body>
      </html>
    `;

    // 2. Option A: Use Resend if RESEND_API_KEY is configured (Recommended for Vercel)
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const data = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: email,
        subject: `[Website Enquiry] ${subject ? subject : "New Contact Form Message"} - ${name}`,
        html: emailHtml,
      });

      if (data.error) {
        console.error("Resend API error:", data.error);
        return NextResponse.json(
          { error: data.error.message || "Failed to send email via Resend" },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Message sent successfully!",
      });
    }

    // 3. Option B: Use Nodemailer SMTP if SMTP credentials are provided
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const nodemailer = (await import("nodemailer")).default;
      const port = Number(process.env.SMTP_PORT || 587);
      const secure = process.env.SMTP_SECURE === "true" || port === 465;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port,
        secure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || `"${name} via Seviora" <${process.env.SMTP_USER}>`,
        to: toEmail,
        replyTo: email,
        subject: `[Website Enquiry] ${subject ? subject : "New Contact Form Message"} - ${name}`,
        html: emailHtml,
      });

      return NextResponse.json({
        success: true,
        message: "Message sent successfully!",
      });
    }

    // 4. Development Fallback if no email provider is configured yet
    console.warn(
      "[Seviora Contact Form] No email service configured (RESEND_API_KEY or SMTP credentials missing). Form submission logged locally:"
    );
    console.log({
      name,
      email,
      phone,
      organisation,
      subject,
      message,
      to: toEmail,
    });

    return NextResponse.json({
      success: true,
      message:
        "Message received! (Note: Server is running in dev mode. Set RESEND_API_KEY or SMTP credentials to deliver live emails to your inbox.)",
    });
  } catch (error: unknown) {
    console.error("Error processing contact form:", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
