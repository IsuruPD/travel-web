import React from "react";
import "./ComponentStyles.css"

const IntroSection: React.FC = () => {
  return (
    <section className="introSection">

      <div className="introCentered">
        <img src="treeVector.png" alt="Safari icon" className="introSectionIcon" />

        <div className="introDesc">
          <span className="introDescP1">
            <span className="hotelName">DSP</span> is a wildlife-rich
            <br />
            private reserve in Wilpattuwa
            <br />
            area with 4 luxury lodges,
            <br/>
          </span>
          <span className="introDescP2"> each with its own</span>
          <span className="introDescP3"> character and style</span>
        </div>
      </div>

      
      <img src="monkeyVector.png" alt="Lodge image" className="lodgeImage" />
    </section>
  );
};

export default IntroSection;
