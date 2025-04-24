import React from "react";
import { motion } from "framer-motion";
import "./ComponentStyles.css"

const IntroSection: React.FC = () => {
  return (
    <section className="introSection">
      <div className="introCentered">
        <motion.img 
          src="treeVector.png" 
          alt="Safari icon" 
          className="introSectionIcon"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        <motion.div 
          className="introDesc"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
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
        </motion.div>
      </div>

      <motion.img 
        src="monkeyVector.png" 
        alt="Lodge image" 
        className="lodgeImage"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </section>
  );
};

export default IntroSection;
