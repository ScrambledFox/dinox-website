'use client';

import { useInView } from 'framer-motion';
import { PlayerProps } from 'next-video';
import { useEffect, useRef } from 'react';

export default function VideoAutoPlayer(props: PlayerProps) {
  const { src } = props;

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
        <source src={src} type='video/mp4' />
      </video>
    </div>
  );
}
