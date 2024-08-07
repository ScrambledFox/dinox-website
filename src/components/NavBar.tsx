'use client';

import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, ReactNode } from 'react';

import logoImage from '/public/images/logo-text.png';

interface LinkProps {
  text: string;
  href: string;
}

const NavigationLink: FC<LinkProps> = ({ href, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  // Add active class if the link is active
  return (
    <Link
      href={href}
      className={`hover:text-gray-300 ${isActive ? 'text-white' : 'text-white/50'}`}
    >
      <p>{props.text}</p>
    </Link>
  );
};

interface NavigationLinkProps {
  children?: ReactNode;
}

// Add | between the links
const NavigationLinks: FC<NavigationLinkProps> = ({ children }) => {
  return (
    <div className='flex gap-2'>
      {React.Children.map(children, (child, index) => {
        return (
          <>
            {child}
            {index !== React.Children.count(children) - 1 && <span>|</span>}
          </>
        );
      })}
    </div>
  );
};

const NavBar = () => {
  return (
    <div className='fixed z-50 top-0 left-0 w-full max-h-[70px] py-4 bg-black/50'>
      <div className='flex flex-row justify-between mx-4 text-white uppercase font-primary align-middle text-center leading-loose'>
        <NavigationLinks>
          <NavigationLink text='Home' href='/' />
          <NavigationLink text='Booking' href='/booking' />
          <NavigationLink text='Socials' href='/socials' />
          <NavigationLink text='About' href='/about' />
        </NavigationLinks>
        <a href='/'>
          <Image
            priority
            src={logoImage}
            alt='logo'
            width={200}
            height={200}
          />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
