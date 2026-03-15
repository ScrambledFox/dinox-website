'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import { useLanguage } from '@/contexts/LanguageContext';

import LogoImage from '/public/images/logo-text.png';

interface LinkProps {
  textKey: 'nav_home' | 'nav_booking' | 'nav_socials' | 'nav_about';
  href: string;
}

const linkDefs: LinkProps[] = [
  { textKey: 'nav_home', href: '/' },
  { textKey: 'nav_booking', href: '/booking' },
  { textKey: 'nav_socials', href: '/socials' },
  { textKey: 'nav_about', href: '/about' },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { locale, toggle, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const LangToggle = ({ className = '' }: { className?: string }) => (
    <button
      onClick={toggle}
      aria-label='Switch language'
      className={`flex items-center gap-0.5 text-sm font-primary uppercase tracking-wider ${className}`}
    >
      <span
        className={
          locale === 'en' ? 'text-primary-400' : 'text-white/50 hover:text-white/80'
        }
      >
        EN
      </span>
      <span className='text-white/30 mx-1'>|</span>
      <span
        className={
          locale === 'nl' ? 'text-primary-400' : 'text-white/50 hover:text-white/80'
        }
      >
        NL
      </span>
    </button>
  );

  return (
    <>
      <nav className='fixed w-screen text-white bg-black/50 backdrop-blur-md z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='hidden md:flex items-center gap-2'>
              <div className='text-white ml-10 flex items-baseline space-x-4 text-xl uppercase'>
                {linkDefs.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 rounded-md font-medium underline-offset-4 hover:text-primary-400 transition-colors duration-150 ${pathname === link.href ? 'text-primary-400 underline' : ''}`}
                  >
                    {t(link.textKey)}
                  </Link>
                ))}
              </div>
              <LangToggle className='ml-4' />
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
            <div>
              <Link href='/' onClick={() => setIsMenuOpen(false)}>
                <Image
                  src={LogoImage}
                  alt='logo'
                  width={200}
                  height={200}
                  priority
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className='text-white px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {linkDefs.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium underline-offset-4 hover:text-primary-400 transition-colors duration-150 ${pathname === link.href ? 'text-primary-400 underline' : ''}`}
              >
                {t(link.textKey)}
              </Link>
            ))}
            <div className='px-3 py-2'>
              <LangToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
