"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";



const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 3.932 1.892 7.455 4.835 9.711M9 12.75L11.25 15 15 9.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.188 9.518a11.97 11.97 0 01.813 4.482c0 3.932-1.892 7.455-4.835 9.711" />
      </svg>
    ),
    title: "GMP Certified",
    desc: "All products manufactured under strict Good Manufacturing Practice standards ensuring highest quality.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Regulatory Compliant",
    desc: "Fully compliant with CDSCO, WHO, and other regulatory authorities for safe pharmaceutical distribution.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Pan-India Delivery",
    desc: "Reliable distribution network reaching healthcare providers across 50+ cities throughout India.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "R&D Focused",
    desc: "Continuous research and development to bring innovative therapeutic solutions to market.",
  },
];

const featuredProducts = [
  {
    name: "CardioShield Forte",
    category: "Cardiovascular",
    desc: "Advanced cardiac care formulation for comprehensive heart health management.",
    badge: "Bestseller",
  },
  {
    name: "OsteoFlex Pro",
    category: "Orthopaedic",
    desc: "Next-generation bone & joint support with bioavailable calcium and vitamin D3.",
    badge: "New",
  },
  {
    name: "ImmunePlus Syrup",
    category: "Immunology",
    desc: "Scientifically blended immunity booster for adults and children.",
    badge: "Popular",
  },
];

export default function HomePage() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    document.body.classList.add('js-reveal-ready');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.hero} aria-label="Hero section">
        {/* Animated molecule background */}
        <div className={styles.moleculeBg} aria-hidden="true">
          <svg className={styles.moleculeSvg} viewBox="0 0 800 600" fill="none">
            {/* Nodes */}
            <circle cx="400" cy="180" r="18" fill="rgba(60,191,176,0.25)" />
            <circle cx="500" cy="120" r="12" fill="rgba(60,191,176,0.18)" />
            <circle cx="320" cy="240" r="10" fill="rgba(109,213,200,0.2)" />
            <circle cx="560" cy="250" r="14" fill="rgba(60,191,176,0.15)" />
            <circle cx="280" cy="160" r="8" fill="rgba(168,230,223,0.25)" />
            <circle cx="600" cy="170" r="9" fill="rgba(60,191,176,0.2)" />
            <circle cx="450" cy="300" r="11" fill="rgba(109,213,200,0.18)" />
            {/* Bonds */}
            <line x1="400" y1="180" x2="500" y2="120" stroke="rgba(60,191,176,0.2)" strokeWidth="2" />
            <line x1="400" y1="180" x2="320" y2="240" stroke="rgba(60,191,176,0.15)" strokeWidth="2" />
            <line x1="400" y1="180" x2="560" y2="250" stroke="rgba(60,191,176,0.15)" strokeWidth="2" />
            <line x1="500" y1="120" x2="600" y2="170" stroke="rgba(60,191,176,0.12)" strokeWidth="2" />
            <line x1="560" y1="250" x2="450" y2="300" stroke="rgba(60,191,176,0.12)" strokeWidth="2" />
            <line x1="280" y1="160" x2="400" y2="180" stroke="rgba(60,191,176,0.1)" strokeWidth="2" />
            {/* Outer floating circles */}
            <circle cx="150" cy="100" r="5" fill="rgba(60,191,176,0.12)" className={styles.floatNode1} />
            <circle cx="680" cy="400" r="7" fill="rgba(109,213,200,0.1)" className={styles.floatNode2} />
            <circle cx="100" cy="450" r="4" fill="rgba(60,191,176,0.08)" className={styles.floatNode3} />
            <circle cx="720" cy="80" r="6" fill="rgba(168,230,223,0.12)" className={styles.floatNode4} />
          </svg>
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroLeft}>
            <span className={`eyebrow ${styles.heroEyebrow}`}>
              Seviora Pharma Private Limited
            </span>
            <h1 className={styles.heroTitle}>
              Healing Lives,<br />
              <span className="highlight">One Formula</span><br />
              at a Time
            </h1>
            <p className={styles.heroDesc}>
              A trusted pharmaceutical company delivering quality medicines,
              medical goods, and orthopaedic solutions to healthcare providers
              across India. Rooted in Lucknow, reaching the nation.
            </p>
            <div className={styles.heroCta}>
              <InteractiveHoverButton
                as="a"
                href="/products"
                text="Explore Products"
                id="hero-products-btn"
                className={styles.heroBtn}
              />
              <InteractiveHoverButton
                as="a"
                href="/contact"
                text="Contact Us"
                id="hero-contact-btn"
                className={`${styles.heroBtn} ${styles.heroBtnOutline}`}
              />
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.logoCard}>
              <Image
                src="/logo.png"
                alt="Seviora Pharma Logo"
                width={320}
                height={144}
                priority
                className={styles.heroLogo}
              />
              <div className={styles.logoGlow} aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className={styles.heroFade} aria-hidden="true" />
      </section>



      {/* ===== ABOUT TEASER ===== */}
      <section className="section" aria-labelledby="about-teaser-heading">
        <div className="container">
          <div className={styles.aboutTeaser}>
            <div className={`${styles.aboutTeaserLeft} reveal`}>
              <span className="eyebrow">Who We Are</span>
              <h2 id="about-teaser-heading" className="section-title">
                Dedicated to Healthcare Excellence
              </h2>
              <div className="divider" />
              <p className="section-subtitle">
                Seviora Pharma Private Limited is a Lucknow-based pharmaceutical
                company committed to delivering safe, effective, and affordable
                medicines to patients and healthcare providers across India.
              </p>
              <p style={{ marginTop: "1rem", color: "var(--gray-400)", lineHeight: 1.75 }}>
                With a portfolio spanning general medicine, orthopaedic care,
                and speciality therapeutics, we partner with clinicians to
                improve patient outcomes every day.
              </p>
              <InteractiveHoverButton
                as="a"
                href="/about"
                text="Our Story"
                id="about-teaser-btn"
                style={{ marginTop: "2rem" }}
              />
            </div>
            <div className={`${styles.aboutTeaserRight} reveal`}>
              <div className={styles.featureGrid}>
                {features.map((feat) => (
                  <div key={feat.title} className={styles.featureCard}>
                    <div className={styles.featureIcon}>{feat.icon}</div>
                    <h3 className={styles.featureTitle}>{feat.title}</h3>
                    <p className={styles.featureDesc}>{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className={`section section--alt`} aria-labelledby="products-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="eyebrow">Our Portfolio</span>
            <h2 id="products-heading" className="section-title">Featured Products</h2>
            <div className="divider" />
            <p className="section-subtitle">
              A selection from our wide range of pharmaceutical and medical products—crafted with precision and care.
            </p>
          </div>

          <div className={styles.productsGrid}>
            {featuredProducts.map((product, i) => (
              <div
                key={product.name}
                className={`card ${styles.productCard} reveal`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={styles.productCardTop}>
                  <span className={styles.productBadge}>{product.badge}</span>
                  <span className={styles.productCategory}>{product.category}</span>
                </div>
                <div className={styles.productIcon} aria-hidden="true">
                  <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDesc}>{product.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.productsFooter}>
            <Link href="/products" className="btn btn-primary" id="view-all-products-btn">
              View All Products
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className={styles.ctaBanner} aria-labelledby="cta-heading">
        <div className={styles.ctaBannerBg} aria-hidden="true" />
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 id="cta-heading" className={styles.ctaTitle}>
              Ready to Partner with Seviora?
            </h2>
            <p className={styles.ctaDesc}>
              Whether you are a healthcare provider, hospital, or distributor—we
              have the right pharmaceutical solutions for you.
            </p>
            <div className={styles.ctaButtons}>
              <InteractiveHoverButton
                as="a"
                href="/contact"
                text="Get in Touch"
                id="cta-contact-btn"
                className={styles.ctaHoverBtn}
              />
              <a
                href="mailto:info@seviorapharma.com"
                className={`btn btn-outline ${styles.ctaEmailBtn}`}
                id="cta-email-btn"
              >
                info@seviorapharma.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
