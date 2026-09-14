"use client";

import { useEffect } from "react";
import styles from "./page.module.css";

const products = [
  {
    id: "cardio-shield",
    name: "CardioShield Forte",
    category: "Cardiovascular",
    badge: "Bestseller",
    composition: "Atorvastatin 20mg + Clopidogrel 75mg",
    indication: "Management of coronary artery disease and hyperlipidemia",
    pack: "10×10 Alu-Alu Strips",
    desc: "Advanced cardiac care formulation combining a potent statin with antiplatelet therapy for comprehensive heart health management. Clinically validated for reducing cardiovascular events.",
  },
  {
    id: "osteo-flex",
    name: "OsteoFlex Pro",
    category: "Orthopaedic",
    badge: "New",
    composition: "Calcium Carbonate 1250mg + Vitamin D3 1000 IU + Magnesium 50mg",
    indication: "Osteoporosis, bone health maintenance, fracture prevention",
    pack: "10×15 Chewable Tablets",
    desc: "Next-generation bone and joint support combining bioavailable calcium with high-dose vitamin D3 and magnesium for superior absorption and bone density maintenance.",
  },
  {
    id: "immune-plus",
    name: "ImmunePlus Syrup",
    category: "Immunology",
    badge: "Popular",
    composition: "Zinc 10mg + Vitamin C 500mg + Elderberry Extract 200mg",
    indication: "Immune deficiency, recurrent infections, post-illness recovery",
    pack: "200 mL Syrup",
    desc: "Scientifically blended immunity booster for adults and children. The synergistic combination of zinc, vitamin C, and elderberry extract supports rapid immune response.",
  },
  {
    id: "neuro-calm",
    name: "NeuroCalmXT",
    category: "Neurology",
    badge: "Specialist",
    composition: "Pregabalin 75mg + Methylcobalamin 750mcg",
    indication: "Neuropathic pain, peripheral neuropathy, diabetic neuropathy",
    pack: "10×10 Blister Strips",
    desc: "A synergistic combination for neuropathic pain relief. Pregabalin modulates calcium channels while methylcobalamin aids nerve repair and regeneration.",
  },
];

const categories = ["All", "Cardiovascular", "Orthopaedic", "Immunology", "Neurology"];

export default function ProductsPage() {
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
      <section className={styles.pageHero} aria-label="Products page header">
        <div className={styles.pageHeroBg} aria-hidden="true" />
        <div className="container">
          <div className={styles.pageHeroContent}>
            <span className="eyebrow" style={{ color: "var(--mint-light)" }}>
              Our Portfolio
            </span>
            <h1 className={styles.pageTitle}>Our Products</h1>
            <p className={styles.pageSubtitle}>
              A carefully curated range of pharmaceutical, medical, and orthopaedic
              products—each backed by rigorous research and quality assurance.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section" aria-labelledby="products-list-heading">
        <div className="container">
          <h2 id="products-list-heading" className="sr-only">Product Listing</h2>

          {/* Categories */}
          <div className={styles.categories} role="list" aria-label="Product categories">
            {categories.map((cat) => (
              <span key={cat} className={styles.categoryChip} role="listitem">
                {cat}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {products.map((product, i) => (
              <article
                key={product.id}
                id={product.id}
                className={`card ${styles.productCard} reveal`}
                style={{ transitionDelay: `${i * 0.08}s` }}
                aria-labelledby={`product-name-${product.id}`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.cardTopRow}>
                    <span className={styles.badge}>{product.badge}</span>
                    <span className={styles.category}>{product.category}</span>
                  </div>

                  <div className={styles.productIcon} aria-hidden="true">
                    <svg width="44" height="44" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>

                  <h2
                    id={`product-name-${product.id}`}
                    className={styles.productName}
                  >
                    {product.name}
                  </h2>
                  <p className={styles.productDesc}>{product.desc}</p>
                </div>

                <div className={styles.dividerLine} aria-hidden="true" />

                <div className={styles.specs}>
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Composition</span>
                    <span className={styles.specValue}>{product.composition}</span>
                  </div>
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Indication</span>
                    <span className={styles.specValue}>{product.indication}</span>
                  </div>
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Pack Size</span>
                    <span className={styles.specValue}>{product.pack}</span>
                  </div>
                </div>

                <a
                  href={`mailto:info@seviorapharma.com?subject=Enquiry: ${encodeURIComponent(product.name)}`}
                  className={`btn btn-primary ${styles.enquireBtn}`}
                  aria-label={`Enquire about ${product.name}`}
                >
                  Enquire Now
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </article>
            ))}
          </div>

          {/* Enquiry Note */}
          <div className={`${styles.enquiryNote} reveal`}>
            <div className={styles.noteIcon} aria-hidden="true">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </div>
            <div>
              <p className={styles.noteTitle}>Looking for a specific product?</p>
              <p className={styles.noteText}>
                Our portfolio has 500+ products. Contact us at{" "}
                <a href="mailto:info@seviorapharma.com" className={styles.noteLink}>
                  info@seviorapharma.com
                </a>{" "}
                for our full catalogue or custom requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
