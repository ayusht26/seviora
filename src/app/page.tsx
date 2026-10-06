"use client";

import Link from "next/link";
import { Counter, Reveal } from "@/components/site";
import styles from "./page.module.css";

const divisions = [
  {
    t: "Pharmaceutical Formulations",
    d: "Branded generics and ethical formulations across key therapeutic segments, with full batch documentation.",
    tags: ["Antibiotics", "Cardiology", "Gastro", "Diabetes"],
  },
  {
    t: "Medical Consumables",
    d: "Everyday essentials — gloves, syringes, masks, IV cannulae and PPE — kept in steady supply.",
    tags: ["Gloves", "Syringes", "Masks", "PPE"],
  },
  {
    t: "Devices & Diagnostics",
    d: "Reliable devices and rapid diagnostics for clinics, nursing homes and pathology labs.",
    tags: ["Glucometers", "Oximeters", "Rapid tests"],
  },
  {
    t: "Institutional Supply",
    d: "Scheduled replenishment and dedicated support for hospitals and healthcare institutions.",
    tags: ["Bulk orders", "Scheduled supply"],
  },
];

const commitments = [
  {
    t: "Quality assured",
    d: "Every product is sourced from verified manufacturers and checked before dispatch.",
  },
  {
    t: "ISO 9001:2015 certified",
    d: "Our processes follow internationally recognised quality management standards.",
  },
  {
    t: "Dependable supply",
    d: "Planned inventory so healthcare providers are never left waiting on essentials.",
  },
  {
    t: "Documentation ready",
    d: "Licences, certificates and invoices travel with every consignment.",
  },
];

const marquee = [
  "ISO 9001:2015 Certified",
  "Quality Medicines",
  "Medical Consumables",
  "Diagnostics",
  "Institutional Supply",
  "Based in Lucknow",
];

function Molecule() {
  return (
    <svg viewBox="0 0 400 400" className={styles.moleculeSvg}>
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--brand-blue)" />
          <stop offset="0.5" stopColor="var(--brand-teal)" />
          <stop offset="1" stopColor="var(--brand-green)" />
        </linearGradient>
      </defs>
      <g className="orbit">
        <circle cx="200" cy="200" r="170" fill="none" stroke="var(--border)" strokeDasharray="2 8" />
      </g>
      <circle cx="200" cy="200" r="120" fill="none" stroke="var(--border)" />
      <g stroke="url(#g)" strokeWidth="10" strokeLinecap="round" fill="none">
        <path className="draw" d="M200 200 L120 110" />
        <path className="draw" d="M200 200 L285 115" />
        <path className="draw" d="M200 200 L125 290" />
        <path className="draw" d="M200 200 L280 290" />
      </g>
      <circle cx="200" cy="200" r="52" fill="var(--card)" stroke="url(#g)" strokeWidth="12" />
      <g className="floaty">
        <circle cx="120" cy="110" r="28" fill="var(--brand-blue)" />
        <circle cx="285" cy="115" r="26" fill="var(--brand-teal)" />
      </g>
      <g className="floaty" style={{ animationDelay: "-3s" }}>
        <circle cx="125" cy="290" r="26" fill="var(--brand-green)" opacity="0.75" />
        <circle cx="280" cy="290" r="24" fill="var(--brand-green)" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBlurLeft} />
        <div className={styles.heroBlurRight} />
        <div className={styles.heroGrid}>
          <div>
            <p className={`rise ${styles.heroBadge}`}>
              <span className={styles.heroBadgeDot} /> ISO 9001:2015 Certified · Lucknow
            </p>
            <h1 className={styles.heroTitle}>
              {["Quality medicines.", "Reliable supply.", "Trusted care."].map((l, i) => (
                <span key={l} className={styles.titleLineWrap}>
                  <span
                    className={`rise ${i === 2 ? "text-gradient" : ""}`}
                    style={{ animationDelay: `${150 + i * 130}ms` }}
                  >
                    {l}
                  </span>
                </span>
              ))}
            </h1>
            <p className={`rise ${styles.heroSubtitle}`} style={{ animationDelay: "600ms" }}>
              Seviora Pharma is a trusted pharmaceutical company delivering quality medicines,
              medical goods and solutions to healthcare providers.
            </p>
            <div className={`rise ${styles.heroButtons}`} style={{ animationDelay: "750ms" }}>
              <Link href="/products" className={styles.btnPrimary}>
                Explore products
              </Link>
              <Link href="/contact" className={styles.btnOutline}>
                Talk to our team
              </Link>
            </div>
          </div>
          <div className={`rise ${styles.moleculeWrap}`} style={{ animationDelay: "300ms" }}>
            <Molecule />
          </div>
        </div>

        {/* Marquee Banner */}
        <div className={styles.marqueeBand}>
          <div className="marquee">
            {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
              <span key={i} className={styles.marqueeItem}>
                {m}
                <span className={styles.marqueeDot} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className={styles.divisionsSection}>
        <Reveal>
          <p className={styles.eyebrow}>What we supply</p>
          <h2 className={styles.divisionsTitle}>Four divisions, one standard of quality.</h2>
        </Reveal>
        <div className={styles.divisionsGrid}>
          {divisions.map((d, i) => (
            <Reveal key={d.t} delay={i * 90}>
              <div className={styles.divisionCard}>
                <div className={styles.cardAccentBar} />
                <span className={styles.cardNum}>0{i + 1}</span>
                <h3 className={styles.cardTitle}>{d.t}</h3>
                <p className={styles.cardDesc}>{d.d}</p>
                <div className={styles.tagList}>
                  {d.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Seviora (Dark band) */}
      <section className={styles.whySection}>
        <div className={styles.whyGrid}>
          <Reveal>
            <p className={styles.whyEyebrow}>Why Seviora</p>
            <h2 className={styles.whyTitle}>Why healthcare providers trust us.</h2>
            <div className={styles.counterGrid}>
              <div>
                <div className={styles.counterValue}>
                  <Counter to={100} suffix="%" />
                </div>
                <p className={styles.counterLabel}>Commitment to quality</p>
              </div>
              <div>
                <div className={styles.counterValue}>
                  <Counter to={4} />
                </div>
                <p className={styles.counterLabel}>Product divisions</p>
              </div>
            </div>
          </Reveal>
          <div className={styles.commitmentsList}>
            {commitments.map((c, i) => (
              <Reveal key={c.t} delay={i * 100}>
                <div className={styles.commitmentRow}>
                  <span className={styles.commitmentNum}>0{i + 1}</span>
                  <div>
                    <h3 className={styles.commitmentHeading}>{c.t}</h3>
                    <p className={styles.commitmentDesc}>{c.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className={styles.ctaSection}>
        <Reveal>
          <div className={styles.ctaCard}>
            <div className={styles.ctaDecoration} />
            <h2 className={styles.ctaHeading}>
              Looking for a dependable pharmaceutical supply partner?
            </h2>
            <p className={styles.ctaSub}>
              Send us an enquiry about products, pricing or partnerships — our team will get back to you promptly.
            </p>
            <Link href="/contact" className={styles.ctaBtn}>
              Contact us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
