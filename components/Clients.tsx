import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteCards';
import { companies, testimonials } from '@/data';
import Image from 'next/image';

const Clients = () => {
  return (
    <section id='testimonials' className='pt-20'>
      <h1 className='heading'>
        Kind words from
        <span className='text-purple'> satisfied clients</span>
      </h1>

      <div className='flex flex-col items-center max-lg:mt-10'>
        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden'>
          <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden'>
            <InfiniteMovingCards
              items={testimonials}
              direction='right'
              speed='slow'
            />
          </div>
        </div>
        {/* add this section when you have more work exp */}
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className='flex md:max-w-60 max-w-32 gap-2'>
                <Image
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={company.id === 4 || company.id === 5 ? 100 : 150}
                  src={company.img}
                  alt={company.name}
                  className='md:w-10 w-5'
                />
                <Image
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={company.id === 4 || company.id === 5 ? 100 : 150}
                  src={company.nameImg}
                  alt={company.name}
                  className='md:w-24 w-20'
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
