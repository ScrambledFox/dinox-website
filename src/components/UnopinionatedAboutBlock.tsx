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
      className={`${className} relative flex flex-col border-t-8 border-white`}
    >
      <div className='relative h-[400px] flex flex-row justify-center items-center'>
        <Header
          text={title}
          className='relative !text-4xl m-16 bg-black p-8 bg-opacity-50 rounded-3xl'
        />
        <div className='-z-10'>
          <Image
            src={coverImage}
            alt='background'
            quality={100}
            className='object-cover object-center'
            fill={true}
          />
        </div>
      </div>

      <div className='md:relative text-justify flex flex-col md:flex-row w-full justify-center align-bottom gap-16 p-4 md:p-[64px] items-center bg-black'>
        <div className='flex-1'>{children}</div>
        <div className='md:flex-1 w-full'>{sideElement}</div>
      </div>
    </div>
  );
}
