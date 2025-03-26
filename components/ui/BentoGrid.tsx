'use client';

import { cn } from '@/lib/utils';
import { BackgroundGradientAnimation } from './GradientBG';
import { useState } from 'react';
import MagicButton from './MagicButton';
import { IoCopyOutline } from 'react-icons/io5';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../Model';
import Approach from '../Approach';
import Image from 'next/image';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  // For changes to the 3rd box tech stack.
  const leftLists = ['ReactJS', 'Express', 'JavaScript'];
  const rightLists = ['PostgreSQL', 'NextJS', 'TailwindCSS'];
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('lonis712@hotmail.com');
    setCopied(true);
  };

  return (
    <div
      className={cn(
        'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className='w-full h-full absolute'>
          {img && (
            <Image
            width={20}
            height={20}
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center ')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && 'w-full opacity-80'
          } `}
        >
          {spareImg && (
            <Image
            width={20}
            height={20}
              src={spareImg}
              alt={spareImg}
              className='object-cover object-center w-full h-full'
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
        )}
        {id === 1 && (
          <>
            <div className=''>
              <Approach />
            </div>
          </>
        )}
        {id === 2 && (
          <div className='w-full absolute lg:top-1/3 border-b rounded-2xl  z-50'>
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Model position-y={-18.2} scale={11.2} animationName='wave' />
            </Canvas>
          </div>
        )}

        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}
        >
          <div className='font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10'>
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 3 && (
            <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
              <div className='flex flex-col gap-3 md:gap-3 lg:gap-8'>
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className='lg:py-4 py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]'
                  >
                    {item}
                  </span>
                ))}
                <span className='lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]'></span>
              </div>
              <div className='flex flex-col gap-3 md:gap-3 lg:gap-8'>
                <span className='lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]'></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className='lg:py-4 py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className='mt-2 sm:mt-5 relative'>
              {/* <div className={`absolute bottom-1000`}>
                <Confetti
                />
              </div> */}
              <div className='flex flex-col gap-3 items-center'>
                <div className='flex gap-3 justify-center'>
                  <div className='w-10 h-10 rounded-full flex justify-center items-center bg-black-300 border border-black-200'>
                    <a href='https://github.com/lonis752' target='_blank'>
                      <Image
            width={30}
            height={30} src='/git.svg' alt='Github Logo' className='' />
                    </a>
                  </div>
                  <div className='w-10 h-10 rounded-full flex justify-center items-center bg-black-300 border border-black-200'>
                    <a href='https://x.com/lonis_k' target='_blank'>
                      <Image
            width={50}
            height={50} src='/x.png' alt='X Logo' className='' />
                    </a>
                  </div>
                  <div className='w-10 h-10 rounded-full flex justify-center items-center bg-black-300 border border-black-200'>
                    <a
                      href='https://www.linkedin.com/in/lonis-kwacke/'
                      target='_blank'
                    >
                      <Image
            width={25}
            height={25} src='/link.svg' alt='LinkedIn Logo' className='' />
                    </a>
                  </div>
                </div>
                <MagicButton
                  title={copied ? 'Email Copied!' : 'Copy My Email'}
                  icon={<IoCopyOutline />}
                  position='left'
                  otherClasses='!bg-[#161a31]'
                  handleClick={handleCopy}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
