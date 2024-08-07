
import Image from "next/image";

import backgroundImage from '/public/images/background.jpg';

import LeavesDecoration from "@/components/LeavesDecoration";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LeavesDecoration />
      <Image
        src={backgroundImage}
        alt="background"
        quality={100}
        className='-z-10 object-cover object-top'
        fill={true}
      />
      <main className='flex-grow relative bg-[2B3A2A] my-32 '>{children}</main>
    </>
  );
}