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
        autoPlay={false}
        muted={false}
        controls={true}
        loop={true}
      >
        <source
          src='https://bkpvl280bbkyjsre.public.blob.vercel-storage.com/dinox-promo-azDIAnT87op5FThQu8yaKWuVrD9wyR.mp4'
          type='video/mp4'
        />
      </video>
    </div>
  );
}
