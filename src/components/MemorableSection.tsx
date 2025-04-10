import React from "react";
import styles from "./Input.Design.module.css";

const MemorableSection: React.FC = () => {
  return (
    <section className={styles.memorableSection}>
      <h2 className={styles.memorableHeading}>
        <span>What makes our safari</span>
        <br />
        <span>experience so memorable and</span>
        <br />
        <span>unique?</span>
      </h2>
      <div className={styles.memorableContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9eb62aca772bee248327340608f7aaf71bffef2"
          alt="Safari experience"
          className={styles.memorableImage}
        />
        <div className={styles.memorableTextContainer}>
          <h3 className={styles.memorableTitle}>
            <span>Experiences to treasure</span>
            <br />
            <span>forever.</span>
          </h3>
          <p className={styles.memorableDescription}>
            <span>
              From intimate game sightings and expert guides to luxurious suites
              and authentic South
            </span>
            <br />
            <span>
              African hospitality and fare,Sabi Sabi has perfected the art of
              indulging your senses.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemorableSection;
