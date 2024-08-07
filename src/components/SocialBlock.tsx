

interface SocialBlockProps {
  children?: React.ReactNode;
  className?: string;
  borderOneColour?: string;
  borderTwoColour?: string;
}


export default function SocialBlock({ children, className, borderOneColour = "green", borderTwoColour = "black" }: SocialBlockProps) {

  return <div className={`${className} border-[16px] bg-[${borderOneColour}] border-[${borderOneColour}] rounded-lg`}>
    <div className={`border-[16px] border-[${borderTwoColour}] rounded-lg`}>
      {children}
    </div>
  </div>
}