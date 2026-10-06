"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footGrid}>
          <div className={styles.footBrand}>
            <Link href="/" className={styles.brand} aria-label="Seviora Pharma Home">
              <Image
                src="/logo-white.png"
                alt="Seviora Pharma Private Limited"
                width={140}
                height={56}
                className={styles.brandLogo}
              />
            </Link>
            <p className={styles.footDesc}>
              A trusted Lucknow-based pharmaceutical company delivering quality medicines,
              medical goods and solutions to hospitals, clinics and chemists across Uttar Pradesh.
            </p>
            <span className={styles.footDomain}>seviorapharma.com</span>
          </div>

          <div>
            <h4 className={styles.footHeading}>Explore</h4>
            <ul className={styles.footLinks}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/products">Our Products</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.footHeading}>Divisions</h4>
            <ul className={styles.footLinks}>
              <li><Link href="/products">Pharmaceutical Distribution</Link></li>
              <li><Link href="/products">Medical Consumables &amp; Disposables</Link></li>
              <li><Link href="/products">Devices &amp; Diagnostics</Link></li>
              <li><Link href="/products">Institutional &amp; Hospital Supply</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.footHeading}>Reach Us</h4>
            <address className={styles.footContact}>
              Plot 12, Vibhav Khand, Gomti Nagar,<br />
              Lucknow, Uttar Pradesh 226010<br />
              <a href="tel:+919452948453">+91 94529 48453</a>
              <a href="mailto:info@seviorapharma.com">info@seviorapharma.com</a>
              <span>Mon – Sat · 9:30 AM – 6:30 PM IST</span>
            </address>
          </div>
        </div>

        <div className={styles.footBottom}>
          <p>© {year} Seviora Pharma Pvt. Ltd. · All rights reserved. Product compositions listed for healthcare professionals.</p>
          <div className={styles.footRight}>
            <span>Lucknow, Uttar Pradesh</span>
            <button
              onClick={scrollToTop}
              className={styles.toTop}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
