import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import './portfolio.scss'
import React, { useRef } from 'react'




  const items = [{
    id:1,
    title:"React JS",
    img:`https://images.unsplash.com/photo-1670057037226-b3d65909424f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cmVhY3Rqc3x8fHx8fDE2OTgyMTIwODU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`,
    desc:"The syllable fact clasp and head beating i velvet rapping name. Said for i tis much me hopes, it is."

  },
  {
    id:2,
    title:"Next JS",
    img:"https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8amF2YXNjcmlwdHx8fHx8fDE2OTgyMTIzNzA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    desc:"The syllable fact clasp and head beating i velvet rapping name. Said for i tis much me hopes, it is."

  },
  {
    id:3,
    title:"Vite JS",
    img:"https://source.unsplash.com/random/500?javascript",
    desc:"The syllable fact clasp and head beating i velvet rapping name. Said for i tis much me hopes, it is."

  },
  {
    id:4,
    title:"Vanilla JS",
    img:"https://source.unsplash.com/random/?javascript",
    desc:"The syllable fact clasp and head beating i velvet rapping name. Said for i tis much me hopes, it is."

  },

]

const Single = ({items}) =>{
  const ref = useRef()
  const { scrollYProgress} = useScroll({target:ref,
  offset:["start start","end start"]
  })
    const y = useTransform(scrollYProgress,[0,1],["0%","500%"])
  return (
    <section ref={ref}>
    <div className='container'>
      <div className='wrapper'>
        <div className='imgContainer' >
          <img src={items.img}/>
        </div>

        <motion.div className='textContainer' style={{y:y}}>
          <h2>{items.title}</h2>
          <p>{items.desc}</p>
          <button>See Demo</button>
        </motion.div>
      </div>
    </div>
    </section>
  );
};
const Portfolio = () => {

  const ref = useRef()
  const { scrollYProgress} = useScroll({target:ref,
    offset:["end end","start start" ]})
    const scaleX = useSpring(scrollYProgress,{
      stiffness:100,
      damping:30,
    })
    const sx = useTransform(scaleX,[0,1],[0.05,1])
    
  return (
    <div className='portfolio' ref={ref}>
    <motion.div className='progress'>
      <h1>Featured Works</h1>
      <motion.div className='progressBar' style={{scaleX:sx}}></motion.div>
    </motion.div>
    {items.map((e)=>{
      return <Single items={e} key={e.id}/>
      
    })}   

    </div>
  )
}

export default Portfolio