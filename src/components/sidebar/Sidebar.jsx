import './sidebar.scss'
import React, { useState } from 'react'
import Togglebtn from './togglebtn/Togglebtn'
import { motion } from "framer-motion"
import Links from './links/Links'

const varients = {
  open:{clipPath:"circle(1200px at 50px 50px",
    transition:{
      delay:0.1,
      type:"spring",
    stiffness:"20",
    }
  },
  closed:{
  clipPath:"circle(40px at 60px 55px)",

  transition:{
    delay:0.2,
    type:"spring",
    stiffness:"100",
    damping:"13"
  }

  }}

 
 

const Sidebar = () => {
  const [sidebar, setsidebar] = useState(false)
  const [anim, setanim] = useState(true)
  return (
    <motion.div className='sidebar' animate={sidebar ? "open" : "closed"}>
        <motion.div className='bg' variants={varients}>
          <Links/>
        </motion.div>
        <Togglebtn setsb={setsidebar} setanim={setanim} anim={anim}/>
    </motion.div>
  )
}

export default Sidebar