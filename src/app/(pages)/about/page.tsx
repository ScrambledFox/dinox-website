import { Metadata } from 'next';

import AboutBlock from '@/components/AboutBlock';
import Header from '@/components/Header';
import PromoVideo from '@/components/PromoVideo';
import SpotifyEmbed from '@/components/Spotify';
import Subheader from '@/components/Subheader';
import UnopinionatedAboutBlock from '@/components/UnopinionatedAboutBlock';

import useAge from '@/utils/useAge';

import dinoxFrontImage from '/public/images/dinox-front.png';
import djImage from '/public/images/dj.png';
import famousImage from '/public/images/famous.jpg';
import flStudioImage from '/public/images/fl-studio.png';
import studioImage from '/public/images/studio.png';
import workingImage from '/public/images/working.png';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet DJ Dinox, hardstyle and frenchcore DJ/producer from the Netherlands, performing at festivals and clubs across Europe.',
};

export default function AboutPage() {
  const dinoxAge = useAge(new Date('1997-09-28'));

  return (
    <main className='flex flex-col justify-center items-center'>
      <div className='max-w-[1000px] mb-16 mx-2'>
        <Header text='About Dinox' className='mb-12' />
        <Subheader>
          DJ, producer, and performer from the Netherlands, known for
          hardstyle, frenchcore, and rawstyle.
        </Subheader>
      </div>

      <div className='md:text-lg'>
        <AboutBlock
          title='BIO'
          coverImage={workingImage}
          textImage={dinoxFrontImage}
          priority
        >
          <p>
            At {dinoxAge} years old, DJ/Producer Dinox is a force to be
            reckoned with in the hardstyle and frenchcore scene. A lifelong fan
            of high-BPM music, Dinox discovered the electrifying energy of
            high-tempo beats at a young age and has been hooked ever since.
          </p>
          <br />
          <p>
            With a mission to spread positive energy through music and
            performance, Dinox creates an unforgettable experience for every
            audience. Known for his dynamic sets and infectious enthusiasm, he
            combines passion with skill to deliver high-energy performances that
            leave crowds buzzing, whether at a packed nightclub, a festival
            stage, or an intimate event.
          </p>
          <br />
          <p>
            Join Dinox on a journey where the beats are fast, the energy is
            high, and the vibes are always positive. Let the music move you and
            feel the rush that has driven Dinox since childhood.
          </p>
        </AboutBlock>

        <UnopinionatedAboutBlock
          title='PRODUCER'
          coverImage={flStudioImage}
          sideElement={<SpotifyEmbed />}
        >
          <p>
            As a producer, Dinox started crafting his own tracks at 18,
            specializing in hardstyle, hardcore, frenchcore, and rawstyle.
          </p>
          <br />
          <p>
            His goal is to infuse every track with emotion, creating a
            listening experience that makes the listener feel empowered and
            ready to take on the world, channeling positive energy and lifting
            their spirits.
          </p>
          <br />
          <p>
            Drawing inspiration from the harderstyle scene, other music genres,
            and fellow artists, Dinox produced tracks like{' '}
            <em>Don&apos;t Stop Running</em> and <em>Multiverse</em>. By fusing
            different genre influences into a single vision, he carves out a
            distinctive sound within the harderstyle scene.
          </p>
        </UnopinionatedAboutBlock>

        <AboutBlock title='DJ' coverImage={djImage} textImage={famousImage}>
          <p>
            Dinox is known for his powerful, atmospheric sets, packed with
            intense kicks and melodic tracks that stay in your head long after
            the music fades. With a keen ear and sharp attention to detail, he
            carefully selects tracks that stir the crowd and perfectly match the
            energy of the event.
          </p>
          <br />
          <p>
            Specializing in frenchcore, hardcore, hardstyle, and rawstyle, he
            consistently captivates his audience with unforgettable moments. New
            sets are regularly uploaded to SoundCloud, giving fans a direct
            taste of his distinctive style.
          </p>
          <br />
          <p>
            Having performed at events like RandRock and the Twenterand Run
            festival, Dinox has proven he knows how to elevate a crowd and take
            any event to the next level. Add Dinox to your lineup and prepare
            for an explosive performance that will make the day truly
            unforgettable.
          </p>
        </AboutBlock>

        <UnopinionatedAboutBlock
          title='DINOX PREVIEW'
          coverImage={studioImage}
          sideElement={<PromoVideo />}
        >
          <h2 className='text-center font-header text-2xl md:text-4xl'>
            What you see is what you get.
          </h2>
          <br />
          <p>
            Ready to bring that energy to your event?{' '}
            <a
              href='/booking'
              className='text-primary-400 underline underline-offset-2 hover:text-primary-300 transition-colors'
            >
              Get in touch
            </a>{' '}
            and secure your booking.
          </p>
        </UnopinionatedAboutBlock>
      </div>
    </main>
  );
}
