import { motion } from 'framer-motion'
import './cursor.scss'
import React, { useEffect, useState } from 'react'
const Cursor = (props) => {
    const [cursorPos, setcursorPos] = useState({x:0,y:0})
    let behaviour = props.behaviour;
    
    useEffect(() => {
        const mouseMove = (e)=>{
            setcursorPos({x:e.clientX,y:e.clientY})
        }
        
      window.addEventListener('mousemove',mouseMove)
    
      return () => {
        window.removeEventListener('mousemove',mouseMove)
      }
    })
    
  return (
    <motion.div animate={{x:cursorPos.x+10,y:cursorPos.y+10,transition:{
        type:`${props.behaviour}`,
        damping:50
    }}} className='cursor'>
    </motion.div>
  )
}

export default Cursor