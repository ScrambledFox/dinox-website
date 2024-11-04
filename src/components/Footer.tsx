'use client';

import UnderlineLink from '@/components/links/UnderlineLink';
import Socials from '@/components/Socials';

import { useCookieBanner } from '@/contexts/CookieConsentContext';

const Footer = () => {
  const { openBanner } = useCookieBanner();

  const handleCookieButtonClick = () => {
    openBanner();
  };

  return (
    <>
      <div className='w-full p-2 flex flex-col justify-center gap-12 text-white bg-black py-12 text-center'>
        <h1 className='text-2xl md:text-8xl font-header'>
          DJ & PRODUCER DINOX
        </h1>

        <div className='flex gap-2 md:gap-[16px] justify-center'>
          <Socials />
        </div>

        <div className='flex flex-col gap-3'>
          <p>
            © {new Date().getFullYear()} - DJ DINOX - Designed by{' '}
            <UnderlineLink
              className=''
              href='https://www.linkedin.com/in/jorislodewijks/'
            >
              Joris Lodewijks
            </UnderlineLink>
          </p>
          <div className=''>
            <UnderlineLink href='/privacy'>Privacy Policy</UnderlineLink>
            {' | '}
            <UnderlineLink href='/privacy'>Terms of Service</UnderlineLink>
            {' | '}
            <UnderlineLink href='/privacy'>Cookies Policy</UnderlineLink>
          </div>
          <p>
            <UnderlineLink href='#cookies' onClick={handleCookieButtonClick}>
              Cookies Settings
            </UnderlineLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
