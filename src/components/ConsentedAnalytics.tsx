'use client';

import { Analytics } from '@vercel/analytics/react';

import { useCookieBanner } from '@/contexts/CookieConsentContext';

export default function ConsentedAnalytics() {
  const { consentGiven } = useCookieBanner();

  if (!consentGiven) return null;

  return <Analytics />;
}
