import React, { useEffect, useRef } from 'react'
import './services.scss'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'


const Services = () => {
  
  const ref = useRef()
  const inView = useInView(ref,{margin:"-100px",once:true})
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start","end start"],})
  const xM = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const varients = {
    initial:{
      x:-2000,
      y:500,
      opacity:0
    },
    animate:{
      x:0,
      y:0,
      opacity:1,
      transition:{
        duration:0.8,
        staggerChildren:0.1
      }
    }
  }
  
    
  return (
    <motion.div className='services' ref={ref} style={{y:xM}}>
      <motion.div className='ss'variants={varients} animate={inView?"animate":"initial"}>
        <motion.div className='textContainer'>
            <motion.p>
                I Focus on Learning new things
                <br/> And move forward 
            </motion.p>
            <hr/>
        </motion.div>

        <motion.div className='title' variants={varients}>
        <img src='/people.webp'/>
          <h1><b>Unique</b> Ideas</h1>
        </motion.div>

        <motion.div className='title' variants={varients} >
          <h1><b>For Your </b> Buisness</h1>
          <button>WHAT WE DO</button>
        </motion.div>

        <motion.div className='listContainer' variants={varients}>
        <motion.div className='box' whileHover={{background:"lightgray",color:"black",}}>
          <h2>Branding</h2>
          <p>
          Labore labore justo eos accusam consetetur lorem amet tempor, clita takimata ut ea labore voluptua, dolor elitr sanctus sea ipsum aliquyam sit, erat sit dolor sit dolores gubergren accusam sea labore diam. Et dolore et ipsum takimata sed consetetur sit consetetur. Magna ipsum sea eirmod voluptua amet. Dolore rebum tempor.
          </p>
        </motion.div>

        <motion.div className='box' whileHover={{background:"lightgray",color:"black"}}>
          <h2>Branding</h2>
          <p>
            Tell what from ashore visiter saintly of devil floor thereis, vainly then not outpour least, was to be the i balm, if the nevermore the never my spoke my and, one to gaunt god ominous above, wrought quoth chamber saintly faintly still utters thereis, there or now cushioned lining, ominous.
          </p>
        </motion.div>

        <motion.div className='box' whileHover={{background:"lightgray",color:"black"}}>
          <h2>Branding</h2>
          <p>
            Here answer of sinking before sitting that. Air thy nepenthe my if in on than, something spoke of melancholy is nevermore seeing before. I and the farther ghastly, entrance above was is nothing i clasp back. The i the and and ah thy i of the, we is songs oer.
          </p>
        </motion.div>

        <motion.div className='box' whileHover={{background:"lightgray",color:"black"}}>
          <h2>Branding</h2>
          <p>
            The came i is expressing is velvet and shadow this. And this the whose i remember still maiden days, raven word spoken smiling beguiling, some tis balm said guessing and lonely to only by. Raven and there floor and still desert, spoken shore seraphim liftednevermore the my. It presently obeisance.
          </p>
        </motion.div>

        </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services