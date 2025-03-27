import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { MdDownload } from 'react-icons/md';
import { RiScrollToBottomLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='sm:pb-20 sm:pt-32'>
      {/* Background */}
      <div>
        <Spotlight
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
          fill='white'
        />
        <Spotlight
          className='h-[80vh] w-[50vw] top-10 left-full'
          fill='purple'
        />
        <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='blue' />
      </div>
      <div
        className='h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center'
      >
        <div
          className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'
        />
      </div>
      {/* Content */}
      <motion.div
        className='flex justify-center relative sm:my-0 sm:mt-12 my-12 z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <motion.p
            className='uppercase tracking-widest text-xs sm:text-sm text-center text-blue-100 max-w-90'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1.5 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Driven By Creativity | Problem-Solver | Performance-Focused
          </motion.p>

          <motion.h1
            className='text-center font-extrabold text-[40px] sm:text-4xl md:text-5xl lg:text-6xl py-20'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1.5 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Building Creative Solutions for{' '}
            <span className='text-purple'>Beautiful Experiences.</span>
          </motion.h1>

          <motion.p
            className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1.5 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Hi! I&apos;m Lonis, a Fullstack Developer based in Vancouver,
            Canada.
          </motion.p>

          <div className='flex flex-col sm:flex-row gap-10 sm:mt-5 pt-5'>
            <motion.a
              href='#projects'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <MagicButton
                title='View My Work'
                icon={<FaLocationArrow />}
                position='right'
              />
            </motion.a>

            <motion.a
              href='/Lonis_Kwacke_Resume_2025.pdf'
              download='Lonis_Kwacke_Resume_2025.pdf'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <MagicButton
                title='Download Resume'
                icon={<MdDownload size={20} />}
                position='right'
              />
            </motion.a>
          </div>

          <motion.div
            className='hidden sm:block mt-16 animate-bounce opacity-15'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <RiScrollToBottomLine size={30} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
