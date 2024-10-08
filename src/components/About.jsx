import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => ( //card format
  <Tilt className='xs:w-[250px] w-full'> 
    <motion.div //motion effect
      variants={fadeIn("right", "spring", index * 0.5, 0.75)} //fade in effect
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' //gradient for the cards
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => { 
  return (
    <>
      <motion.div variants={textVariant()}> 
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
      I'm a student at The University of Texas at Dallas studying Computer Science. I'm skilled at Java, Python, C++, React, HTML, and JavaScript. I'm a quick learner who enjoys bringing new ideas to the table and exploring new technologies. 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "About");