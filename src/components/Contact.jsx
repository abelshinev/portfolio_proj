import React from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import SectionWrapper from '../hoc/SectionWrapper'
import { slideIn } from '../../utils/motion'
import '../../public/global.css'
import { github, instagram, spotify, linkedin } from '../assets';

const Contact = () => {

  useEffect(() => {
    const handleMouseMovement = (e) => {
      document.querySelectorAll(".contact-card").forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMovement);
    return () => window.removeEventListener('mousemove', handleMouseMovement);

  }, []);


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse
    flex gap-10 overflow-hidden min-w-[20px]'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-tertiary p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText} >Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <a className="contact-card" href="https://github.com/abelshinev">
          Github
          <img src={github} alt="" className='h-14 p-0 m-0' />
        </a>
        <a href='https://instagram.com' className="contact-card">  
          Instagram
          <img src={instagram} alt="" className='h-14 p-0 m-0'/>
        </a>
        <a 
          className='contact-card'  
          href="https://www.linkedin.com/in/abel-shine-varghese-354492300/"
        >
          LinkedIn 
          <img src={linkedin} alt="" className='h-14' />
        </a>
        <a 
          className="contact-card" 
          href="https://open.spotify.com/user/8z9w865lusgp7bzbsyyaznb05"
        >
          Spotify 
          <img src={spotify} alt=""  className='h-14'/>
        </a>
      </motion.div>


      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact");