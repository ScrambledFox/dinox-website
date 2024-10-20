'use client';

import { createContext, useContext, useState } from 'react';

const CookieBannerContext = createContext({
  showBanner: false,
  openBanner: () => {
    return;
  },
  closeBanner: () => {
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

  const openBanner = () => setShowBanner(true);
  const closeBanner = () => setShowBanner(false);

  return (
    <CookieBannerContext.Provider
      value={{ showBanner, openBanner, closeBanner }}
    >
      {children}
    </CookieBannerContext.Provider>
  );
}
