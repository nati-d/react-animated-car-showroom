import React from 'react'
import {motion} from 'framer-motion'

const AboutCard = ({title,desc}) => {
  return (
    <motion.div className='w-[300px] h-[300px] flex flex-col gap-6 shadow-md shadow-black p-4' whileHover={{background:'black', color:'white', transition:{duration:1}}}>
        <div className='p-2 w-9'>
            <img src='/quality.png' alt='' className='w-12 h-12'/>
        </div>
        <h1  className='font-bold text-xl'>{title}</h1>
        <p className='text-gray-500'>{desc}</p>
      
    </motion.div>
  )
}

export default AboutCard
