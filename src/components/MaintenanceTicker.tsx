import React from "react";
import styles from "./MaintenanceTicker.module.css";

interface MaintenanceTickerProps {
  message?: string;
  repeatCount?: number;
}

export default function MaintenanceTicker({
  message = "The page is under design maintenance",
  repeatCount = 8,
}: MaintenanceTickerProps) {
  const items = Array.from({ length: repeatCount });

  return (
    <footer
      className={styles.tickerContainer}
      aria-label="Maintenance Announcement"
    >
      <div className={styles.tickerTrack}>
        {/* Primary Group */}
        <div className={styles.tickerGroup}>
          {items.map((_, index) => (
            <span key={`group-1-${index}`} className={styles.tickerItem}>
              {message}
              <span className={styles.tickerItemStar} aria-hidden="true">
                *
              </span>
            </span>
          ))}
        </div>

        {/* Duplicate Group for Seamless 50% Infinite Loop */}
        <div className={styles.tickerGroup} aria-hidden="true">
          {items.map((_, index) => (
            <span key={`group-2-${index}`} className={styles.tickerItem}>
              {message}
              <span className={styles.tickerItemStar} aria-hidden="true">
                *
              </span>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
