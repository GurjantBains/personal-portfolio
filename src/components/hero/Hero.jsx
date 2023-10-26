import React, { useRef } from 'react'
import './hero.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

const textVariants={
  initial:{
    x:-500,opacity:0
  },
  animate:{
    x:0,opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.2,
    }
  }}
  const scrollBtn = {
    initial:{
      y:0,opacity:1
    },
    animate:{
      y:20,opacity:0,
      transition:{
        delay:1,
        duration:1,
        repeat:Infinity,
      }
    }

  }
  const sliderText = {initial:{x:0,},animate:{x:"-220%",transition:{delay:1,duration:30,repeat:Infinity,repeatType:"mirror"}}}

const Hero = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start","end start"],})
  const xM = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);

  return (
    <div className='hero' ref={ref}>
      <motion.div className='text' variants={textVariants} initial={"initial"} animate={"animate"} style={{y:xM}}>
        <motion.h2  variants={textVariants}>Gurjant Singh</motion.h2>
        <motion.h1  variants={textVariants}>Web Devolopment Student</motion.h1>
        <motion.div className='buttons'  variants={textVariants} >
          <button>See Latest Works</button>
          <button>Contact Me</button>
        </motion.div>
        <motion.img  variants={scrollBtn} src='/scroll.png' />
        <motion.div className='slidingText' variants={sliderText}>
          WORLD'S BEST WEB DeVOLOPER
        </motion.div>
      </motion.div>
      
        <div className='img'>
            <img src='hero.png'/>
        </div>
    </div>
  )
}

export default Hero