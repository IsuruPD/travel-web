import React from "react";

const ExperienceSection: React.FC = () => {
  return (
    <section className="experienceSection">
      <div className="flex-1">
        <img
          src="bird43.png"
          alt="Safari experience"
          className="experienceImage"
        />
      </div>

      <div className="experienceTextSec flex-1">
        <div className="experienceTextContainer">
          <div className="subSectionTitle">Where Luxury Meets Wilderness</div>
          <div className="subSectionDescription">
            Nestled on the edge of <span className="subSectionDescriptionEmp">Udawalawa,</span> our eco-lodges offer the perfect blend of comfort and raw nature. Wake up to the call of exotic birds, and sleep under a sky full of stars.
          </div>

          <div className="container">
            <a href="#" className="runningButton type-A">
              <div className="runningButton__line"></div>
              <div className="runningButton__line"></div>
              <span className="runningButton__text">See more..</span>
              <div className="runningButton__drow1"></div>
              <div className="runningButton__drow2"></div>
            </a>
          </div>
        </div>
      </div>
    </section>

  );
};

export default ExperienceSection;
