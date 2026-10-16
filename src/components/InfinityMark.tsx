import React from "react";
import styles from "./InfinityMark.module.css";

interface InfinityMarkProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function InfinityMark({ className, style }: InfinityMarkProps) {
  return (
    <div
      className={`${styles.infinityWrapper} ${className || ""}`.trim()}
      style={style}
      aria-hidden="true"
    >
      <svg
        className={styles.infinitySvg}
        viewBox="0 0 52 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle base path maintaining bold structure */}
        <path
          className={styles.infinityBasePath}
          pathLength="100"
          d="M 26 13 C 29.8 7.5, 35.5 4, 40.5 4 C 46 4, 49.5 8, 49.5 13 C 49.5 18, 46 22, 40.5 22 C 35.5 22, 29.8 18.5, 26 13 C 22.2 7.5, 16.5 4, 11.5 4 C 6 4, 2.5 8, 2.5 13 C 2.5 18, 6 22, 11.5 22 C 16.5 22, 22.2 18.5, 26 13 Z"
        />
        {/* Animated drawing & tracing stroke loop */}
        <path
          className={styles.infinityActivePath}
          pathLength="100"
          d="M 26 13 C 29.8 7.5, 35.5 4, 40.5 4 C 46 4, 49.5 8, 49.5 13 C 49.5 18, 46 22, 40.5 22 C 35.5 22, 29.8 18.5, 26 13 C 22.2 7.5, 16.5 4, 11.5 4 C 6 4, 2.5 8, 2.5 13 C 2.5 18, 6 22, 11.5 22 C 16.5 22, 22.2 18.5, 26 13 Z"
        />
      </svg>
    </div>
  );
}
