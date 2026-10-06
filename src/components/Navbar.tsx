"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Our Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Utility Bar */}
      <div className={styles.topbar}>
        <div className="container">
          <div className={styles.topbarInner}>
            <span className={styles.topbarLocation}>
              <MapPin size={13} />
              Gomti Nagar, Lucknow · Uttar Pradesh 226010
            </span>
            <div className={styles.topbarRight}>
              <a href="tel:+919452948453" className={styles.topbarLink}>
                <Phone size={13} />
                +91 94529 48453
              </a>
              <a href="mailto:info@seviorapharma.com" className={styles.topbarLink}>
                <Mail size={13} />
                info@seviorapharma.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={styles.navwrap}>
        <div className="container">
          <div className={styles.navbar}>
            <Link href="/" className={styles.brand} aria-label="Seviora Pharma Home">
              <Image
                src="/logo.png"
                alt="Seviora Pharma Private Limited"
                width={140}
                height={56}
                priority
                className={styles.brandLogo}
              />
            </Link>

            <nav className={styles.nav} aria-label="Primary navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className={styles.navCta}>
              <Link href="/contact" className="btn btn-primary btn-sm">
                Request Catalogue
              </Link>
              <button
                className={styles.burger}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerLine1Open : ""}`} />
                <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerLine2Open : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className={styles.mmenu}>
            <nav aria-label="Mobile navigation">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.mmenuLink}
                  onClick={() => setMenuOpen(false)}
                >
                  <small>0{idx + 1}</small>
                  <span>{link.label}</span>
                  <ArrowUpRight size={18} />
                </Link>
              ))}
            </nav>
            <div className={styles.mmenuFoot}>
              <a href="tel:+919452948453">+91 94529 48453</a>
              <a href="mailto:info@seviorapharma.com">info@seviorapharma.com</a>
              <span>Gomti Nagar, Lucknow, UP 226010</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
