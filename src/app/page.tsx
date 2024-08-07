'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import React from 'react';

import Header from '@/components/Header';
import ButtonLink from '@/components/links/ButtonLink';

import backgroundImage from '/public/images/dinox-crowd.jpg';

export default function HomePage() {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={backgroundImage}
          alt='Dinox Crowd'
          quality={100}
          className='-z-10 object-cover'
          fill={true}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className='absolute top-0 left-0 w-full min-h-screen bg-black/50 flex flex-col justify-center '
      >
        <div className='flex flex-col gap-9 w-[60%] max-w-[1000px] mx-32 text-justify'>
          <Header text='Unleash the beats' className='!text-6xl' />
          <p className='text-2xl text-white'>
            Dive into the heart-pounding beats of DINOX. Known for
            electrifying hardstyle and relentless frenchcore, DINOX delivers
            intense, high-energy performances that will keep you moving all
            night long. Don’t miss out on the raw power and adrenaline of the
            underground sound.
          </p>
          <div className='flex flex-row justify-start gap-12'>
            <ButtonLink
              href='/about'
              size='4xl'
              variant='black'
              className='uppercase px-8 py-4'
            >
              Learn more
            </ButtonLink>
            <ButtonLink
              href='/booking'
              size='4xl'
              variant='light'
              className='uppercase px-8 py-4'
            >
              Book now
            </ButtonLink>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
