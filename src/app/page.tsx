'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';

export default function HomePage() {
  return (
    <main>
      <div className='relative flex min-h-screen flex-col items-center text-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src='/images/dinox-crowd.jpg'
            alt='Dinox Crowd'
            layout='fill'
            objectFit='cover'
            quality={100}
            className='-z-10'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className='absolute top-0 left-0 w-full min-h-screen bg-black/50 flex flex-col justify-center'
        >
          <div className='flex flex-col gap-9 w-[50%] ml-16 text-justify'>
            <h1 className='text-6xl font-header text-white uppercase'>
              Unleash the beats
            </h1>
            <p className='text-xl text-white'>
              Dive into the heart-pounding beats of DINOX. Known for
              electrifying hardstyle and relentless frenchcore, DINOX delivers
              intense, high-energy performances that will keep you moving all
              night long. Don’t miss out on the raw power and adrenaline of the
              underground sound.
            </p>
            <div className='flex flex-row justify-evenly'>
              <ButtonLink
                href='/about'
                size='4xl'
                variant='black'
                className='uppercase'
              >
                Learn more
              </ButtonLink>
              <ButtonLink
                href='/booking'
                size='4xl'
                variant='light'
                className='uppercase'
              >
                Book now
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
