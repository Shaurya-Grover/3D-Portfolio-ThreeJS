import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'

import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import * as THREE from 'three' 
import { sectionwrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) =>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}

        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>  
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      
      <motion.div  variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I am a seasoned software developer with a passion for crafting innovative solution. Specializing in Computer Vision, Machine Learning, and Deep Learning, I thrive on creating intelligent systems that push the boundaries of what's possible. As a versatile full-stack developer, I bring expertise in frameworks, including ReactJS, NextJS, and ThreeJS, enabling me to seamlessly bridge the gap between front-end elegance and back-end functionality. I am dedicated to delivering robust, scalable, and user-centric applications that drive real-world impact. Whether it's developing immersive user interfaces or architecting complex AI-driven solutions, I approach every project with enthusiasm, creativity, and a relentless pursuit of perfection.
      <br className='sm:block hidden'/>
      <br className='sm:block hidden'/>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service,index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default sectionwrapper(About,"about")