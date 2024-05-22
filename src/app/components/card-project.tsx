import Image from 'next/image'

import Project from '@/app/assets/project.png'

export default function CardProject() {
  return (
    <div
      className="relative flex  h-96 min-w-[16rem] max-w-[18rem] cursor-pointer flex-col items-center
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
        src={Project}
        alt="0"
        className="min-h-30  mt-4 w-[80%] rounded-xl"
      />

      <div className="w-[80%] space-y-3">
        <h3 className="text-2xl font-bold text-slate-200">Nome do Projeto</h3>

        <p className="text-slate-500 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          dignissim libero et est volutpat , sit amet tincidunt justo feugiat.
          Donec elementum, arcu ut interdum pretium.
        </p>
      </div>
    </div>
  )
}
