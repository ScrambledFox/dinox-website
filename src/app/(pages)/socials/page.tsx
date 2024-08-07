"use client"

import Header from "@/components/Header";
import SocialBlock from "@/components/SocialBlock";
import Socials from "@/components/Socials";
import Subheader from "@/components/Subheader";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: 'Socials',
//   description: 'Follow Dinox on social media',
// };

interface SocialsPageProps {
}

export default function SocialsPage({ }: SocialsPageProps) {
  return (
    <main>
      <div className="max-w-[1000px] mb-16">
        <Header text="Stay up-to-date follow dinox" className="mb-12" />
        <Subheader>Stay up to date for freshly produced tracks and events. Make sure you are never missing out on Dinox news and events.</Subheader>
      </div>

      <div className="flex flex-row gap-12 justify-center mb-12">
        <Socials />
      </div>

      <div className="flex flex-col gap-12">
        <SocialBlock borderOneColour="black" borderTwoColour="green">
          <iframe src="https://open.spotify.com/embed/artist/0EtonsnDHhrEeh0UFjA7s0?utm_source=generator&theme=0" width="100%" height="375" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </SocialBlock>

      </div>
    </main>
  );
}