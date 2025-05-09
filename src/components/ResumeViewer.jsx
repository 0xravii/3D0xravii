
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ResumeViewer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
        <p className={styles.sectionSubText}>Curious about my background?</p>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 flex flex-col items-center"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-secondary transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          View Resume
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
            <div className="bg-tertiary p-4 rounded-lg w-[90%] h-[90%] relative shadow-2xl border border-[#915EFF]">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-white hover:text-[#915EFF] transition-colors text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
              >
                ✕
              </button>
              <iframe
                src="/Cybersecurity and Software.pdf#toolbar=0"
                className="w-full h-full rounded-lg"
                title="Resume PDF"
              />
            </div>
          </div>
        )}

        <a
          href="/Cybersecurity and Software.pdf"
          download
          className="mt-4 text-secondary hover:text-[#915EFF] transition-colors flex items-center gap-2 group"
        >
          <span>Download PDF</span>
          <svg 
            className="w-5 h-5 transform group-hover:translate-y-[-2px] transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
          </svg>
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(ResumeViewer, "resume");
