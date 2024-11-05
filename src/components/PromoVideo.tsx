'use client';

import Video from 'next-video';

import VideoAutoPlayer from '@/components/VideoAutoPlayer';

import promoVideo from '/videos/dinox-promo.mp4';

export default function PromoVideo() {
  return (
    <div>
      <Video as={VideoAutoPlayer} src={promoVideo}></Video>
    </div>
  );
}
