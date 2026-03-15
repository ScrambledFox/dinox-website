import { Metadata } from 'next';
import Image from 'next/image';

import BookingForm from '@/components/BookingForm';
import Header from '@/components/Header';
import Subheader from '@/components/Subheader';

import dinoxBackImage from '/public/images/dinox-back.png';

export const metadata: Metadata = {
  title: 'Booking',
  description: 'Book DJ Dinox for your next festival, club night, or private event.',
};

export default function BookingPage() {
  return (
    <main
      className='container flex flex-col justify-center items-center text-center pb-32'
      suppressHydrationWarning
    >
      <div className='max-w-[1000px]'>
        <Header text='Book DJ Dinox' className='mb-8' />
        <Subheader className='mb-6 px-4 md:px-16'>
          Bring high-energy hardstyle and frenchcore to your festival, club
          night, or private event. Fill in the form below and we&apos;ll be in
          touch.
        </Subheader>

        {/* Expectation-setting info */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8 text-sm font-primary text-white/60'>
          <span className='flex items-center gap-1.5 justify-center'>
            <span className='text-primary-400 font-bold'>✓</span>
            We will get back to you as soon as possible
          </span>
          <span className='hidden sm:inline text-white/30'>·</span>
          <span className='flex items-center gap-1.5 justify-center'>
            <span className='text-primary-400 font-bold'>✓</span>
            Festivals, clubs &amp; private events
          </span>
          <span className='hidden sm:inline text-white/30'>·</span>
          <span className='flex items-center gap-1.5 justify-center'>
            <span className='text-primary-400 font-bold'>✓</span>
            Direct contact:{' '}
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
