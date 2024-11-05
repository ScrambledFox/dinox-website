import Image, { StaticImageData } from 'next/image';

import UnopinionatedAboutBlock from '@/components/UnopinionatedAboutBlock';

interface AboutBlockProps {
  className?: string;
  title: string;
  coverImage: StaticImageData;
  textImage: StaticImageData;
  priority?: boolean;
  children?: React.ReactNode;
}

export default function AboutBlock({
  className = '',
  children,
  title,
  coverImage,
  textImage,
  priority,
}: AboutBlockProps) {
  return (
    <UnopinionatedAboutBlock
      className={className}
      title={title}
      coverImage={coverImage}
      sideElement={
        <Image
          src={textImage}
          alt='background'
          quality={100}
          priority={priority}
          className='object-cover rounded-2xl'
        />
      }
    >
      {children}
    </UnopinionatedAboutBlock>
  );
}
