import { Metadata } from 'next';
import Image from 'next/image';

import BookingForm from '@/components/BookingForm';
import Header from '@/components/Header';
import Subheader from '@/components/Subheader';

import dinoxBackImage from '/public/images/dinox-back.png';

export const metadata: Metadata = {
  title: 'Booking',
  description: 'Book Dinox for your next event',
};

export default function BookingPage() {
  return (
    <main
      className='container flex flex-col justify-center items-center text-center pb-32'
      suppressHydrationWarning
    >
      <div className='max-w-[1000px]'>
        <Header text='Supercharge your event' className='mb-8' />
        <Subheader className='mb-8 px-16'>
          Bring the raw energy of DINOX’ hardstyle and frenchcore beats to your
          event. Secure your booking now for an unforgettable night of
          electrifying music and non-stop dancing.
        </Subheader>
      </div>

      <div className='flex flex-col md:flex-row gap-24 justify-center items-center'>
        <div className='flex-1'>
          <BookingForm />
        </div>
        <div className='flex-1 justify-center items-center'>
          <Image src={dinoxBackImage} alt='Dinox Back' quality={100} priority />
        </div>
      </div>
    </main>
  );
}
