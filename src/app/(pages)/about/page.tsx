import { Metadata } from 'next';

import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet DJ Dinox, hardstyle and frenchcore DJ/producer from the Netherlands, performing at festivals and clubs across Europe.',
};

export default function AboutPage() {
  return <AboutContent />;
}
