import SVGInject from '@iconfu/svg-inject'

interface CardAbilityProps {
  onHover: (description: string) => void
  description: string
  icon: React.ReactNode | string
}

export default function CardAbility({
  onHover,
  description,
  icon,
}: CardAbilityProps) {
  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    // Assuming SVGInject is a global function
    SVGInject(event.target as SVGSVGElement)
  }

  return (
    <div
      className={`flex min-h-20 min-w-20 max-w-36 cursor-pointer items-center justify-center
        rounded-lg border-2  border-primary-light text-primary  ease-out hover:border-none
      hover:bg-primary 
      hover:text-slate-300 hover:delay-0 hover:duration-300 md:h-36
      `}
      onMouseOver={() => onHover(description)}
    >
      {typeof icon === 'string' ? (
        // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
        <img
          onLoad={handleImageLoad}
          src={icon}
          alt=""
          className="h-2/3 w-2/3"
        />
      ) : (
        icon
      )}
    </div>
  )
}
