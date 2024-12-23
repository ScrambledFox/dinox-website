// 'use client';

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
    <div className='flex flex-col justify-center items-center mb-16'>
      {/* Headers */}
      <div className='container mb-8 px-2'>
        <Header text='Stay up-to-date' className='mb-4' />
        <Header text='follow dinox' className='mb-8' />
        <div className='w-full flex flex-row justify-center'>
          <Subheader className='p-4 md:w-[60%]'>
            Stay up to date for freshly produced tracks and events. Make sure
            you are never missing out on Dinox news and events.
          </Subheader>
        </div>
      </div>

      {/* Body */}
      <div className='px-4 w-full md:w-[50%]'>
        <div className='flex flex-row justify-between mb-12'>
          <Socials />
        </div>

        <SpotifyEmbed />
      </div>
    </div>
  );
}
