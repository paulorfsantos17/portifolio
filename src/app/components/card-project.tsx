import Image from 'next/image'

interface CardProjectProps {
  name: string
  description: string
  imageUrl: string
  url: string
}

export default function CardProject({
  description,
  imageUrl,
  name,
  url,
}: CardProjectProps) {
  return (
    <a
      aria-label={description}
      target="_blank"
      href={url}
      className="r relative  flex h-96 min-w-[16rem] max-w-[18rem] cursor-pointer flex-col items-center
        gap-6  rounded-xl  border-[1px]  border-slate-200/20 shadow-sm shadow-slate-200/20  hover:scale-110  hover:duration-200 hover:ease-in-out"
    >
      <div
        className="absolute  h-full w-full 
        bg-gradient-to-b from-primary-light
        to-secondary-light 
        opacity-20 blur-sm 
        "
      ></div>

      <Image
        width={210}
        quality={40}
        height={100}
        src={imageUrl}
        alt=""
        className="min-h-30  mt-4 w-[80%] rounded-xl"
      />

      <div className="w-[80%] space-y-3">
        <h3 className="text-2xl font-bold text-slate-200">{name}</h3>

        <p className="text-slate-500 ">{description}</p>
      </div>
    </a>
  )
}
