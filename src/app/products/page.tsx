"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PageHead, Reveal } from "@/components/site";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import styles from "./page.module.css";

export default function ProductsPage() {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");

  const list = useMemo(
    () =>
      PRODUCTS.filter(
        (p) =>
          (cat === "All" || p.cat === cat) &&
          (p.name + p.generic).toLowerCase().includes(q.toLowerCase())
      ),
    [cat, q]
  );

  return (
    <>
      <PageHead
        eyebrow="Seviora Pharma · Catalogue"
        title="Our Products"
        lede="A selection from our catalogue. Compositions and pack details are listed for healthcare professionals — full documentation is available on request."
      />
      <section className={styles.section}>
        <div className={styles.toolbar}>
          <div className={styles.categories}>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`${styles.catButton} ${cat === c ? styles.catButtonActive : ""}`}
              >
                {c}
              </button>
            ))}
          </div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products…"
            aria-label="Search products"
            className={styles.searchInput}
          />
        </div>
        <p className={styles.countText}>
          Showing {list.length} of {PRODUCTS.length} products
        </p>

        <div key={cat + q} className={styles.grid}>
          {list.map((p, i) => (
            <div
              key={p.name}
              className={`rise ${styles.productCard}`}
              style={{ animationDelay: `${Math.min(i, 9) * 50}ms` }}
            >
              <div className={styles.cardTop}>
                <span className={styles.categoryLabel}>{p.cat}</span>
                <span
                  className={`${styles.tagBadge} ${
                    p.tag === "Rx" ? styles.tagRx : styles.tagOther
                  }`}
                >
                  {p.tag}
                </span>
              </div>
              <h3 className={styles.productName}>{p.name}</h3>
              <p className={styles.productGeneric}>{p.generic}</p>
              <dl className={styles.specsGrid}>
                <div>
                  <dt className={styles.specKey}>Form</dt>
                  <dd className={styles.specVal}>{p.form}</dd>
                </div>
                <div>
                  <dt className={styles.specKey}>Pack</dt>
                  <dd className={styles.specVal}>{p.pack}</dd>
                </div>
              </dl>
            </div>
          ))}
          {list.length === 0 && (
            <p className={styles.emptyMessage}>No products match your search.</p>
          )}
        </div>

        <Reveal className={styles.bottomBannerWrap}>
          <div className={styles.bottomBanner}>
            <div>
              <h3 className={styles.bannerTitle}>Need the full catalogue?</h3>
              <p className={styles.bannerDesc}>
                Ask us for our complete product list, pricing and documentation.
              </p>
            </div>
            <Link href="/contact" className={styles.bannerBtn}>
              Request catalogue
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
