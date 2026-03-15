'use client';

import Cookies from 'js-cookie';
import { createContext, useContext, useState } from 'react';

const CookieBannerContext = createContext({
  showBanner: false,
  consentGiven: false,
  openBanner: () => {
    return;
  },
  closeBanner: () => {
    return;
  },
  setConsent: (_accepted: boolean) => {
    return;
  },
});

export const useCookieBanner = () => useContext(CookieBannerContext);

export default function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showBanner, setShowBanner] = useState(false);
  const [consentGiven, setConsentGiven] = useState(
    Cookies.get('cookieConsent') === 'accepted'
  );

  const openBanner = () => setShowBanner(true);
  const closeBanner = () => setShowBanner(false);
  const setConsent = (accepted: boolean) => setConsentGiven(accepted);

  return (
    <CookieBannerContext.Provider
      value={{ showBanner, consentGiven, openBanner, closeBanner, setConsent }}
    >
      {children}
    </CookieBannerContext.Provider>
  );
}
