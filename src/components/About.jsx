import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-[280px] xs:w-[320px] sm:w-[250px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-4 sm:py-5 px-8 sm:px-12 min-h-[250px] sm:min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-14 h-14 sm:w-16 sm:h-16 object-contain'
        />

        <h3 className='text-white text-[16px] sm:text-[20px] font-bold text-center'>
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
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[14px] sm:text-[17px] max-w-3xl leading-[25px] sm:leading-[30px]'
      >
        I'm a skilled Security Analyst and Ethical Hacker with expertise in penetration testing, blockchain security, and vulnerability assessment. Currently interning at Symbiosys Technologies, I lead the Resethacker community, helping over 10,000 individuals pursue cybersecurity careers. Certified in CEH v12 and Professional Penetration Testing, I combine technical expertise with a passion for securing digital assets and educating others in cybersecurity.
      </motion.p>

      <div className='mt-16 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
