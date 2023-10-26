import { motion } from 'framer-motion'
import './togglebtn.scss'

import React, { useState } from 'react'


const Variant1 = {
  open:{
    y2:30,
    x1:15,
    x2:40,
    stroke:"red"
    
  },
  closed:{
    y2:5,
    x1:0,
    stroke:"white"

  }}

  const Variant2 = {
    open:{
      opacity:0
    },
    closed:{
      opacity:1
    }}
    const Variant3 = {
      open:{
        y2:5,
        x1:15,
        x2:40,
        y1:30,
        stroke:"red"


      },
      closed:{
      y2:25,
      x1:0,
      stroke:"white"


      }}
const Togglebtn = ({setsb,setanim,anim}) => {
  const anims = ()=>{
    if(anim){
      setsb((prev)=>!prev)
      setanim(false)
      setTimeout(()=>{
      setanim(true)

      },1000)
    } else
    return
  }

  return (
    
  <button onClick={anims} className='button-top'>
  <motion.svg height="50" width="50">
  <motion.line x1="0" y1="5" x2="50" y2="5 " variants={Variant1}/>
  <motion.line x1="0" y1="15" x2="50" y2="15" variants={Variant2}/>
  <motion.line x1="0" y1="25" x2="50" y2="25" variants={Variant3}/>
</motion.svg>
  </button>
  )
}

export default Togglebtn