import Image, { StaticImageData } from 'next/image';
import React from 'react';

import Header from '@/components/Header';

interface AboutBlockProps {
  className?: string;
  title: string;
  coverImage: StaticImageData;
  sideElement: React.ReactNode;
  children?: React.ReactNode;
}

export default function UnopinionatedAboutBlock({
  className = '',
  children,
  title,
  coverImage,
  sideElement,
}: AboutBlockProps) {
  return (
    <div
      className={`${className} relative ultrawide:w-svw flex flex-col border-t-8 border-white`}
    >
      {/* Headers */}
      <div className='relative h-[400px] flex flex-row justify-center items-center'>
        <Header
          text={title}
          className='relative !text-4xl bg-black p-8 bg-opacity-50 rounded-3xl'
        />
        <div className='-z-10'>
          <Image
            src={coverImage}
            alt='background'
            quality={100}
            className='object-cover object-center'
            priority
            placeholder='blur'
            fill={true}
          />
        </div>
      </div>

      {/* Body block */}
      <div className='w-full md:relative bg-black flex flex-row justify-center'>
        <div className='text-justify flex flex-col md:flex-row w-full justify-center align-bottom gap-8 md:gap-32 p-8 md:p-[128px] items-center ultrawide:w-[2000px]'>
          <div className='flex-1'>{children}</div>
          <div className='md:flex-1 w-full'>{sideElement}</div>
        </div>
      </div>
    </div>
  );
}
