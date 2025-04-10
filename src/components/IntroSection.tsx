import React from "react";
import styles from "./Input.Design.module.css";

const IntroSection: React.FC = () => {
  return (
    <section className={styles.introSection}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/776e2f60e4fa04a57269a02ee127b1b2801c89e6" alt="Safari icon" className={styles.safariIcon} />
      <h2 className={styles.introHeading}>
        <span>Sabi Sabi is a wildlife-rich</span>
        <br />
        <span>private reserve in the</span>
        <br />
        <span>Greater Kruger area with 4 luxury</span>
      </h2>
      <h3 className={styles.introSubheading}>lodges, each with its own</h3>
      <h3 className={styles.introSubheadingSecond}>character and style</h3>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a4cb204862155c151691ca0f0fba3982ef371b1" alt="Lodge image" className={styles.lodgeImage} />
    </section>
  );
};

export default IntroSection;
