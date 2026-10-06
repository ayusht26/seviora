import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Microscope, Award, Truck, CheckCircle2 } from "lucide-react";
import styles from "./page.module.css";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality First & Batch Traceability",
    desc: "Every carton carries verifiable batch and expiry records, tested against strict WHO-GMP aligned guidelines and released against a Certificate of Analysis."
  },
  {
    icon: Microscope,
    title: "Audited Formulations",
    desc: "From broad-spectrum generics to specialised therapy lines, all products originate from audited manufacturing facilities in full CDSCO compliance."
  },
  {
    icon: Truck,
    title: "Rapid Dispatch & Cold Chain",
    desc: "Strategically located in Gomti Nagar, Lucknow, ensuring rapid 24–48 hour dispatches across all 75 districts of Uttar Pradesh with insulated 2–8 °C cold-chain verification."
  },
  {
    icon: Award,
    title: "Institutional Reliability",
    desc: "Empanelled with over a dozen leading hospitals and medical institutions, providing tender-ready paperwork and scheduled replenishment calendars."
  }
];

export default function AboutPage() {
  return (
    <>
      <div className="container">
        <div className={styles.pageHead}>
          <span className="eyebrow">Seviora Pharma · Our Foundation</span>
          <h1 className="h-serif">Rooted in Lucknow. Dedicated to Care.</h1>
          <p className={styles.lede}>
            Seviora Pharma Private Limited was founded with an unyielding commitment to dependable healthcare distribution, ethical formulations, and consistent supply chains across North India.
          </p>
        </div>

        {/* Story Section */}
        <div className={styles.storyGrid}>
          <div className={styles.storyContent}>
            <span className="eyebrow">Our Story</span>
            <h2 className="h-serif" style={{ marginTop: "14px" }}>
              Bridging clinical quality with regional healthcare access.
            </h2>
            <p className={styles.storyText}>
              Headquartered in Vibhav Khand, Gomti Nagar, Lucknow, Seviora Pharma operates as an essential supply bridge for hospitals, nursing homes, and retail chemists throughout Uttar Pradesh. We understand that behind every medicine packet and hospital consumable is a patient who depends on prompt, uncompromised care.
            </p>
            <p className={styles.storyText}>
              By keeping our inventory deeply stocked with over 400 active SKUs across pharmaceuticals, surgical disposables, diagnostic systems, and nutraceuticals, we eliminate the replenishment delays that often hinder clinical operations.
            </p>

            <div className={styles.highlights}>
              <div className={styles.hlItem}>
                <CheckCircle2 size={18} />
                <span>WHO-GMP &amp; ISO aligned manufacturing partners</span>
              </div>
              <div className={styles.hlItem}>
                <CheckCircle2 size={18} />
                <span>State drug licensing &amp; GST certified operations</span>
              </div>
              <div className={styles.hlItem}>
                <CheckCircle2 size={18} />
                <span>Complete batch-level documentation on dispatch</span>
              </div>
            </div>
          </div>

          <div className={styles.storyBadgeBox}>
            <div className={styles.badgeInner}>
              <div className={styles.badgeCity}>Seviora Pharma</div>
              <p className={styles.badgeAddress}>
                Plot 12, Vibhav Khand, Gomti Nagar<br />
                Lucknow, Uttar Pradesh 226010
              </p>
              <div className={styles.badgeMeta}>
                <div>
                  <strong>400+</strong>
                  <span>Active SKUs</span>
                </div>
                <div>
                  <strong>75</strong>
                  <span>Districts Covered</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Values Section */}
        <div className={styles.valuesSection}>
          <div className={styles.valuesHead}>
            <span className="eyebrow">Our Commitments</span>
            <h2 className="h-serif" style={{ marginTop: "14px" }}>
              Built on standards you can verify.
            </h2>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className={styles.vCard}>
                  <div className={styles.vIcon}>
                    <Icon size={22} />
                  </div>
                  <h3 className={styles.vTitle}>{v.title}</h3>
                  <p className={styles.vDesc}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className={styles.aboutCta}>
          <div>
            <h3 className="h-serif">Partner with Seviora Pharma</h3>
            <p>Speak to our Lucknow desk to discuss pricing, institutional supply or regional distribution.</p>
          </div>
          <div className={styles.aboutCtaBtns}>
            <Link href="/contact" className="btn btn-primary">
              Contact Us <ArrowRight />
            </Link>
            <Link href="/products" className="btn btn-ghost">
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
