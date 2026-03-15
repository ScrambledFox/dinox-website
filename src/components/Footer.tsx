'use client';

import UnderlineLink from '@/components/links/UnderlineLink';
import Socials from '@/components/Socials';

import { useCookieBanner } from '@/contexts/CookieConsentContext';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { openBanner } = useCookieBanner();
  const { t } = useLanguage();

  const handleCookieButtonClick = () => {
    openBanner();
  };

  return (
    <>
      <div className='w-full p-2 flex flex-col justify-center gap-12 text-white bg-black py-12 text-center'>
        <h1 className='text-2xl md:text-8xl font-header'>
          {t('footer_title')}
        </h1>

        <div className='flex gap-2 md:gap-[16px] justify-center'>
          <Socials />
        </div>

        <div className='flex flex-col gap-3'>
          <p>
            © {new Date().getFullYear()} - DJ DINOX - {t('footer_designed_by')}{' '}
            <UnderlineLink
              className=''
              href='https://www.linkedin.com/in/jorislodewijks/'
            >
              Joris Lodewijks
            </UnderlineLink>
          </p>
          <div className=''>
            <UnderlineLink href='/privacy'>{t('footer_privacy')}</UnderlineLink>
            {' | '}
            <UnderlineLink href='/privacy'>{t('footer_terms')}</UnderlineLink>
            {' | '}
            <UnderlineLink href='/privacy'>{t('footer_cookies')}</UnderlineLink>
          </div>
          <p>
            <UnderlineLink href='#cookies' onClick={handleCookieButtonClick}>
              {t('footer_cookie_settings')}
            </UnderlineLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
