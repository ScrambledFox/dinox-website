'use client';

import Markdown from 'react-markdown';

import { useLanguage } from '@/contexts/LanguageContext';

interface PrivacyContentProps {
  en: string;
  nl: string;
}

export default function PrivacyContent({ en, nl }: PrivacyContentProps) {
  const { locale } = useLanguage();
  const content = locale === 'nl' ? nl : en;

  return (
    <div className='container flex flex-row justify-center items-center pb-32'>
      <div className='text-left md:w-[50%] mx-4'>
        <Markdown
          components={{
            h1: ({ children }) => (
              <h1 className='text-3xl font-bold mb-2'>{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className='text-2xl font-bold mb-2'>{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className='text-xl font-bold '>{children}</h3>
            ),
            p: ({ children }) => <p className='text-lg mb-2'>{children}</p>,
            ul: ({ children }) => (
              <ul className='list-disc list-inside'>{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className='list-decimal list-inside'>{children}</ol>
            ),
            li: ({ children }) => <li className='text-lg'>{children}</li>,
            a: ({ children, href }) => (
              <a
                className='text-blue-500 hover:underline'
                href={href as string}
              >
                {children}
              </a>
            ),
          }}
        >
          {content}
        </Markdown>
      </div>
    </div>
  );
}
