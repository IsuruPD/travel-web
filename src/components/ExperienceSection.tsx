import React from "react";
import styles from "./Input.Design.module.css";

const ExperienceSection: React.FC = () => {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.experienceTextContainer}>
        <h2 className={styles.experienceText}>
          <span>An unforgettable safari</span>
          <br />
          <span>An unforgettable safari</span>
          <br />
          <span>An unforgettable safari</span>
          <br />
          <span>An unforgettable safari</span>
        </h2>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b0bcb7dd88364fb60daa64f9d564a8b3f5f1907"
        alt="Safari experience"
        className={styles.experienceImage}
      />
    </section>
  );
};

export default ExperienceSection;
