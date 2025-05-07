
import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ResumeViewer = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Professional Journey</p>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 bg-tertiary rounded-[20px] p-5'
      >
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <h3 className='text-white font-bold text-[24px]'>My Resume</h3>
            <p className='mt-2 text-secondary text-[14px]'>View my complete professional background</p>
          </div>
          <a 
            href="/0xravii/Cybersecurity and Software.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className='bg-[#915eff] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transform transition-all duration-300 hover:scale-105'
          >
            View Resume
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(ResumeViewer, "resume");
