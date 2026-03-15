'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import translations, {
  type Locale,
  type TranslationKey,
} from '@/i18n/translations';

interface LanguageContextValue {
  locale: Locale;
  toggle: () => void;
  t: (key: TranslationKey) => string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'en',
  toggle: noop,
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const stored = localStorage.getItem('locale') as Locale | null;
    if (stored === 'en' || stored === 'nl') {
      setLocale(stored);
    }
  }, []);

  const toggle = useCallback(() => {
    setLocale((prev) => {
      const next: Locale = prev === 'en' ? 'nl' : 'en';
      localStorage.setItem('locale', next);
      return next;
    });
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[locale][key] as string;
    },
    [locale],
  );

  return (
    <LanguageContext.Provider value={{ locale, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
