'use client';

import { FaFacebook, FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { ImInstagram } from 'react-icons/im';

import Header from '@/components/Header';
import SpotifyEmbed from '@/components/Spotify';
import Subheader from '@/components/Subheader';

import { useLanguage } from '@/contexts/LanguageContext';
import { type TranslationKey } from '@/i18n/translations';

interface Platform {
  label: string;
  handle: string;
  descKey: TranslationKey;
  href: string;
  icon: React.ElementType;
}

const platforms: Platform[] = [
  {
    label: 'Instagram',
    handle: '@dj_dinox',
    descKey: 'socials_instagram_desc',
    href: 'https://www.instagram.com/dj_dinox?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    icon: ImInstagram,
  },
  {
    label: 'SoundCloud',
    handle: 'djdinox',
    descKey: 'socials_soundcloud_desc',
    href: 'https://soundcloud.com/djdinox',
    icon: FaSoundcloud,
  },
  {
    label: 'YouTube',
    handle: '@OfficialDJDinox',
    descKey: 'socials_youtube_desc',
    href: 'https://www.youtube.com/@OfficialDJDinox',
    icon: FaYoutube,
  },
  {
    label: 'Spotify',
    handle: 'DJ Dinox',
    descKey: 'socials_spotify_desc',
    href: 'https://open.spotify.com/artist/0EtonsnDHhrEeh0UFjA7s0?si=jLAHZRyFRnGJ22X47ZtbKw',
    icon: FaSpotify,
  },
  {
    label: 'Facebook',
    handle: 'DJ Dinox',
    descKey: 'socials_facebook_desc',
    href: 'https://www.facebook.com/profile.php?id=100089763421041',
    icon: FaFacebook,
  },
  {
    label: 'Email',
    handle: 'info@djdinox.nl',
    descKey: 'socials_email_desc',
    href: 'mailto:info@djdinox.nl',
    icon: HiOutlineMail,
  },
];

export default function SocialsContent() {
  const { t } = useLanguage();

  return (
    <div className='flex flex-col justify-center items-center mb-16'>
      {/* Header */}
      <div className='container mb-10 px-2 text-center'>
        <Header text={t('socials_header')} className='mb-6' />
        <div className='w-full flex flex-row justify-center'>
          <Subheader className='p-4 md:w-[60%]'>
            {t('socials_subheader')}
          </Subheader>
        </div>
      </div>

      {/* Platform grid */}
      <div className='px-4 w-full max-w-2xl mb-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          {platforms.map(({ label, handle, descKey, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-4 transition-all duration-150 group'
            >
              <div className='flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 group-hover:bg-primary-500/20 transition-colors duration-150'>
                <Icon
                  size={22}
                  className='text-white/70 group-hover:text-primary-400 transition-colors duration-150'
                />
              </div>
              <div className='text-left min-w-0'>
                <p className='text-white font-primary font-bold text-sm leading-tight truncate'>
                  {label}
                </p>
                <p className='text-white/50 text-xs font-primary truncate'>
                  {handle}
                </p>
                <p className='text-white/40 text-xs font-primary truncate'>
                  {t(descKey)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Spotify embed */}
      <div className='px-4 w-full md:w-[50%]'>
        <SpotifyEmbed />
      </div>
    </div>
  );
}
