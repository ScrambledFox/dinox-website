interface HeaderProps {
  text: string;
  className?: string;
}

export default function Header({ text, className }: HeaderProps) {
  return (
    <h1
      className={`${className} font-header text-white text-4xl font-thin uppercase drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)] md:text-8xl`}
    >
      {text}
    </h1>
  );
}
