import React from "react";
import SiteHeader from "@/components/SiteHeader";
import BotanicalHero from "@/components/BotanicalHero";
import MaintenanceTicker from "@/components/MaintenanceTicker";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      {/* Top Header: Logo & Contact CTA */}
      <SiteHeader contactHref="#contact" logoSrc="/logo.svg" />

      {/* Central Botanical Artwork, Stem-Pinned Infinity Symbol & Editorial Typography */}
      <BotanicalHero artworkSrc="/Background.svg" />

      {/* Continuous Burgundy Maintenance Ticker at the Bottom */}
      <MaintenanceTicker
        message="The page is under design maintenance"
        repeatCount={10}
      />
    </main>
  );
}
