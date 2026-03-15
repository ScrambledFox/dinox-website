import { Metadata } from 'next';

import SocialsContent from './SocialsContent';

export const metadata: Metadata = {
  title: 'Socials',
  description:
    'Follow DJ Dinox on Instagram, SoundCloud, YouTube, Spotify, and more.',
};

export default function SocialsPage() {
  return <SocialsContent />;
}
