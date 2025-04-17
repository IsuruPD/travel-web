import React from "react";
import styles from "./Input.Design.module.css";
import "./ComponentStyles.css"

const IntroSection: React.FC = () => {
  return (
    <section className="introSection">
      <img src="treeVector.png" alt="Safari icon" className={styles.safariIcon} />
      <div className="introDesc">
        <span className="introHeading">
          <span className="hotelName">DSP</span> is a wildlife-rich
          <br />
          private reserve in Udawalawa
          <br />
           area with 4 luxury lodges,
          <br/>
        </span>
        <span className="introSubheading"> each with its own</span>
        <span className="introSubheadingSecond"> character and style</span>
      </div>
      
      <img src="monkeyVector.png" alt="Lodge image" className="lodgeImage" />
    </section>
  );
};

export default IntroSection;
