# Future Updates & Maintenance Guide (Cloudflare Workers)

This document contains a complete, step-by-step guide on how to develop, modify, test, and deploy changes to the **Seviora Pharma** website.

---

## 1. Quick Reference & Current Deployment

- **Live URL**: [https://sevoria.ayusht26-codes.workers.dev](https://sevoria.ayusht26-codes.workers.dev)
- **Deployment Platform**: Cloudflare Workers
- **Adapter**: OpenNext for Cloudflare (`@opennextjs/cloudflare`)
- **Worker Name**: `sevoria`
- **Framework**: Next.js 15 (App Router) + React 19
- **Email Service**: Resend API (`/api/contact`)

---

## 2. Step-by-Step: Making Any Changes to the Website

Whenever you need to update text, add new medicines, alter styling, or change contact details, follow these 5 steps:

### Step 1: Start the Local Development Server
Before editing, run the local Next.js development server to see changes in real-time with hot reload:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Step 2: Edit Your Code / Content
Make your required changes in the code. Here is a cheat sheet of where everything is located:

| What you want to change | File to edit |
| :--- | :--- |
| **Medicines / Product Catalogue** | [src/lib/products.ts](file:///d:/Coding/sevoria/src/lib/products.ts) |
| **Homepage Content & Hero Banner** | [src/app/page.tsx](file:///d:/Coding/sevoria/src/app/page.tsx) |
| **About Us Page** | [src/app/about/page.tsx](file:///d:/Coding/sevoria/src/app/about/page.tsx) |
| **Products Page Layout** | [src/app/products/page.tsx](file:///d:/Coding/sevoria/src/app/products/page.tsx) |
| **Contact Page & Form** | [src/app/contact/page.tsx](file:///d:/Coding/sevoria/src/app/contact/page.tsx) |
| **Contact Form Email Handler** | [src/app/api/contact/route.ts](file:///d:/Coding/sevoria/src/app/api/contact/route.ts) |
| **Header / Navigation Bar** | [src/components/Navbar.tsx](file:///d:/Coding/sevoria/src/components/Navbar.tsx) |
| **Footer (Address, Phone, Email, Links)**| [src/components/Footer.tsx](file:///d:/Coding/sevoria/src/components/Footer.tsx) |
| **Global Styling & Colors** | [src/app/globals.css](file:///d:/Coding/sevoria/src/app/globals.css) |
| **Logos & Static Assets** | `public/logo.png`, `public/logo-white.png`, `public/favicon.png` |

---

### Step 3: Test Locally with Cloudflare Simulation (Optional but Recommended)
To verify that the Next.js build and Cloudflare Worker runtime function identically to production before publishing live:
```bash
npm run preview
```
This builds the OpenNext bundle and starts a local Wrangler preview server simulating the Cloudflare edge runtime.

---

### Step 4: Deploy Live to Cloudflare Workers
When you are ready to publish your updates to the live website, run:
```bash
npm run deploy
```
This single command automatically:
1. Runs `next build` to compile pages and validate TypeScript types.
2. Runs `opennextjs-cloudflare build` to create the edge bundle.
3. Uploads updated static assets to Cloudflare.
4. Deploys the new worker code to [https://sevoria.ayusht26-codes.workers.dev](https://sevoria.ayusht26-codes.workers.dev) in seconds with **zero downtime**.

---

### Step 5: Save & Push Changes to Git
Keep your GitHub repository updated with your latest changes:
```bash
git add .
git commit -m "Describe your changes here (e.g. Added new pediatric syrups)"
git push origin main
```

---

## 3. How to Update Environment Variables

Environment variables control where contact enquiries are sent and how Resend authenticates.

### A. Production Variables (Live on Cloudflare)
Production environment variables are configured in [wrangler.jsonc](file:///d:/Coding/sevoria/wrangler.jsonc) under the `"vars"` block:

```jsonc
"vars": {
  "CONTACT_RECEIVER_EMAIL": "pharmaseviora@gmail.com",
  "RESEND_FROM_EMAIL": "Seviora Inquiries <onboarding@resend.dev>",
  "RESEND_API_KEY": "re_your_api_key_here"
}
```

Whenever you modify any value in `wrangler.jsonc`, simply run:
```bash
npm run deploy
```
Wrangler will immediately update the live Worker's environment variables.

> [!TIP]
> You can also view or edit environment variables directly in the **Cloudflare Dashboard**:
> 1. Go to **Workers & Pages** > Click **`sevoria`**.
> 2. Go to **Settings** > **Variables and Secrets**.

### B. Local Development Variables
- Local `npm run dev` reads from [`.env.local`](file:///d:/Coding/sevoria/.env.local).
- Local `npm run preview` reads from [`.dev.vars`](file:///d:/Coding/sevoria/.dev.vars).

Keep both files updated if you generate a new API key.

---

## 4. When You Connect Your Custom Domain (`seviorapharma.com`)

Once you purchase or connect `seviorapharma.com`:

### Step 4.1: Connect Domain to the Worker
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > click **`sevoria`**.
2. Click the **Settings** tab (or **Triggers / Custom Domains**).
3. Click **Add Custom Domain**.
4. Enter `seviorapharma.com` and click **Add Custom Domain**.
5. Repeat for `www.seviorapharma.com`.
6. Cloudflare automatically handles SSL certificates, HTTPS, and routing.

### Step 4.2: Update Email Sender in Resend & Cloudflare
1. In [Resend Dashboard](https://resend.com/domains), add `seviorapharma.com` and verify the DNS records in Cloudflare.
2. In [wrangler.jsonc](file:///d:/Coding/sevoria/wrangler.jsonc), update:
   - `"CONTACT_RECEIVER_EMAIL"`: `"info@seviorapharma.com"`
   - `"RESEND_FROM_EMAIL"`: `"Seviora Inquiries <contact@seviorapharma.com>"`
3. Run `npm run deploy`.

---

## 5. Helpful Commands Cheatsheet

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start standard Next.js local development server (fast reload) |
| `npm run preview` | Build and run edge preview locally with Wrangler |
| `npm run deploy` | Build and deploy updates directly to Cloudflare Workers |
| `npx wrangler tail` | View real-time live logs and console errors from the deployed Worker |
| `npx wrangler whoami` | Check which Cloudflare account is currently logged in |

---

## 6. Rollback / Emergency Fixes

If you ever deploy a change that introduces an error:
1. Open [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **`sevoria`**.
2. Go to the **Deployments** tab.
3. Every deployment is versioned. Click the three dots `...` next to any previously working deployment.
4. Select **Rollback to this version** to instantly revert the live site.
