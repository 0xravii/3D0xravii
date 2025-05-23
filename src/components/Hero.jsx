import { motion } from "framer-motion";
import { styles } from "../styles";
import { Suspense } from "react";
import { ComputersCanvas } from "./canvas";
import { CanvasLoader } from "./";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-start gap-5 z-30`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="hero-section relative max-w-full md:max-w-2xl">
          <h1 className={`${styles.heroHeadText} text-white hero-heading`}>
            Hi, I'm <span className='text-[#315dd6]'>Ravi_Kumar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-[16px] sm:text-[20px] lg:text-[26px] max-w-full`}>
            I'm a Security Researcher <br className='sm:block hidden' />
            Smartcontract auditor and web applications developer
          </p>
        </div>
      </div>

      <div className="absolute inset-0 z-10 w-full h-full">
        <ComputersCanvas />
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
