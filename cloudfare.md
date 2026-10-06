# Complete Cloudflare Deployment & Contact Form Guide

Please refer to the complete documentation in [cloudflare.md](file:///d:/Coding/sevoria/cloudflare.md).

### Quick Summary:

1. **Upload / Deploy to Cloudflare**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Compute (Workers & Pages)** > **Create application** > **Pages** > **Connect to Git**.
   - Select repository: `ayusht26/seviora`.
   - Preset: `Next.js`.
   - Add Environment Variables:
     - `CONTACT_RECEIVER_EMAIL` = `info@seviorapharma.com`
     - `RESEND_API_KEY` = `re_your_api_key_from_resend`
     - `RESEND_FROM_EMAIL` = `Seviora Inquiries <onboarding@resend.dev>`
   - Click **Save and Deploy**.

2. **Automatic Updates on `git push`**:
   - Any time you run:
     ```bash
     git add .
     git commit -m "Update site content"
     git push origin main
     ```
   - Cloudflare automatically detects the new commit via GitHub webhook and rebuilds/deploys the live site in ~60 seconds with zero downtime.

3. **Contact Form Setup**:
   - The form at `/contact` is fully hooked up to `/api/contact`.
   - Submissions are formatted into a clean HTML email and dispatched to `info@seviorapharma.com`.
   - Supports free sending via [Resend](https://resend.com) (recommended for Cloudflare Workers/Edge) or SMTP.
   - For complete domain setup and free email forwarding via Cloudflare Email Routing, see [cloudflare.md](file:///d:/Coding/sevoria/cloudflare.md).

