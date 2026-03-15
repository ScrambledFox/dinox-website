'use client';

import AboutBlock from '@/components/AboutBlock';
import Header from '@/components/Header';
import PromoVideo from '@/components/PromoVideo';
import SpotifyEmbed from '@/components/Spotify';
import Subheader from '@/components/Subheader';
import UnopinionatedAboutBlock from '@/components/UnopinionatedAboutBlock';

import { useLanguage } from '@/contexts/LanguageContext';
import useAge from '@/utils/useAge';

import dinoxFrontImage from '/public/images/dinox-front.png';
import djImage from '/public/images/dj.png';
import famousImage from '/public/images/famous.jpg';
import flStudioImage from '/public/images/fl-studio.png';
import studioImage from '/public/images/studio.png';
import workingImage from '/public/images/working.png';

export default function AboutContent() {
  const { t } = useLanguage();
  const dinoxAge = useAge(new Date('1997-09-28'));

  return (
    <main className='flex flex-col justify-center items-center'>
      <div className='max-w-[1000px] mb-16 mx-2'>
        <Header text={t('about_header')} className='mb-12' />
        <Subheader>{t('about_subheader')}</Subheader>
      </div>

      <div className='md:text-lg'>
        <AboutBlock
          title={t('about_bio_title')}
          coverImage={workingImage}
          textImage={dinoxFrontImage}
          priority
        >
          <p>{t('about_bio_p1').replace('{age}', String(dinoxAge))}</p>
          <br />
          <p>{t('about_bio_p2')}</p>
          <br />
          <p>{t('about_bio_p3')}</p>
        </AboutBlock>

        <UnopinionatedAboutBlock
          title={t('about_producer_title')}
          coverImage={flStudioImage}
          sideElement={<SpotifyEmbed />}
        >
          <p>{t('about_producer_p1')}</p>
          <br />
          <p>{t('about_producer_p2')}</p>
          <br />
          <p>
            {t('about_producer_p3').split('Don\u2019t Stop Running').map((part, i) =>
              i === 0 ? (
                <span key={i}>{part}<em>Don&apos;t Stop Running</em></span>
              ) : (
                <span key={i}>
                  {part.split('Multiverse').map((sub, j) =>
                    j === 0 ? (
                      <span key={j}>{sub}<em>Multiverse</em></span>
                    ) : (
                      <span key={j}>{sub}</span>
                    )
                  )}
                </span>
              )
            )}
          </p>
        </UnopinionatedAboutBlock>

        <AboutBlock title={t('about_dj_title')} coverImage={djImage} textImage={famousImage}>
          <p>{t('about_dj_p1')}</p>
          <br />
          <p>{t('about_dj_p2')}</p>
          <br />
          <p>{t('about_dj_p3')}</p>
        </AboutBlock>

        <UnopinionatedAboutBlock
          title={t('about_preview_title')}
          coverImage={studioImage}
          sideElement={<PromoVideo />}
        >
          <h2 className='text-center font-header text-2xl md:text-4xl'>
            {t('about_preview_tagline')}
          </h2>
          <br />
          <p>
            {t('about_preview_cta').split('{link}')[0]}
            <a
              href='/booking'
              className='text-primary-400 underline underline-offset-2 hover:text-primary-300 transition-colors'
            >
              {t('about_preview_link')}
            </a>
            {t('about_preview_cta').split('{link}')[1]}
          </p>
        </UnopinionatedAboutBlock>
      </div>
    </main>
  );
}
