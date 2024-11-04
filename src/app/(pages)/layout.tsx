import Image from 'next/image';

import LeavesDecoration from '@/components/LeavesDecoration';

import backgroundImage from '/public/images/background.jpg';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LeavesDecoration />
      <Image
        src={backgroundImage}
        alt='background'
        quality={100}
        className='!fixed -z-10 w-full h-full object-cover object-top'
        fill
        priority
      />
      <div className='flex-grow relative pt-32'>{children}</div>
    </>
  );
}
