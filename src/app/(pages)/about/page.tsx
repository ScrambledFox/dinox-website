import AboutBlock from "@/components/AboutBlock";
import Header from "@/components/Header";
import Subheader from "@/components/Subheader";
import { Metadata } from "next"

import dinoxImage from '/public/images/dinox-crowd.jpg';
import workingImage from '/public/images/working.png';
import dinoxFrontImage from '/public/images/dinox-front.png';
import flStudioImage from '/public/images/fl-studio.png';
import djImage from '/public/images/dj.png';
import studioImage from '/public/images/studio.png';
import dinoxFarImage from '/public/images/dinox-far.jpg';
import famousImage from '/public/images/famous.jpg';
import jamImage from '/public/images/jam.jpg';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Dinox',
};

interface AboutPageProps {
}

export default function AboutPage({ }: AboutPageProps) {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="max-w-[1000px] mb-16">
        <Header text="Want to know more about dinox?" className="mb-12" />
        <Subheader>Step into his timeline and meet the person behind Dinox.</Subheader>
      </div>

      <div>
        <AboutBlock title="BIO" coverImage={workingImage} textImage={dinoxFrontImage} className="text-lg">
          <p>
            At 27 years old, DJ/Producer Dinox is a force to be reckoned with in the Harderstyle music scene. A lifelong fan of rapid fast BPM, Dinox discovered the electrifying energy of high-tempo beats at a young age and has been hooked ever since.
          </p>
          <br />
          <p>
            With a mission to spread positive energy through music and performance, Dinox creates an unforgettable experience for every audience. Known for his dynamic sets and infectious enthusiasm, DJ Dinox combines passion with skill to deliver high-energy performances that leave crowds buzzing. Whether it's at a packed nightclub, a massive festival, or an intimate party, Dinox brings a unique blend of Harderstyle tracks that keep the dance floor alive.
          </p>
          <br />
          <p>
            Join Dinox on a musical journey where the beats are fast, the energy is high, and the vibes are always positive. Let the music move you and feel the rush that has captivated Dinox since childhood.
          </p>
        </AboutBlock>

        <AboutBlock title="PRODUCER" coverImage={flStudioImage} textImage={dinoxFarImage} className="text-lg">
          <p>
            As a producer, Dinox Started crafting his own tracks since he was 18, specializing in hardstyle, hardcore, frenchcore, and rawstyle music.
          </p>
          <br />
          <p>
            His goal is to infuse his tracks with emotion, creating a listening experience that makes the listener feel empowered and ready to conquer the world, generating positive energy and uplifting their spirits.
          </p>
          <br />
          <p>
            Lots of inspiration comes from the harderstyle scene, other music genres and fellow artists ideas. Getting his inspiration from different types of music genres, Dinox produced tracks like ‘don’t stop running’ and ‘Multiverse’. By fusing different types of music genres into one idea, he creates a whole new level of sound for the harderstyle scene.
          </p>
        </AboutBlock>

        <AboutBlock title="DJ" coverImage={djImage} textImage={famousImage} className="text-lg">
          <p>
            DJ Samenvatting
          </p>
        </AboutBlock>

        <AboutBlock title="DINOX PREVIEW" coverImage={studioImage} textImage={jamImage} className="text-lg">
          <p>
            Dinox Preview
          </p>
        </AboutBlock>

      </div>

    </main >
  );
}