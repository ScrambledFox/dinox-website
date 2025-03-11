'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';

import backgroundImage from '/public/images/dinox-crowd.jpg';

export default function HomePage() {
  return (
    <main className='relative flex min-h-screen flex-col items-center w-full'>
      {/* Background, fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={backgroundImage}
          alt='Dinox Crowd'
          quality={100}
          className='-z-10 object-cover object-right'
          fill={true}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className='w-full h-screen bg-black/50 flex flex-col justify-center'
      >
        <div className='flex flex-row justify-center md:justify-start md:ml-16 ultrawide:ml-64'>
          <div className='flex flex-col gap-9 w-[80%] items-center pt-32 md:w-[40%] ultrawide:w-[900px]'>
            <h1 className='text-2xl md:text-6xl font-header text-white uppercase'>
              Unleash the beats
            </h1>
            <p className='text-sm md:text-xl text-white text-justify [text-align-last:center]'>
              Dive into the heart-pounding beats of DINOX. Known for
              electrifying hardstyle and relentless frenchcore, DINOX delivers
              intense, high-energy performances that will keep you moving all
              night long. Don’t miss out on the raw power and adrenaline of the
              underground sound.
            </p>
            <div className='flex flex-row gap-2 justify-evenly text-center'>
              <ButtonLink
                href='/about'
                variant='black'
                className='uppercase'
                size='4xl'
              >
                Learn more
              </ButtonLink>
              <ButtonLink
                href='/booking'
                variant='light'
                className='uppercase'
                size='4xl'
              >
                Book now
              </ButtonLink>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
