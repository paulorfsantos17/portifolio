import { LinkHTMLAttributes } from 'react'

interface SocialButtonProps extends LinkHTMLAttributes<HTMLLinkElement> {
  icon: React.ReactNode
  arialLabel: string
  href: string
}
export default function SocialButton({
  icon,
  href,
  arialLabel,
}: SocialButtonProps) {
  return (
    <a
      aria-label={arialLabel}
      href={href}
      target="_blank"
      className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-opacity-0  bg-primary-light
      text-slate-200 duration-100 ease-in hover:border-2 hover:border-primary-light hover:bg-transparent hover:text-primary-light"
    >
      {icon}
    </a>
  )
}
