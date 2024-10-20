'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

// Data object with link text and href
interface LinkProps {
  text: string;
  href: string;
}

const links: LinkProps[] = [
  { text: 'Home', href: '/' },
  { text: 'Booking', href: '/booking' },
  { text: 'Socials', href: '/socials' },
  { text: 'About', href: '/about' },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className='fixed w-screen text-white bg-black/50 backdrop-blur-md z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='hidden md:block'>
              <div className='text-white ml-10 flex items-baseline space-x-4 text-xl uppercase'>
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 rounded-md font-medium underline-offset-4 hover:text-gray-400 ${pathname === link.href ? 'underline' : ''}`}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>

            {/* Hamburger Icon */}
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={toggleMenu}
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-gray-300 focus:outline-none'
              >
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d={
                      isMenuOpen
                        ? 'M6 18L18 6M6 6l12 12'
                        : 'M4 6h16M4 12h16M4 18h16'
                    }
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className='flex-shrink-0'>
              <Link href='/' onClick={() => setIsMenuOpen(false)}>
                <Image
                  src='/images/logo-text.png'
                  alt='logo'
                  width={200}
                  height={200}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className='text-white px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium underline-offset-4 ${pathname === link.href ? 'underline' : ''}`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
