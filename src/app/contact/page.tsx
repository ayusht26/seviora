"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.classList.add('js-reveal-ready');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AOrganisation: ${form.organisation}%0A%0AMessage:%0A${form.message}`;
    const mailtoLink = `mailto:info@seviorapharma.com?subject=${encodeURIComponent(form.subject || "Enquiry from Website")}&body=${body}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero} aria-label="Contact page header">
        <div className={styles.pageHeroBg} aria-hidden="true" />
        <div className="container">
          <div className={styles.pageHeroContent}>
            <span className="eyebrow" style={{ color: "var(--mint-light)" }}>
              Reach Out
            </span>
            <h1 className={styles.pageTitle}>Contact Us</h1>
            <p className={styles.pageSubtitle}>
              Have a product enquiry, want to become a distribution partner, or
              just need information? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" aria-labelledby="contact-heading">
        <div className="container">
          <h2 id="contact-heading" className="sr-only">Contact Details and Form</h2>
          <div className={styles.contactLayout}>
            {/* Left: Info */}
            <div className={`${styles.contactInfo} reveal`}>
              <div>
                <span className="eyebrow">Get in Touch</span>
                <h3 className={styles.infoTitle}>We&apos;re Here to Help</h3>
                <p className={styles.infoText}>
                  Whether you&apos;re a healthcare provider, hospital, distributor,
                  or chemist—our team is ready to assist you with product information,
                  pricing, and partnership opportunities.
                </p>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <span className={styles.contactCardLabel}>Email</span>
                  <a href="mailto:info@seviorapharma.com" className={styles.contactCardLink}>
                    info@seviorapharma.com
                  </a>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <span className={styles.contactCardLabel}>Location</span>
                  <span className={styles.contactCardValue}>
                    Lucknow, Uttar Pradesh<br />India
                  </span>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className={styles.contactCardLabel}>Business Hours</span>
                  <span className={styles.contactCardValue}>
                    Mon – Sat: 9:00 AM – 6:00 PM IST<br />
                    Sunday: Closed
                  </span>
                </div>
              </div>

              {/* Quick links */}
              <div className={styles.quickLinksBox}>
                <p className={styles.quickLinksTitle}>Quick Links</p>
                <div className={styles.quickLinks}>
                  <a href="/products" className={styles.quickLink}>Product Catalogue →</a>
                  <a href="/about" className={styles.quickLink}>About the Company →</a>
                  <a href="mailto:info@seviorapharma.com" className={styles.quickLink}>Email Us Directly →</a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className={`${styles.contactForm} reveal`}>
              {submitted ? (
                <div className={styles.successMessage} role="status" aria-live="polite">
                  <div className={styles.successIcon} aria-hidden="true">
                    <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className={styles.successTitle}>Message Sent!</h3>
                  <p className={styles.successText}>
                    Your email client should have opened. If not, please write
                    directly to{" "}
                    <a href="mailto:info@seviorapharma.com" className={styles.successLink}>
                      info@seviorapharma.com
                    </a>
                  </p>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: "1.5rem" }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className={styles.formTitle}>Send Us a Message</h3>
                  <p className={styles.formSubtitle}>
                    Fill in the form and we&apos;ll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.formLabel}>Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className={styles.formInput}
                          placeholder="Dr. Priya Sharma"
                          value={form.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className={styles.formInput}
                          placeholder="doctor@hospital.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                        />
                      </div>
                    </div>

                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className={styles.formInput}
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="organisation" className={styles.formLabel}>Organisation / Hospital</label>
                        <input
                          id="organisation"
                          name="organisation"
                          type="text"
                          className={styles.formInput}
                          placeholder="City Hospital, Lucknow"
                          value={form.organisation}
                          onChange={handleChange}
                          autoComplete="organization"
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        className={styles.formSelect}
                        value={form.subject}
                        onChange={handleChange}
                      >
                        <option value="">Select a subject…</option>
                        <option value="Product Enquiry">Product Enquiry</option>
                        <option value="Distribution Partnership">Distribution Partnership</option>
                        <option value="Price List Request">Price List Request</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.formLabel}>Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        className={styles.formTextarea}
                        placeholder="Tell us about your requirements, the products you're interested in, or any questions you have…"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                      />
                    </div>

                    <InteractiveHoverButton
                      as="button"
                      type="submit"
                      text="Send Message"
                      id="contact-submit-btn"
                      className={styles.submitHoverBtn}
                    />

                    <p className={styles.formNote}>
                      * This will open your email client. Alternatively, write directly to{" "}
                      <a href="mailto:info@seviorapharma.com" className={styles.noteLink}>
                        info@seviorapharma.com
                      </a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
