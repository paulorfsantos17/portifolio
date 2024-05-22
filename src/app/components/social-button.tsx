import { LinkHTMLAttributes } from 'react'

interface SocialButtonProps extends LinkHTMLAttributes<HTMLLinkElement> {
  icon: React.ReactNode
}
export default function SocialButton({ icon }: SocialButtonProps) {
  return (
    <a className="flex h-16 w-16 items-center justify-center rounded-full border-opacity-0  bg-primary-light">
      {icon}
    </a>
  )
}
