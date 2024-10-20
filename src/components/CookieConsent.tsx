'use client';

import Cookies from 'js-cookie';
import { useEffect } from 'react';

import { useCookieBanner } from '@/contexts/CookieConsentContext';

export default function CookieConsent() {
  const { showBanner, openBanner, closeBanner } = useCookieBanner();

  useEffect(() => {
    const consentCookie = Cookies.get('cookieConsent');

    if (!consentCookie) {
      openBanner();
    }
  }, [openBanner]);

  const handleAccept = () => {
    closeBanner();
    Cookies.set('cookieConsent', 'accepted', { expires: 365 });
  };

  const handleDecline = () => {
    closeBanner();
    Cookies.set('cookieConsent', 'rejected', { expires: 365 });
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div>
      <div className='fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200'>
        <p className='text-sm text-gray-600'>
          We use cookies to ensure you get the best experience on our website.
          By continuing, you agree to our use of cookies.
        </p>
        <div className='flex justify-end mt-2'>
          <button
            onClick={handleAccept}
            className='text-white bg-green-800 px-4 py-2 rounded-lg mr-2'
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className='text-white bg-gray-400 px-4 py-2 rounded-lg'
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
