'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';

import { useLanguage } from '@/contexts/LanguageContext';

import backgroundImage from '/public/images/dinox-crowd.jpg';

export default function HomePage() {
  const { t } = useLanguage();

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
          alt='DJ Dinox performing for a crowd'
          quality={100}
          className='-z-10 object-cover object-right'
          fill={true}
          priority
          placeholder='blur'
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className='w-full h-screen bg-black/55 flex flex-col justify-center'
      >
        {/* Responsive left padding */}
        <div className='w-full px-8 sm:px-12 md:px-20 lg:px-28 ultrawide:px-64'>
          <div className='flex flex-col gap-5 items-start w-full md:w-[44%] lg:w-[40%] ultrawide:w-[860px]'>
            {/* Identity tag */}
            <p className='text-xs md:text-sm font-primary uppercase tracking-[0.2em] text-primary-400'>
              {t('home_identity')}
            </p>

            {/* Artist name */}
            <h1 className='text-7xl sm:text-8xl md:text-9xl font-header text-white uppercase leading-none'>
              Dinox
            </h1>

            {/* Genre descriptor */}
            <p className='text-sm md:text-lg font-header text-white/60 uppercase tracking-widest'>
              {t('home_genres')}
            </p>

            {/* Description */}
            <p className='text-sm md:text-base text-white/75 leading-relaxed max-w-sm'>
              {t('home_description')}
            </p>

            {/* CTAs */}
            <div className='flex flex-row gap-3 flex-wrap'>
              <ButtonLink
                href='/booking'
                variant='light'
                className='uppercase'
                size='4xl'
              >
                {t('home_cta_book')}
              </ButtonLink>
              <ButtonLink
                href='/about'
                variant='black'
                className='uppercase'
                size='4xl'
              >
                {t('home_cta_about')}
              </ButtonLink>
            </div>

            {/* Credibility line */}
            <p className='text-xs text-white/40 font-primary uppercase tracking-wider'>
              {t('home_credibility')}
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
