"use client";

import { useState, type FormEvent } from "react";
import { CONTACT, PageHead, Reveal } from "@/components/site";
import styles from "./page.module.css";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nOrganisation: ${f.get("org")}\nEmail: ${f.get("email")}\nPhone: ${f.get("phone")}\n\n${f.get("message")}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      String(f.get("subject"))
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
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
                <h2 className={styles.sentTitle}>Thank you!</h2>
                <p className={styles.sentDesc}>
                  Your email app should open with your message. You can also write to us directly at{" "}
                  {CONTACT.email}.
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
                <label className={styles.label}>
                  Full name *
                  <input required name="name" className={styles.field} />
                </label>
                <label className={styles.label}>
                  Organisation
                  <input name="org" className={styles.field} />
                </label>
                <label className={styles.label}>
                  Email *
                  <input required type="email" name="email" className={styles.field} />
                </label>
                <label className={styles.label}>
                  Phone *
                  <input required type="tel" name="phone" className={styles.field} />
                </label>
                <label className={`${styles.label} ${styles.colSpanFull}`}>
                  Subject
                  <select name="subject" className={styles.field}>
                    <option>General enquiry</option>
                    <option>Product enquiry</option>
                    <option>Catalogue request</option>
                    <option>Distribution partnership</option>
                  </select>
                </label>
                <label className={`${styles.label} ${styles.colSpanFull}`}>
                  Message *
                  <textarea required name="message" rows={5} className={styles.field} />
                </label>
                <button type="submit" className={styles.submitBtn}>
                  Send enquiry
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}
