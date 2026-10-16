import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SiteHeader.module.css";

interface SiteHeaderProps {
  contactHref?: string;
  logoSrc?: string;
}

export default function SiteHeader({
  contactHref = "#contact",
  logoSrc = "/logo.svg",
}: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink} aria-label="Idea ∞ Form Home">
        <Image
          src={logoSrc}
          alt="Idea ∞ Form Logo"
          width={52}
          height={52}
          className={styles.logoImage}
          priority
        />
      </Link>
      <a
        href={contactHref}
        className={styles.contactBtn}
        aria-label="Get in Touch"
      >
        Get <span className={styles.inWord}>in</span> Touch
      </a>
    </header>
  );
}
