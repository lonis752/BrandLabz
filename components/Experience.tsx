import { workExperience } from '@/data';
import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';
import Image from 'next/image';

const Experience = () => {
  const [animationName, setAnimationName] = useState('idle');
  return (
    <section id='experience' className='sm:px-10 my-20'>
      <div className='w-full text-white-200'>
        <h3 className='font-bold text-4xl md:text-5xl mb-5'>
          Work <span className='text-purple'>Experience</span>
        </h3>
        <div className='flex rounded-lg bg-black-200 border border-black-300'>
          <div className='hidden sm:block w-1/3 rounded-lg bg-black-200 border border-black-300'>
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Model
                position-y={-2.5}
                scale={3}
                animationName={animationName}
              />
            </Canvas>
          </div>
          <div className='sm:w-2/3 rounded-lg bg-black-100 border border-black-300'>
            <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
              <p
                onClick={() => setAnimationName('wave')}
                className='animate-pulse text-center sm:hidden p-2'
              >
                Click me
              </p>
              <div
                className={
                  animationName === 'idle'
                    ? 'hidden'
                    : 'sm:hidden fixed top-1/2 w-1/4'
                }
              >
                <Canvas>
                  <ambientLight intensity={7} />
                  <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                  />
                  <directionalLight position={[10, 10, 10]} intensity={1} />
                  <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                  />
                  <Model
                    position-y={-2.5}
                    scale={3}
                    animationName={animationName}
                  />
                </Canvas>
              </div>
              {workExperience.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() =>
                    setAnimationName(item.animation.toLowerCase())
                  }
                  onPointerOut={() => setAnimationName('idle')}
                  onWheel={() => setAnimationName('idle')}
                  onScroll={() => setAnimationName('idle')}
                  className='grid grid-cols-[auto_1fr] items-start gap-5  transition-all ease-in-out duration-500 cursor-pointer hover:bg-black-300 rounded-lg sm:px-5 px-2.5 group'
                >
                  <div className='flex flex-col h-full justify-start items-center py-2'>
                    <div className='rounded-3xl w-16 h-16 p-2 bg-black-600'>
                      <Image
                        width={50}
                        height={50}
                        src={item.icon}
                        alt={item.icon}
                      />
                    </div>

                    <div className='flex-1 w-0.5 mt-4 h-full bg-black-300 group-hover:bg-black-500 group-last:hidden' />
                  </div>

                  <div className='sm:p-5 px-2.5 py-5'>
                    <p className='font-bold text-white-800'>{item.name}</p>
                    <p className='text-sm mb-5'>
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className='group-hover:text-white transition-all ease-in-out duration-500'>
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
