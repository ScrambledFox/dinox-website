'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

import { useCookieBanner } from '@/contexts/CookieConsentContext';

export default function CookieConsent() {
  const { showBanner, openBanner, closeBanner, setConsent } = useCookieBanner();

  useEffect(() => {
    const consentCookie = Cookies.get('cookieConsent');

    if (!consentCookie) {
      openBanner();
    }
  }, [openBanner]);

  const handleAccept = () => {
    closeBanner();
    setConsent(true);
    Cookies.set('cookieConsent', 'accepted', { expires: 365 });
  };

  const handleDecline = () => {
    closeBanner();
    setConsent(false);
    Cookies.set('cookieConsent', 'rejected', { expires: 365 });
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className='fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-50'
        >
          <div className='bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl text-white'>
            <p className='font-header text-lg mb-1'>Cookies</p>
            <p className='text-sm text-white/70 mb-4 font-primary'>
              We use cookies to improve your experience and analyse site usage.{' '}
              <a href='/privacy' className='text-primary-400 hover:underline'>
                Learn more
              </a>
            </p>
            <div className='flex gap-2'>
              <button
                onClick={handleDecline}
                className='flex-1 px-4 py-2 rounded-lg text-sm font-medium border border-white/20 text-white/70 hover:border-white/40 hover:text-white transition-colors duration-150'
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className='flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-primary-500 hover:bg-primary-600 text-white transition-colors duration-150'
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
