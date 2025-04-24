import React from "react";
import { motion } from "framer-motion";
import "./ComponentStyles.css";

const LandingBanner: React.FC = () => {
  return (
    <motion.section 
      className="landingSection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div style={{ position: "relative" }}>
        <motion.img 
          src="landing.jpg" 
          alt="Safari landscape" 
          className="landingImage"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 2.5,
            ease: "easeOut"
          }}
        />
        <motion.img  
          src="clawMark.png" 
          alt="Claw mark" 
          className="clawMarkImage"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 100
          }}
        />
      </div>
      <motion.div 
        className="landingText"
        style={{ textAlign: "center" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div 
          className="landingTitle"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Escape
        </motion.div>
        <motion.div 
          className="landingSubTitle"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          to our {" "}
          <motion.span 
            className="landingSubTitleEmp"
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
          >
            world
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default LandingBanner;
