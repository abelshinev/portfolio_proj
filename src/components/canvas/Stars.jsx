import React from 'react'
import { creator, web, mobile } from '../../assets/'
import { motion } from 'framer-motion'
import { slideIn } from '../../../utils/motion'

const Stars = () => {
  return (
    
    <div className='relative'>

      <motion.img
        src={creator} alt="" 
        className='absolute h-20 top-[60vh] left-[20vw]'
        initial={{x: "-15vw", y: "-5vh" ,opacity: 0, scale: 0.5, rotateZ: -100 }}
        animate={{x: 0, opacity: 1,  y: 0, scale: 1, rotateZ: 0}}
        transition={{type: "tween", delay: 0.3, duration: 1.4, ease: "easeInOut"}}
        
      />

      <motion.img
        src={mobile}
        alt=""
        className="absolute h-20 top-[40vh] right-[10vw]"
        initial={{ x: "10vw", opacity: 0,  scale: 0.5, rotateZ: 150 }}
        animate={{ x: 0, opacity: 1, scale: 1, rotateZ: 0  }}
        transition={{ type: "tween", delay: 0.1, duration: 1.6, ease: "easeInOut" }}
      />

      <motion.img
        src={web}
        alt=""
        className="absolute h-20 top-[200px] left-[200px]"
        initial={{ x: "-20vw", y: "20vh", opacity: 0, scale: 0.5, rotateZ: 100 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1, rotateZ: 0 }}
        transition={{ type: "tween", delay: 0.2, duration: 1.5, ease: "easeInOut" }}
      />
    </div>
    
    
  )
}

export default Stars