interface CardAbilityProps {
  onHover: (description: string) => void
  description: string
  icon: React.ReactNode
}

export default function CardAbility({
  onHover,
  description,
  icon,
}: CardAbilityProps) {
  return (
    <div
      className={`flex min-h-20 min-w-20 max-w-36 cursor-pointer items-center justify-center
        rounded-lg border-2  border-primary-light text-primary  ease-out hover:border-none
      hover:bg-primary 
      hover:text-slate-300 hover:delay-0 hover:duration-300 md:h-36
      `}
      onMouseOver={() => onHover(description)}
    >
      {icon}
    </div>
  )
}
