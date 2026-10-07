# Complete Cloudflare Deployment & Contact Form Guide

Please refer to the complete documentation in [cloudflare.md](file:///d:/Coding/sevoria/cloudflare.md) and [FUTURE.md](file:///d:/Coding/sevoria/FUTURE.md).

### Quick Summary:

1. **Deploying to Cloudflare Workers**:
   - The site runs on Cloudflare Workers powered by OpenNext:
     ```bash
     npm run deploy
     ```
   - Live URL: [https://sevoria.ayusht26-codes.workers.dev](https://sevoria.ayusht26-codes.workers.dev)

2. **Contact Form Routing**:
   - Submissions from the `/contact` form are sent to **`pharmaseviora@gmail.com`**.
   - Authenticated with Resend.

3. **Secrets & Security**:
   - `RESEND_API_KEY` is securely stored in Cloudflare Worker encrypted storage via:
     ```powershell
     're_your_key' | npx wrangler secret put RESEND_API_KEY
     ```
   - **Never** add secrets to `wrangler.jsonc` or push them to GitHub.
   - Non-sensitive variables are defined in [wrangler.jsonc](file:///d:/Coding/sevoria/wrangler.jsonc).

