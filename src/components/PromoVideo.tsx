'use client';

import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function PromoVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) {
      ref.current?.pause();
    } else {
      ref.current?.play();
    }
  }, [isInView]);

  return (
    <div>
      <video
        ref={ref}
        id='promo-video'
        autoPlay={false}
        muted={false}
        controls={true}
      >
        <source src='/videos/dinox-promo.mp4' type='video/mp4' />
      </video>
    </div>
  );
}
