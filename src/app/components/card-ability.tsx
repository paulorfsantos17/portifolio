import { FaHtml5 } from 'react-icons/fa'

export default function CardAbility() {
  return (
    <div
      className={`taos:[transform:translate3d(0,-200px,0)_scale(0.6)]  taos:opacity-0 flex min-h-20 min-w-20 max-w-36 cursor-pointer items-center justify-center
      rounded-lg border-2  border-primary-light text-primary delay-[300ms] duration-[600ms] ease-out hover:border-none
      hover:bg-primary 
      hover:text-slate-300 hover:delay-0 hover:duration-300 md:h-36
      `}
      data-taos-offset="600"
    >
      <FaHtml5 className="h-2/3 w-2/3 " />
    </div>
  )
}
