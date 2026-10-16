import React from "react";
import Image from "next/image";
import InfinityMark from "./InfinityMark";
import styles from "./BotanicalHero.module.css";

interface BotanicalHeroProps {
  artworkSrc?: string;
}

export default function BotanicalHero({
  artworkSrc = "/Background.svg",
}: BotanicalHeroProps) {
  return (
    <section className={styles.heroSection} aria-label="Botanical Art and Editorial Vision">
      <div className={styles.heroContent}>
        {/* Central Botanical Artwork Container */}
        <div className={styles.artworkStage}>
          <Image
            src={artworkSrc}
            alt="Botanical lotus pod artwork with stem"
            width={1366}
            height={768}
            className={styles.botanicalArtwork}
            priority
          />

          {/* Bold Animated Infinity Symbol Centered on Stem (Flower Dantal) */}
          <div className={styles.stemInfinity}>
            <InfinityMark />
          </div>
        </div>

        {/* Distributed Editorial Typography System */}
        <div className={styles.editorialOverlay}>
          {/* 1. Top-Left Block: "A of many" | "seed ideas" */}
          <div className={`${styles.textBlock} ${styles.seedIdeasBlock}`}>
            <div className={styles.seedCol}>
              <span>A</span>
              <span>of many</span>
            </div>
            <div className={styles.seedCol}>
              <span>seed</span>
              <span>ideas</span>
            </div>
          </div>

          {/* 2. fn.d stylistic label positioned adjacent/below seed ideas */}
          <div className={`${styles.textBlock} ${styles.fndBadge}`}>
            <span>fn.d</span>
          </div>

          {/* 3. Middle Block (Left of Stem): "A   thought," / "set in" / "Motion." */}
          <div className={`${styles.textBlock} ${styles.middleBlock}`}>
            <div className={styles.thoughtLine}>
              <span>A</span>
              <span className={styles.thoughtWord}>thought,</span>
            </div>
            <span>set in</span>
            <span className={styles.motionEmphasis}>Motion.</span>
          </div>

          {/* 4. Lower-Left Block: "From a thought to something / wort   building" */}
          <div className={`${styles.textBlock} ${styles.lowerLeftBlock}`}>
            <span>From a</span>
            <span>thought</span>
            <span>to</span>
            <span>something</span>
            <div className={styles.worthBuildingRow}>
              <span>wort</span>
              <span className={styles.buildingWord}>building</span>
            </div>
          </div>

          {/* 5. Right-Middle Block: "An Idea . / Research . / Experience . / Something Distinct" */}
          <div className={`${styles.textBlock} ${styles.rightMiddleBlock}`}>
            <div className={styles.dottedRow}>
              <span>An Idea</span>
              <span className={styles.dot}>.</span>
            </div>
            <div className={styles.dottedRow}>
              <span>Research</span>
              <span className={styles.dot}>.</span>
            </div>
            <div className={styles.dottedRow}>
              <span>Experience</span>
              <span className={styles.dot}>.</span>
            </div>
            <div className={styles.dottedRow}>
              <span>Something Distinct</span>
            </div>
          </div>

          {/* 6. Far-Right Top Block: "Idea ∞ Form" */}
          <div className={`${styles.textBlock} ${styles.farRightBlock}`}>
            <span>Idea</span>
            <span className={styles.infinityChar}>∞</span>
            <span>Form</span>
          </div>

          {/* 7. Lower-Right Block: "Good thinks takes a process / so do good ideas." */}
          <div className={`${styles.textBlock} ${styles.lowerRightBlock}`}>
            <span>Good thinks takes a process</span>
            <span>so do good ideas.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
