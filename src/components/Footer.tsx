import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Top wave */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="#0d2137"
          />
        </svg>
      </div>

      <div className={styles.inner}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.logoPill}>
                <Image
                  src="/logo.png"
                  alt="Seviora Pharma Logo"
                  width={140}
                  height={63}
                  className={styles.logo}
                />
              </div>
              <p className={styles.tagline}>
                Committed to advancing healthcare through quality pharmaceuticals,
                medical goods, and innovative orthopaedic solutions.
              </p>
              <div className={styles.socialLinks}>
                <a
                  href="mailto:info@seviorapharma.com"
                  aria-label="Email Seviora Pharma"
                  className={styles.socialIcon}
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Quick Links</h3>
              <ul className={styles.navList}>
                <li><Link href="/" className={styles.navLink}>Home</Link></li>
                <li><Link href="/products" className={styles.navLink}>Our Products</Link></li>
                <li><Link href="/about" className={styles.navLink}>About Us</Link></li>
                <li><Link href="/contact" className={styles.navLink}>Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Contact Us</h3>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <a href="mailto:info@seviorapharma.com" className={styles.contactLink}>
                    info@seviorapharma.com
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  <span className={styles.contactText}>Lucknow, Uttar Pradesh, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className={styles.bottomBar}>
            <p className={styles.copyright}>
              © {year} Seviora Pharma Private Limited. All rights reserved.
            </p>
            <p className={styles.disclaimer}>
              Pharmaceuticals · Medical Goods · Orthopaedic Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
