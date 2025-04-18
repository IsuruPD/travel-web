import React from "react";
import "./ComponentStyles.css"

const MemorableSection: React.FC = () => {
  return (
    <section className="memorableSection">
      <h2 className="memorableHeading h-[50vh]">
        <span>What makes our safari</span>
        <br />
        <span>experience so memorable and</span>
        <br />
        <span>unique?</span>
      </h2>
      <section className="memorableSection flex ">

      <div className="memorableTextContainer flex-1">
        <div className="experienceText">
          <span>Wild Encounters Await</span>
          <br />
          <span>Join guided safaris through lush grasslands and thick forests. Capture sights of elephants in their natural habitat, hear the rustle of the jungle, and feel the thrill of the unknown.</span>
        </div>
      </div>      

      <div className="flex-1">
        <img src="eagle43.png" alt="Safari experience" className="experienceImage"
      />
      </div>
      </section>
    </section>
  );
};

export default MemorableSection;