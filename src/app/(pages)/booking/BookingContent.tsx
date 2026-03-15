'use client';

import Image from 'next/image';

import BookingForm from '@/components/BookingForm';
import Header from '@/components/Header';
import Subheader from '@/components/Subheader';

import { useLanguage } from '@/contexts/LanguageContext';

import dinoxBackImage from '/public/images/dinox-back.png';

export default function BookingContent() {
  const { t } = useLanguage();

  return (
    <main
      className='container flex flex-col justify-center items-center text-center pb-32'
      suppressHydrationWarning
    >
      <div className='max-w-[1000px]'>
        <Header text={t('booking_header')} className='mb-8' />
        <Subheader className='mb-6 px-4 md:px-16'>
          {t('booking_subheader')}
        </Subheader>

        {/* Expectation-setting info */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8 text-sm font-primary text-white/60'>
          <span className='flex items-center gap-1.5 justify-center'>
            <span className='text-primary-400 font-bold'>✓</span>
            {t('booking_info_response')}
          </span>
          <span className='hidden sm:inline text-white/30'>·</span>
          <span className='flex items-center gap-1.5 justify-center'>
            <span className='text-primary-400 font-bold'>✓</span>
            {t('booking_info_types')}
          </span>
          <span className='hidden sm:inline text-white/30'>·</span>
          <span className='flex items-center gap-1.5 justify-center'>
            <span className='text-primary-400 font-bold'>✓</span>
            {t('booking_info_contact')}{' '}
            <a
              href='mailto:info@djdinox.nl'
              className='underline underline-offset-2 hover:text-white transition-colors'
            >
              info@djdinox.nl
            </a>
          </span>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-24 justify-center items-center'>
        <div className='flex-1'>
          <BookingForm />
        </div>
        <div className='flex-1 justify-center items-center'>
          <Image
            src={dinoxBackImage}
            alt='DJ Dinox on stage'
            quality={100}
            priority
            placeholder='blur'
          />
        </div>
      </div>
    </main>
  );
}
