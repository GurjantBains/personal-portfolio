import React, { useEffect, useRef } from 'react';
import "./parralex.scss";  
import { motion, useScroll, useTransform } from "framer-motion";

const Parralex = ({ type }) => {
  useEffect(() => {
  })
  
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start","end start"]
  })
  const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const xM = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);


    
  return (
    <div className="parralex" ref={ref} style={{background:
        type==="services"
        ?"linear-gradient(180deg,#111132,#c0c01d)"
        :"linear-gradient(180deg,#111132,#505064)",}}>
     <motion.h1 style={{ y: ytext }}>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains" style={{ y: xM }} ></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      
      <motion.div style={{ x: xBg }}  className="stars"></motion.div>
      
    </div>
  )
}

export default Parralex