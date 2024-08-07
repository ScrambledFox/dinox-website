import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaSoundcloud } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { ImInstagram } from 'react-icons/im';

type SocialIconType =
  | 'instagram'
  | 'facebook'
  | 'youtube'
  | 'soundcloud'
  | 'spotify'
  | 'email';

interface SocialIconProps {
  icon: SocialIconType;
  size: number;
  colour: string;
  src: string;
  alt: string;
}

const SocialIcon = ({ src, icon, ...props }: SocialIconProps) => {
  return (
    <a
      href={src}
      className='bg-white p-2 rounded-md hover:scale-110 transition-all duration-150'
    >
      {icon === 'instagram' && (
        <ImInstagram size={props.size} color={props.colour} />
      )}
      {icon === 'facebook' && (
        <FaFacebook size={props.size} color={props.colour} />
      )}
      {icon === 'youtube' && (
        <FaYoutube size={props.size} color={props.colour} />
      )}
      {icon === 'soundcloud' && (
        <FaSoundcloud size={props.size} color={props.colour} />
      )}
      {icon === 'spotify' && (
        <FaSpotify size={props.size} color={props.colour} />
      )}
      {icon === 'email' && (
        <HiOutlineMail size={props.size} color={props.colour} />
      )}
    </a>
  );
};

const Socials = () => {
  return (
    <>
      <SocialIcon
        icon='instagram'
        src='https://instagram.com'
        alt='Instagram'
        size={24}
        colour='black'
      />
      <SocialIcon
        icon='facebook'
        src='https://facebook.com'
        alt='Facebook'
        colour='black'
        size={24}
      />
      <SocialIcon
        icon='youtube'
        src='https://youtube.com'
        alt='Youtube'
        colour='black'
        size={24}
      />
      <SocialIcon
        icon='soundcloud'
        src='https://soundcloud.com'
        alt='Soundcloud'
        colour='black'
        size={24}
      />
      <SocialIcon
        icon='spotify'
        src='https://spotify.com'
        alt='Spotify'
        colour='black'
        size={24}
      />
      <SocialIcon
        icon='email'
        src='mailto:info@djdinox.nl'
        alt='email'
        colour='black'
        size={24}
      />
    </>
  );
};

export default Socials;
