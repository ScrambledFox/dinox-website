'use client';

import Header from '@/components/Header';
import Socials from '@/components/Socials';
import SpotifyEmbed from '@/components/Spotify';
import Subheader from '@/components/Subheader';

// export const metadata: Metadata = {
//   title: 'Socials',
//   description: 'Follow Dinox on social media',
// };

export default function SocialsPage() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='container mb-16 px-2'>
        <Header text='Stay up-to-date' className='mb-4' />
        <Header text='follow dinox' className='mb-12' />
        <Subheader>
          Stay up to date for freshly produced tracks and events. Make sure you
          are never missing out on Dinox news and events.
        </Subheader>
      </div>

      <div className='px-8 w-full md:w-[50%]'>
        <div className='flex flex-row justify-between mb-12'>
          <Socials />
        </div>

        <div className='flex flex-col gap-12 mx-4'>
          <div className='relative left-0 w-full h-[152px]'>
            <SpotifyEmbed />
          </div>
        </div>
      </div>
    </div>
  );
}
