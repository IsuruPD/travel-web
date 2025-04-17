import React from "react";
import "./ComponentStyles.css"

const LandingBanner: React.FC = () => {
  return (
    <section className="landingSection">
      <div style={{ position: "relative" }}>
        <img src="landing.jpg" alt="Safari landscape" className="landingImage"/>
        <img  src="clawMark.png" alt="Claw mark" className="clawMarkImage"/>
      </div>
      <div className="landingText" style={{ textAlign: "center" }}>
        <div className="landingTitle">Escape</div>
        <div className="landingSubTitle">to our <span className="landingSubTitleSec">world</span></div>
      </div>
    </section>
  );
};

export default LandingBanner;
