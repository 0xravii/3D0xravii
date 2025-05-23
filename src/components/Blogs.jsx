import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Blogs = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Latest</p>
        <h2 className={styles.sectionHeadText}>Blog Posts.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
          <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">
            Blog posts coming soon...
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Blogs, "blog");