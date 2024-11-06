export default function SpotifyEmbed() {
  return (
    <iframe
      src='https://open.spotify.com/embed/artist/0EtonsnDHhrEeh0UFjA7s0?utm_source=oembed'
      className='w-full h-[400px] '
      allowFullScreen
      allow='clipboard-write; encrypted-media; fullscreen; picture-in-picture;'
    ></iframe>
  );
}
