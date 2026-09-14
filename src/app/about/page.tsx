"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const values = [
  { icon: "🔬", title: "Scientific Rigour", text: "Every product is developed on an evidence-based foundation, validated through clinical research." },
  { icon: "🛡️", title: "Quality First", text: "GMP-certified manufacturing processes ensure each batch meets the highest safety standards." },
  { icon: "🌿", title: "Patient-Centred", text: "Every decision we make begins and ends with the patient's wellbeing and safety." },
  { icon: "🤝", title: "Integrity", text: "We build lasting relationships with healthcare providers through honesty and transparency." },
  { icon: "💡", title: "Innovation", text: "Continuous investment in R&D to bring novel therapeutic solutions to patients in need." },
  { icon: "🌏", title: "Accessibility", text: "Committed to making quality healthcare affordable and available across all of India." },
];

export default function AboutPage() {
  useEffect(() => {
    document.body.classList.add('js-reveal-ready');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero} aria-label="About page header">
        <div className={styles.pageHeroBg} aria-hidden="true" />
        <div className="container">
          <div className={styles.pageHeroContent}>
            <span className="eyebrow" style={{ color: "var(--mint-light)" }}>
              Our Story
            </span>
            <h1 className={styles.pageTitle}>About Seviora Pharma</h1>
            <p className={styles.pageSubtitle}>
              A Lucknow-based pharmaceutical company built on the belief that
              quality healthcare should be accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section" aria-labelledby="story-heading">
        <div className="container">
          <div className={styles.aboutLayout}>
            <div className={`${styles.storyLeft} reveal`}>
              <span className="eyebrow">Our Foundation</span>
              <h2 id="story-heading" className="section-title">
                Built on Trust,<br />
                Driven by Science
              </h2>
              <div className="divider" />
              <p style={{ color: "var(--gray-400)", lineHeight: 1.8, marginBottom: "1rem" }}>
                Seviora Pharma Private Limited was established with a clear vision:
                to bridge the gap between cutting-edge pharmaceutical science and
                accessible healthcare in India. Based in the historic city of Lucknow,
                Uttar Pradesh, we have grown into a trusted name among healthcare
                professionals and patients alike.
              </p>
              <p style={{ color: "var(--gray-400)", lineHeight: 1.8, marginBottom: "1rem" }}>
                Our team of experienced pharmacists, medical professionals, and
                supply chain experts works tirelessly to ensure that every product
                in our portfolio meets the most stringent quality standards—from
                the raw material stage through to final delivery.
              </p>
              <p style={{ color: "var(--gray-400)", lineHeight: 1.8 }}>
                We specialise in pharmaceuticals, medical goods, and orthopaedic
                solutions, serving hospitals, clinics, chemists, and healthcare
                institutions across 50+ cities in India.
              </p>

              <div className={styles.logoBlock}>
                <Image
                  src="/logo.png"
                  alt="Seviora Pharma Private Limited"
                  width={200}
                  height={90}
                  className={styles.storyLogo}
                />
              </div>
            </div>

            <div className={`${styles.storyRight} reveal`}>
              <div className={styles.missionVision}>
                <div className={styles.mvCard}>
                  <div className={styles.mvIcon}>
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className={styles.mvTitle}>Our Vision</h3>
                  <p className={styles.mvText}>
                    To be India's most trusted pharmaceutical company, synonymous
                    with quality, innovation, and patient-first care—from Lucknow
                    to every corner of the nation.
                  </p>
                </div>

                <div className={styles.mvCard}>
                  <div className={styles.mvIcon}>
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <h3 className={styles.mvTitle}>Our Mission</h3>
                  <p className={styles.mvText}>
                    To deliver safe, effective, and affordable pharmaceuticals and
                    medical products to every patient in India, supported by
                    world-class quality systems and a dedicated team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.teamSection} aria-labelledby="values-heading">
        <div className="container">
          <div className={styles.sectionCenter}>
            <span className="eyebrow">What Guides Us</span>
            <h2 id="values-heading" className="section-title">Our Core Values</h2>
            <div className="divider" style={{ margin: "1rem auto 1.5rem" }} />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              These principles shape everything we do—from product development
              to how we serve our partners and patients.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`${styles.valueCard} reveal`}
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <span className={styles.valueIcon} aria-hidden="true">{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" aria-labelledby="about-cta-heading">
        <div className="container">
          <div className={`${styles.aboutCta} reveal`}>
            <div>
              <h2 id="about-cta-heading" className="section-title" style={{ marginBottom: "0.5rem" }}>
                Partner with Seviora
              </h2>
              <p style={{ color: "var(--gray-400)", fontSize: "1rem" }}>
                Join hundreds of healthcare providers who trust Seviora Pharma for quality medicines and medical goods.
              </p>
            </div>
            <div className={styles.aboutCtaButtons}>
              <InteractiveHoverButton
                as="a"
                href="/products"
                text="View Products"
                id="about-view-products-btn"
              />
              <InteractiveHoverButton
                as="a"
                href="/contact"
                text="Contact Us"
                id="about-contact-btn"
                className={styles.aboutCtaNavy}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
