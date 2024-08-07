
interface SubheaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function Subheader({ children, className }: SubheaderProps) {
  return (
    <h2 className={`text-2xl font-primary font-thin text-white ${className}`}>{children}</h2>
  )
}
