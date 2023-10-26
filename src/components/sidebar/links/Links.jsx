import { motion } from 'framer-motion'
import './links.scss'
import React from 'react'
const Variants = {
  open:{
    transition:{
      
      staggerChildren:0.22,
      staggerDirection:1,

    }
  },
  closed:{
    transition:{
    staggerChildren:0.05,
    staggerDirection:-1,
    
  }
}
}

const itemVariants = {
  open:{
    y:0,
    opacity: 1, scale: 1, filter: "blur(0px)",

  },
  closed:{
    y:50,
    opacity: 0, scale: 0.3, filter: "blur(20px)"


  }
}

const Links = () => {
  const items = ['Home','Services','Portfolio','Conatact','About']
  return (
    <motion.div className='links' variants={Variants}>
      {items.map((items)=>{
         return <motion.a href={`#${items}`} key={items} initial={{scale:1}}  whileHover={{scaleX:1.2,scaleY:1.1,backgroundColor:'rgb(149, 226, 42)'}} variants={itemVariants}>{items}</motion.a>
      })}
    </motion.div>
  )
}

export default Links