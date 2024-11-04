import { Metadata } from 'next';
import Image from 'next/image';

import AboutBlock from '@/components/AboutBlock';
import Header from '@/components/Header';
import SpotifyEmbed from '@/components/Spotify';
import Subheader from '@/components/Subheader';
import UnopinionatedAboutBlock from '@/components/UnopinionatedAboutBlock';

import dinoxFrontImage from '/public/images/dinox-front.png';
import djImage from '/public/images/dj.png';
import famousImage from '/public/images/famous.jpg';
import flStudioImage from '/public/images/fl-studio.png';
import jamImage from '/public/images/jam.jpg';
import studioImage from '/public/images/studio.png';
import workingImage from '/public/images/working.png';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Dinox',
};

export default function AboutPage() {
  return (
    <main className='flex flex-col justify-center items-center'>
      <div className='max-w-[1000px] mb-16 mx-2'>
        <Header text='Want to know more about dinox?' className='mb-12' />
        <Subheader>
          Step into his timeline and meet the person behind Dinox.
        </Subheader>
      </div>

      <div className='md:text-lg'>
        <AboutBlock
          title='BIO'
          coverImage={workingImage}
          textImage={dinoxFrontImage}
        >
          <p>
            At 27 years old, DJ/Producer Dinox is a force to be reckoned with in
            the Harderstyle music scene. A lifelong fan of rapid fast BPM, Dinox
            discovered the electrifying energy of high-tempo beats at a young
            age and has been hooked ever since.
          </p>
          <br />
          <p>
            With a mission to spread positive energy through music and
            performance, Dinox creates an unforgettable experience for every
            audience. Known for his dynamic sets and infectious enthusiasm, DJ
            Dinox combines passion with skill to deliver high-energy
            performances that leave crowds buzzing. Whether it's at a packed
            nightclub, a massive festival, or an intimate party, Dinox brings a
            unique blend of Harderstyle tracks that keep the dance floor alive.
          </p>
          <br />
          <p>
            Join Dinox on a musical journey where the beats are fast, the energy
            is high, and the vibes are always positive. Let the music move you
            and feel the rush that has captivated Dinox since childhood.
          </p>
        </AboutBlock>

        <UnopinionatedAboutBlock
          title='PRODUCER'
          coverImage={flStudioImage}
          sideElement={<SpotifyEmbed />}
        >
          <p>
            As a producer, Dinox Started crafting his own tracks since he was
            18, specializing in hardstyle, hardcore, frenchcore, and rawstyle
            music.
          </p>
          <br />
          <p>
            His goal is to infuse his tracks with emotion, creating a listening
            experience that makes the listener feel empowered and ready to
            conquer the world, generating positive energy and uplifting their
            spirits.
          </p>
          <br />
          <p>
            Lots of inspiration comes from the harderstyle scene, other music
            genres and fellow artists ideas. Getting his inspiration from
            different types of music genres, Dinox produced tracks like ‘don’t
            stop running’ and ‘Multiverse’. By fusing different types of music
            genres into one idea, he creates a whole new level of sound for the
            harderstyle scene.
          </p>
        </UnopinionatedAboutBlock>

        <AboutBlock title='DJ' coverImage={djImage} textImage={famousImage}>
          <p>
            Dinox is known for his powerful, atmospheric sets, packed with
            intense kicks and melodic tracks that stay in your head long after
            the music fades. With a keen ear and sharp attention to detail,
            Dinox carefully selects tracks that not only stirs the crowd, but
            also perfectly match the vibe of the event.
          </p>
          <br />
          <p>
            Specializing in Frenchcore, Hardcore, Hardstyle, and Rawstyle, he
            consistently captivates his audience with unforgettable moments. New
            sets are regularly uploaded to SoundCloud, giving fans a taste of
            his distinctive style.
          </p>
          <br />
          <p>
            Having performed at events like ‘RandRock’ and the ‘Twenterand Run’
            festival, Dinox has proven he knows how to elevate a crowd and take
            any festival to the next level. Add Dinox to your lineup and prepare
            for an explosive experience that will make the day truly
            unforgettable!
          </p>
        </AboutBlock>

        <UnopinionatedAboutBlock
          title='DINOX PREVIEW'
          coverImage={studioImage}
          sideElement={<Image src={jamImage} alt='jammin' />}
        >
          <h1 className='text-center'>WHAT YOU SEE IS WHAT YOU GET</h1>
        </UnopinionatedAboutBlock>
      </div>
    </main>
  );
}
