import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { CanvasRevealEffect } from './ui/CanvasReveal';

const Approach = () => {
  return (
    <section
      className='md:flex md:top-6 lg:top-0 lg:flex-col lg:items-start md:items-center'
      id='approach'
    >
      <h3 className='font-bold text-xl md:text-2xl my-2 px-5'>
        About Me & <span className='text-purple'>My Approach</span>
      </h3>
      <div className='flex p-2 items-center justify-center w-full gap-1 md:gap-3'>
        <Card
          title='Planning & Strategy'
          icon={<AceternityIcon order='Phase 1' />}
          des='I will outline the key objectives, target audience, and essential features for the app. This includes defining the structures, navigation, and content requirements to ensure a seamless user experience and alignment with project goals.'
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName='bg-emerald-900 rounded-3xl overflow-hidden'
          />
        </Card>
        <Card
          title='Creative Solutions'
          icon={<AceternityIcon order='Phase 2' />}
          des='Once the plan is set, I immerse myself in the coding process, transitioning from initial concepts to refined solutions. I stay focused and track progress at each stage, ensuring the project evolves from early sketches to a fully functional outcome.'
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName='bg-pink-900 rounded-3xl overflow-hidden'
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title='Development & Launch'
          icon={<AceternityIcon order='Phase 3' />}
          des='With the development phase underway, I focus on building and testing every aspect to ensure a smooth user experience. Once everything is fine-tuned, I prepare for launch, ensuring the project is optimized and ready to go live seamlessly.'
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName='bg-sky-600 rounded-3xl overflow-hidden'
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-1/3 mx-auto p-4 relative h-[6rem] lg:h-[30rem] rounded-3xl '
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='h-full w-full absolute inset-0'
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className='relative z-20'>
        <div
          className='text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 lg:min-w-40 mx-auto flex items-center justify-center'
        >
          {icon}
        </div>
        <h2
          className='dark:text-white text-center text-xs sm:text-sm md:text-lg lg:text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200'
        >
          {title}
        </h2>
        <p
          className='text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200 hidden lg:block'
          style={{ color: '#E4ECFF' }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className='relative inline-flex overflow-hidden rounded-full p-[1px] '>
        <span
          className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]'
        />
        <span
          className='inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold lg:text-2xl'
        >
          {order}
        </span>
      </button>
    </div>
  );
};

type IconProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
};
export const Icon: React.FC<IconProps> = ({ className, ...rest }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
      {...rest}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  );
};
