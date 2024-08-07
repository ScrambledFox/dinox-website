

interface HeaderProps {
  text: string;
  className?: string;
}

export default function Header({ text, className }: HeaderProps) {
  return (
    <h1 className={`${className} text-8xl font-header text-white font-thin uppercase drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)]`}>{text}</h1>
  )
}