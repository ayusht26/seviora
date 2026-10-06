You are already logged into your Resend dashboard (**ayusht26.codes**). Here is the complete step-by-step walkthrough to set up Resend from scratch for your site, split into two quick stages:

---

### Stage 1: Quick Setup for Testing (Do this right now in 2 minutes)

Before you purchase the domain, Resend provides a free sandbox mode so you can test sending right away.

#### Step 1: Generate your API Key
1. On the left sidebar of your screen, click **API keys** (located right above *Webhooks*).
2. Click the **Create API key** button on the top right.
3. Fill in:
   - **Name**: `Seviora Website`
   - **Permission**: `Full access`
   - **Domain**: `All domains`
4. Click **Add**.
5. Copy the generated key (it starts with `re_...`).  
   *(Copy and save it somewhere safe; Resend will not display it again).*

#### Step 2: Add the Key to Your Project
Open [`.env.local`](file:///d:/Coding/sevoria/.env.local) in your project and paste your key:

```env
CONTACT_RECEIVER_EMAIL=your-resend-account-email@example.com
RESEND_API_KEY=re_your_copied_key_here
RESEND_FROM_EMAIL="Seviora Inquiries <onboarding@resend.dev>"
```

> [!NOTE]
> **Why your account email during testing?**  
> Before verifying a custom domain, Resend's free sandbox (`onboarding@resend.dev`) only delivers test emails to the **email address registered to your Resend account**. Once you add your custom domain in Stage 2, it can send to any address (`info@seviorapharma.com`).

#### Step 3: Test the Contact Form
1. Run `npm run dev` in your terminal.
2. Open `http://localhost:3000/contact` in your browser.
3. Fill out the form and click **Send enquiry**.
4. Check your inbox and return to the **Emails** tab in Resend: your test message will appear there with full delivery stats!

---

### Stage 2: Once You Purchase `seviorapharma.com` (Custom Domain Verification)

Once you buy the domain, you will connect it to Resend so emails look official (sending from `contact@seviorapharma.com` directly to `info@seviorapharma.com`):

#### Step 1: Add Domain in Resend
1. On the left sidebar of your Resend dashboard, click **Domains** (located right above *Logs*).
2. Click **Add Domain**.
3. Type: `seviorapharma.com` and select your region (default is fine).
4. Click **Add**.

#### Step 2: Add the DNS Records (in Cloudflare)
Resend will display **3 DNS records** that prove you own the domain:

| Type | Name / Host | Value / Target | Priority |
| :--- | :--- | :--- | :--- |
| **TXT** (DKIM) | `resend._domainkey` | `k=rsa; p=MIGf...` *(copied from Resend)* | - |
| **TXT** (SPF) | `bounces` | `v=spf1 include:amazonses.com ~all` | - |
| **MX** | `bounces` | `feedback-smtp.us-east-1.amazonses.com` | `10` |

1. Open your Cloudflare dashboard &rarr; select your domain `seviorapharma.com` &rarr; click **DNS** &rarr; **Records**.
2. Click **Add record** and add the 3 records from Resend.
3. Go back to Resend and click **Verify DNS Records**.
4. A green checkmark will appear with status **Verified** (usually takes under 1 minute on Cloudflare).

---

### Stage 3: Add to Cloudflare for Production

When you deploy your site on Cloudflare Pages, go to **Settings &rarr; Environment variables** and add:

```env
RESEND_API_KEY = re_your_resend_api_key
CONTACT_RECEIVER_EMAIL = info@seviorapharma.com
RESEND_FROM_EMAIL = Seviora Inquiries <contact@seviorapharma.com>
```

---

### How to receive emails at `info@seviorapharma.com` for free:

To read enquiries sent to `info@seviorapharma.com` without paying for Google Workspace ($6/month):
1. In Cloudflare, go to **Email Routing** &rarr; click **Enable**.
2. Add a rule:
   - **Custom address**: `info@seviorapharma.com`
   - **Destination**: Your personal Gmail or Outlook address.
3. Any message submitted on the site will be delivered straight to your personal inbox for free.