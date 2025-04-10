import React from "react";
import styles from "./Input.Design.module.css";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <img src="landing.jpg" alt="Safari landscape" className={styles.heroImage} />
      <div className={styles.heroText}>
        <span className={styles.LandingTitle}>Escape</span>
        <div>to our world</div>
      </div>
    </section>
  );
};

export default HeroSection;
