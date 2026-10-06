"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./site.module.css";

export const CONTACT = {
  email: "info@seviorapharma.com",
  phone: "+91 94529 48453",
  phoneHref: "+919452948453",
  city: "Lucknow, Uttar Pradesh",
};

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(to);
  return (
    <span>
      {v}
      {suffix}
    </span>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Seviora Pharma Private Limited"
      width={140}
      height={48}
      priority
      className={`${styles.logoImg} ${className}`}
    />
  );
}

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Our Products" },
  { href: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logoLink} onClick={() => setOpen(false)}>
          <Logo className={styles.headerLogo} />
        </Link>
        <nav className={styles.desktopNav}>
          {nav.map((n) => {
            const isActive = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
              >
                {n.label}
                <span
                  className={`${styles.navIndicator} ${
                    isActive ? styles.navIndicatorActive : ""
                  }`}
                />
              </Link>
            );
          })}
          <Link href="/contact" className={styles.enquireBtn}>
            Enquire now
          </Link>
        </nav>
        <button
          aria-label="Menu"
          className={styles.menuToggle}
          onClick={() => setOpen(!open)}
        >
          <div className={`${styles.bar1} ${open ? styles.bar1Open : ""}`} />
          <div className={`${styles.bar2} ${open ? styles.bar2Open : ""}`} />
        </button>
      </div>
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileNavLinks}>
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={styles.mobileNavLink}
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={styles.mobileEnquireBtn}
          >
            Enquire now
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerBrandCol}>
          <div className={styles.footerLogoPill}>
            <Image
              src="/logo.png"
              alt="Seviora Pharma Private Limited"
              width={140}
              height={48}
              className={styles.logoImg}
            />
          </div>
          <p className={styles.footerTagline}>
            A trusted pharmaceutical company delivering quality medicines, medical goods and solutions to healthcare providers.
          </p>
          <span className={styles.footerBadge}>ISO 9001:2015 Certified Company</span>
        </div>
        <div>
          <h4 className={styles.footerHeading}>Explore</h4>
          <ul className={styles.footerLinks}>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={styles.footerLink}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={styles.footerHeading}>Reach us</h4>
          <ul className={styles.footerContactList}>
            <li>{CONTACT.city}</li>
            <li>
              <a href={`tel:${CONTACT.phoneHref}`} className={styles.footerContactLink}>
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className={styles.footerContactLink}>
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© {new Date().getFullYear()} Seviora Pharma Private Limited. All rights reserved.</span>
        <span>seviorapharma.com</span>
      </div>
    </footer>
  );
}

export function PageHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className={styles.pageHead}>
      <div className={styles.pageHeadBlur} />
      <div className={styles.pageHeadInner}>
        <p className={styles.pageHeadEyebrow}>
          <span className="rise">{eyebrow}</span>
        </p>
        <h1 className={styles.pageHeadTitle}>
          <span className="rise" style={{ animationDelay: "100ms" }}>
            {title}
          </span>
        </h1>
        <p className={`rise ${styles.pageHeadLede}`} style={{ animationDelay: "250ms" }}>
          {lede}
        </p>
      </div>
    </section>
  );
}

