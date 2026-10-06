"use client";

import { useState, type FormEvent } from "react";
import { CONTACT, PageHead, Reveal } from "@/components/site";
import styles from "./page.module.css";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    const form = e.currentTarget;
    const f = new FormData(form);

    const payload = {
      name: String(f.get("name") || ""),
      organisation: String(f.get("org") || ""),
      email: String(f.get("email") || ""),
      phone: String(f.get("phone") || ""),
      subject: String(f.get("subject") || "General enquiry"),
      message: String(f.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setSent(true);
    } catch (err: unknown) {
      console.error("Submission error:", err);
      const msg = err instanceof Error ? err.message : "Something went wrong while sending your enquiry.";
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  const info = [
    { k: "Email", v: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { k: "Phone", v: CONTACT.phone, href: `tel:${CONTACT.phoneHref}` },
    { k: "Location", v: CONTACT.city },
    { k: "Certification", v: "ISO 9001:2015 Certified Company" },
  ];

  return (
    <>
      <PageHead
        eyebrow="Seviora Pharma · Lucknow"
        title="Contact Us"
        lede="Tell us what you need — product pricing, a catalogue, or a partnership conversation. We'll get back to you promptly."
      />
      <section className={styles.section}>
        <div className={styles.infoCol}>
          {info.map((i, n) => (
            <Reveal key={i.k} delay={n * 80}>
              <div className={styles.infoCard}>
                <p className={styles.infoKey}>{i.k}</p>
                {i.href ? (
                  <a href={i.href} className={styles.infoValLink}>
                    {i.v}
                  </a>
                ) : (
                  <p className={styles.infoVal}>{i.v}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className={styles.formCard}>
            {sent ? (
              <div className={`rise ${styles.sentState}`}>
                <div className={styles.sentIcon}>✓</div>
                <h2 className={styles.sentTitle}>Enquiry Sent Successfully!</h2>
                <p className={styles.sentDesc}>
                  Thank you for reaching out. Your enquiry has been forwarded directly to{" "}
                  <strong>{CONTACT.email}</strong>. Our team will review your message and get back to you promptly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className={styles.sentAgainBtn}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className={styles.formGrid}>
                <h2 className={styles.formTitle}>Send an enquiry</h2>
                {errorMessage && (
                  <div className={styles.errorMessage}>
                    {errorMessage}
                  </div>
                )}
                <label className={styles.label}>
                  Full name *
                  <input required name="name" disabled={loading} className={styles.field} placeholder="Dr. Sharma / Mr. Gupta" />
                </label>
                <label className={styles.label}>
                  Organisation
                  <input name="org" disabled={loading} className={styles.field} placeholder="Hospital, Clinic or Pharmacy name" />
                </label>
                <label className={styles.label}>
                  Email *
                  <input required type="email" name="email" disabled={loading} className={styles.field} placeholder="you@domain.com" />
                </label>
                <label className={styles.label}>
                  Phone *
                  <input required type="tel" name="phone" disabled={loading} className={styles.field} placeholder="+91 98765 43210" />
                </label>
                <label className={`${styles.label} ${styles.colSpanFull}`}>
                  Subject
                  <select name="subject" disabled={loading} className={styles.field}>
                    <option>General enquiry</option>
                    <option>Product enquiry</option>
                    <option>Catalogue request</option>
                    <option>Distribution partnership</option>
                  </select>
                </label>
                <label className={`${styles.label} ${styles.colSpanFull}`}>
                  Message *
                  <textarea required name="message" rows={5} disabled={loading} className={styles.field} placeholder="Please describe your requirements or inquiry..." />
                </label>
                <button type="submit" disabled={loading} className={styles.submitBtn}>
                  {loading ? "Sending enquiry..." : "Send enquiry"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}

