import React from "react";
import "./ComponentStyles.css"

const SectionThree: React.FC = () => {
  return (
    <section className="sectionThree">
      <div className="sect3L flex-1">
        <img
          src="bird43.png"
          alt="Safari experience"
          className="sect3LImg"
        />
      </div>

      <div className="sect3R flex-1">
        <div className="sect3RContainer">
          <div className="sect3RTitle">Where Luxury Meets Wilderness</div>
          <div className="sect3RDesc">
            Nestled on the edge of <span className="sect3RDescEmp">Udawalawa,</span> our eco-lodges offer the 
            perfect blend of comfort and <span className="sect3RDescEmp">raw nature.</span> 
            Wake up to the call of exotic birds, and sleep under a sky full of stars.
          </div>

          <div className="flwBtnContainer">
            <a href="#" className="flwBtn type-A">
              <div className="flwBtn_line"></div>
              <div className="flwBtn_line"></div>
              <span className="flwBtn_text">See more..</span>
              <div className="flwBtn_drow1"></div>
              <div className="flwBtn_drow2"></div>
            </a>
          </div>
        </div>
      </div>
    </section>

  );
};

export default SectionThree;
