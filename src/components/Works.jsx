import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-3 xs:p-4 sm:p-5 rounded-2xl w-full xs:w-[320px] sm:w-[360px] min-h-[380px] xs:min-h-[400px] sm:min-h-[450px] flex flex-col'
      >
        <div className='relative w-full h-[180px] xs:h-[200px] sm:h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-4 sm:mt-5 flex-grow'>
          <h3 className='text-white font-bold text-[16px] xs:text-[18px] sm:text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[11px] xs:text-[12px] sm:text-[14px]'>{description}</p>
        </div>

        <div className='mt-3 sm:mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Cybersecurity</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[14px] sm:text-[17px] max-w-3xl leading-[25px] sm:leading-[30px]'
        >
         Following certifications showcase my skills and knowledge in the field of cybersecurity. Each certification is briefly described, highlighting the expertise gained and the competencies acquired. These certifications reflect my ability to identify and mitigate security threats, implement security measures, and ensure the integrity and confidentiality of information systems
        </motion.p>
      </div>

      <div className='mt-16 sm:mt-20 flex flex-wrap justify-center gap-5 sm:gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
