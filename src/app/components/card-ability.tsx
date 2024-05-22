import { FaHtml5 } from 'react-icons/fa'

export default function CardAbility() {
  return (
    <div
      className=" flex  min-h-20 min-w-20 max-w-36 cursor-pointer items-center justify-center rounded-lg border-2
      border-primary-light text-primary  duration-300 ease-out hover:border-none hover:bg-primary hover:text-slate-300
      md:h-36"
    >
      <FaHtml5 className="h-2/3 w-2/3 " />
    </div>
  )
}
