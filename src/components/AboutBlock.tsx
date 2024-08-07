import Image, { StaticImageData } from "next/image";

import Header from "@/components/Header";


interface AboutBlockProps {
  className?: string;
  title: string;
  coverImage: StaticImageData;
  textImage: StaticImageData;
  children?: React.ReactNode;
}

export default function AboutBlock({ className = "", children, title, coverImage, textImage }: AboutBlockProps) {
  return (
    <div className={`${className} relative flex flex-col w-[100vw] border-t-8 border-white`}>
      <div className="relative h-[400px] flex flex-row justify-center items-center">
        <Header text={title} className="relative !text-4xl m-16 bg-black p-8 bg-opacity-50 rounded-3xl" />
        <div className="-z-10">
          <Image src={coverImage} alt="background" quality={100} className='object-cover object-center' fill={true} />
        </div>
      </div>

      <div className="relative flex flex-row w-full justify-center align-bottom px-16 py-8 items-center bg-black">
        <div className="flex-1 text-left p-[64px]">
          {children}
        </div>
        <div className="relative flex-1 my-8 h-[600px]">
          <Image src={textImage} alt="background" quality={100} className='object-cover rounded-[50px]' fill={true} />
        </div>
      </div>
    </div >
  )
}