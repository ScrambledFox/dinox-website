import Socials from '@/components/Socials';
import UnderlineLink from '@/components/links/UnderlineLink';

const Footer = () => {
  return (
    <>
      <div className='w-full flex flex-col justify-center gap-12 text-white bg-black py-12 text-center px-8'>
        <h1 className='text-8xl font-header'>DJ & PRODUCER DINOX</h1>

        <div className='flex gap-[16px] justify-center'>
          <Socials />
        </div>

        <div className='flex flex-col gap-3'>
          <p>
            © {new Date().getFullYear()} - DJ DINOX - Designed by{' '}
            <UnderlineLink
              className=''
              href='https://www.linkedin.com/in/jorislodewijks/'
            >
              Joris Lodewijks
            </UnderlineLink>
          </p>
          <div className=''>
            <UnderlineLink href='#'>Privacy Policy</UnderlineLink>
            {' | '}
            <UnderlineLink href='#'>Terms of Service</UnderlineLink>
            {' | '}
            <UnderlineLink href='#'>Cookies Policy</UnderlineLink>
          </div>
          <p>
            <UnderlineLink href='#'>Cookies Settings</UnderlineLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
