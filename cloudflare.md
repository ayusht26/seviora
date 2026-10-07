# Complete Cloudflare Deployment & Contact Form Guide

This document contains step-by-step instructions for:
1. Deploying the Seviora Pharma website to **Cloudflare** (Pages / Workers).
2. Automating deployments so that every **`git push`** updates the live site automatically.
3. Setting up the **Contact Form** to deliver customer enquiries to **`info@seviorapharma.com`**.
4. Connecting your custom domain **`seviorapharma.com`** once purchased.

---

## Table of Contents
1. [Overview & Architecture](#1-overview--architecture)
2. [Step-by-Step: Initial Deployment to Cloudflare](#2-step-by-step-initial-deployment-to-cloudflare)
3. [How Automatic Updates Work (GitHub → Cloudflare)](#3-how-automatic-updates-work-github--cloudflare)
4. [Contact Form Configuration (Sending to info@seviorapharma.com)](#4-contact-form-configuration)
5. [Connecting Your Custom Domain (seviorapharma.com)](#5-connecting-your-custom-domain)
6. [Receiving Emails at info@seviorapharma.com for Free](#6-receiving-emails-at-infoseviorapharmacom-for-free)
7. [Troubleshooting & FAQs](#7-troubleshooting--faqs)

---

## 1. Overview & Architecture

- **Framework**: Next.js 15 (App Router) + React 19
- **Repository**: [github.com/ayusht26/seviora](https://github.com/ayusht26/seviora)
- **Deployment Platform**: Cloudflare Pages / Workers
  - Cloudflare Pages runs on the same ultra-fast Cloudflare Edge Worker network across 300+ cities worldwide.
  - Cloudflare connects directly to your GitHub repository.
- **Contact Form**: Next.js Server Route (`/api/contact`)
  - Validates visitor data (name, email, phone, organisation, enquiry type, message).
  - Generates a branded HTML email with batch details and enquiry information.
  - Sends the email directly to `pharmaseviora@gmail.com`.
  - Sets the `Reply-To` header to the customer's email, so you can reply with one click.

---

## 2. Step-by-Step: Initial Deployment to Cloudflare

Cloudflare Pages provides free hosting with global CDN, free SSL, and native GitHub integration.

### Step 2.1: Push your latest code to GitHub
Make sure your latest local changes are pushed to your GitHub repository:
```bash
git add .
git commit -m "Configure contact form and Cloudflare setup"
git push origin main
```

---

### Step 2.2: Connect Cloudflare to GitHub

1. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and log in (or sign up for free).
2. On the left sidebar, click **Compute (Workers & Pages)**.
3. Click the **Create application** button.
4. Select the **Pages** tab (recommended for Next.js web applications).
5. Click **Connect to Git**.
6. Select your GitHub account and authorize Cloudflare to access your repositories.
7. Select the repository: **`ayusht26/seviora`** and click **Begin setup**.

---

### Step 2.3: Configure Build Settings

In the build configuration page:

| Setting | Value |
| :--- | :--- |
| **Project name** | `seviora` (or your preferred name) |
| **Production branch** | `main` |
| **Framework preset** | `Next.js` |
| **Build command** | `npx @cloudflare/next-on-pages` *(or `npm run build`)* |
| **Build output directory** | `.vercel/output/static` *(or `.next`)* |
| **Root directory** | `/` (leave empty or default) |

#### Compatibility Flags:
Under **Environment variables / Compatibility flags** (or under Project Settings > Functions later):
- Set **Compatibility date**: `2024-09-23` (or latest)
- Add Compatibility flag: `nodejs_compat`

---

### Step 2.4: Add Environment Variables in Cloudflare

In the same setup screen (or under **Settings > Environment variables** in the Cloudflare Pages dashboard), add the following variables:

| Variable Name | Value | Purpose |
| :--- | :--- | :--- |
| `CONTACT_RECEIVER_EMAIL` | `info@seviorapharma.com` | Destination inbox for enquiries |
| `RESEND_API_KEY` | `re_your_api_key_here` | Your Resend API key (see section 4) |
| `RESEND_FROM_EMAIL` | `Seviora Inquiries <onboarding@resend.dev>` | Initial sender (update after domain purchase) |
| `NODE_VERSION` | `20.18.0` | Ensures Node 20 runtime during build |

---

### Step 2.5: Deploy

1. Click **Save and Deploy**.
2. Cloudflare will clone your GitHub repo, install dependencies, compile the site, and deploy it to a global edge URL (e.g., `https://seviora.pages.dev`).
3. Once completed (typically 1-2 minutes), you can click the live URL to verify the site is up and running.

---

## 3. How Automatic Updates Work (GitHub → Cloudflare)

Once your GitHub repository is connected to Cloudflare Pages, **deployments are 100% automated**.

### The Workflow:
```
Local Code Edit ──► git commit & push ──► GitHub ──► Cloudflare Webhook ──► Auto Build & Live Deploy (~60s)
```

### Steps to update your site anytime:
Whenever you update code, add products, or modify content on your computer:

```bash
# 1. Stage changes
git add .

# 2. Commit changes
git commit -m "Update products and pricing catalogue"

# 3. Push to GitHub
git push origin main
```

### What happens automatically:
1. Cloudflare instantly receives a webhook from GitHub.
2. A new build begins in Cloudflare Dashboard under **Deployments**.
3. In ~60 seconds, your updates are pushed live globally across Cloudflare's 300+ data centers.
4. **Zero downtime**: Cloudflare serves the old version until the new build finishes, then switches instantly.
5. **Preview Branches**: If you create a branch other than `main` (e.g., `git checkout -b redesign`), Cloudflare generates a private preview URL so you can test before merging.

---

## 4. Contact Form Configuration

The contact form is located at `/contact` on your site. When a doctor, hospital, or distributor submits an enquiry:
1. The form validates all fields in real-time.
2. It sends a `POST` request to `/api/contact`.
3. The server generates a professional HTML email and dispatches it to **`pharmaseviora@gmail.com`**.
4. The visitor sees an immediate confirmation badge on the screen.

### Email Provider: Resend (Recommended)
Cloudflare Workers/Pages run on an edge runtime. **Resend** uses HTTP REST APIs (native `fetch`), making it the most reliable, fast, and secure email provider for Cloudflare and Next.js.
- **Price**: 100% Free (up to 3,000 emails/month or 100/day).

#### Step 4.1: Get a free Resend API Key
1. Sign up at [https://resend.com](https://resend.com).
2. Go to [API Keys](https://resend.com/api-keys) and click **Create API Key**.
3. Name it `Seviora Website` and grant `Full access`.
4. Copy the key (starts with `re_...`).

#### Step 4.2: Add Key to Cloudflare (Securely via Wrangler)
> [!CAUTION]
> Do NOT save your Resend key in `wrangler.jsonc` or push it to GitHub, as GitHub secret scanning will revoke it automatically.

Run this command in your terminal to save it encrypted on Cloudflare:
```powershell
're_your_api_key_here' | npx wrangler secret put RESEND_API_KEY
```

#### Step 4.3: Testing before domain purchase
- Before you purchase `seviorapharma.com`, Resend provides a sandbox sender:
  - `RESEND_FROM_EMAIL`: `Seviora Inquiries <onboarding@resend.dev>`
  - Enquiries are forwarded to your registered account email: `pharmaseviora@gmail.com`.
- In local development without an API key, the API logs incoming enquiry payloads to the terminal without crashing.

#### Step 4.4: After purchasing `seviorapharma.com`
Once you purchase the domain:
1. In Resend, go to **Domains** > **Add Domain** > enter `seviorapharma.com`.
2. Resend will provide 3 DNS records:
   - **DKIM** (TXT)
   - **SPF** (TXT)
   - **Return-Path / MX** (CNAME or MX)
3. Add these records in your Cloudflare DNS table (under your domain in Cloudflare).
4. Click **Verify Domain** in Resend.
5. Update your Cloudflare Environment Variable:
   - `RESEND_FROM_EMAIL` = `Seviora Inquiries <contact@seviorapharma.com>` (or `enquiry@seviorapharma.com`)
6. All enquiries will now be delivered with verified domain signatures to `info@seviorapharma.com` without going to spam.

---

## 5. Connecting Your Custom Domain (`seviorapharma.com`)

Once you purchase `seviorapharma.com`:

### If you buy the domain directly on Cloudflare Registrar:
- Pricing is at wholesale cost (no renewal markups).
- DNS and SSL configuration are completely automatic with zero setup.

### If you buy on GoDaddy, Namecheap, Hostinger, or Google Domains:
1. In Cloudflare, click **Add a domain** > enter `seviorapharma.com`.
2. Select the **Free** plan.
3. Cloudflare will give you 2 nameservers (e.g., `adam.ns.cloudflare.com` and `eve.ns.cloudflare.com`).
4. In your registrar (GoDaddy/Namecheap), go to **DNS Management** > **Nameservers** > change them to Cloudflare's nameservers.

### Link Domain to Pages Project:
1. In Cloudflare Dashboard, go to **Workers & Pages** > click your **`seviora`** project.
2. Go to the **Custom domains** tab.
3. Click **Set up a custom domain**.
4. Enter `seviorapharma.com` and click **Continue**.
5. Click **Activate domain**.
6. Repeat once more for `www.seviorapharma.com`.
7. Cloudflare automatically issues an SSL certificate (HTTPS) and handles redirects.

---

## 6. Receiving Emails at `info@seviorapharma.com` for Free

Since you want enquiries sent to `info@seviorapharma.com`, you will need an inbox that receives those emails. You have two options:

### Option A: Cloudflare Email Routing (100% Free - Recommended)
If you do not want to pay for a Google Workspace or Microsoft 365 business mailbox ($6/month):
1. In Cloudflare Dashboard, click your domain **`seviorapharma.com`**.
2. Click **Email Routing** in the left menu.
3. Click **Enable Email Routing**.
4. Add a custom address rule:
   - **Custom address**: `info@seviorapharma.com`
   - **Action**: `Send to`
   - **Destination**: Your personal Gmail or Outlook address (e.g., `yourname@gmail.com`).
5. Verify the destination email address.
6. Now, any email sent to `info@seviorapharma.com` (including contact form enquiries) lands directly in your personal inbox for free.

### Option B: Paid Business Inbox (Google Workspace / Zoho Mail)
If you want a dedicated inbox and webmail interface:
- **Zoho Mail**: Free tier for up to 5 users, or ₹65/user/month.
- **Google Workspace**: ₹125 - ₹400/month per user for Gmail interface.
- You simply add the MX records provided by Zoho or Google into your Cloudflare DNS table.

---

## 7. Troubleshooting & FAQs

### Q: Why did the contact form previously open my email app?
**A**: Previously, the form used a browser `mailto:` link fallback. It has now been upgraded to submit via `fetch` to `/api/contact`, sending automated server emails with loading states and success confirmation.

### Q: What if an enquiry fails to send?
- Check Cloudflare Pages > **Deployments** > click latest deployment > **Functions** tab to see live execution logs.
- Check that `RESEND_API_KEY` is present in your Environment Variables.
- In Resend dashboard, check the **Logs** tab to see whether emails were accepted or rejected.

### Q: How do I test the form locally before deploying?
1. Open `.env.local`.
2. Add your `RESEND_API_KEY=re_...`.
3. Run `npm run dev`.
4. Open `http://localhost:3000/contact` and submit a test message.
5. Check your inbox for the formatted message.

### Q: Can I roll back if an update breaks?
**A**: Yes. In Cloudflare Dashboard > **Workers & Pages** > **`seviora`** > **Deployments**, every single push has its own build history. Click the three dots on any previous deployment and select **Rollback to this deployment** to instantly restore it.

