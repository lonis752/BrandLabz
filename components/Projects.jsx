import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '@/data/index';
import DemoComputer from './DemoComputer';
import CanvasLoader from './ui/CanvasLoader';
import { motion } from 'framer-motion';

import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { MdOutlineArrowOutward } from 'react-icons/md';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' }
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section id='projects' className='sm:px-10 my-20'>
      <p className='font-bold text-4xl md:text-5xl'>
        Featured <span className='text-purple'>Projects</span>
      </p>
      <div className='flex flex-col sm:flex-row mt-6 sm:mt-12 gap-5'>
        <div className='w-full h-full sm:w-1/2 sm:h-1/2 flex flex-col gap-3 sm:gap-5 relative sm:p-10 py-5 sm:py-10 px-5 shadow-2xl shadow-black-200'>
          <div className='absolute top-0 right-0'>
            <img
              src={currentProject.spotlight}
              alt='spotlight'
              className='w-full h-96 object-cover rounded-xl'
            />
          </div>

          <div
            className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg'
            style={currentProject.logoStyle}
          >
            <img
              className='w-10 h-10 shadow-sm'
              src={currentProject.logo}
              alt='logo'
            />
          </div>

          <div className='flex flex-col gap-5 text-white-600 my-5'>
            <p className='text-white text-2xl font-semibold animatedText'>
              {currentProject.title}
            </p>
          <div className='sm:hidden'>
            <Canvas>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group
                    scale={4}
                    position={[-0.5, -7.2, 0]}
                    rotation={[0, 0, 0]}
                  >
                    <DemoComputer texture={currentProject.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
          </div>

            <p className='animatedText'>{currentProject.desc}</p>
            <p className='animatedText hidden sm:block'>
              {currentProject.subdesc}
            </p>
          </div>

          <div className='flex items-center justify-between flex-wrap gap-5'>
            <div className='flex items-center gap-3'>
              {currentProject.tags.map((tag, index) => (
                <div
                  key={index}
                  className='w-10 h-10 rounded-md p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center'
                >
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className='z-50 flex items-center gap-2 cursor-pointer text-white-600'
              href={currentProject.href}
              target='_blank'
              rel='noreferrer'
            >
              <p>Check Live Site</p>
              <MdOutlineArrowOutward />
            </a>
          </div>

          <div className='flex justify-between items-center'>
            <button
              className='z-50 w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient'
              onClick={() => handleNavigation('previous')}
            >
              <FaArrowLeft size={24} />
            </button>

            <button
              className='z-50 w-10 h-10 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient'
              onClick={() => handleNavigation('next')}
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className='border w-full sm:w-1/2 border-black-300 bg-black-200 rounded-lg'>
          <div className='hidden sm:block h-full'>
            <Canvas>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group
                    scale={2}
                    position={[0, -3, 0]}
                    rotation={[0, -0.1, 0]}
                  >
                    <DemoComputer texture={currentProject.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
