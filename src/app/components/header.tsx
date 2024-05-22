import Image from 'next/image'

import Logo from '@/app/assets/logo.svg'

export default function Header() {
  return (
    <header className="mx-14 my-4 flex max-h-20   items-center justify-between sm:my-4">
      <Image
        src={Logo}
        alt="Dev Paulo Logo"
        width={215}
        height={65}
        className="sm:h-12"
      />
      <button className="flex h-14 w-14 flex-col items-center justify-between  sm:hidden">
        <div className="h-2 w-full rounded-md bg-primary-light"></div>
        <div className="h-2 w-full rounded-md bg-primary-light"></div>
        <div className="h-2 w-full rounded-md bg-primary-light"></div>
      </button>

      <nav className="hidden gap-8 sm:flex">
        <a
          href=""
          className="text-md font-bold active:text-slate-200 sm:text-xl"
        >
          Sobre
        </a>
        <a href="" className="text-md font-bold text-slate-600  sm:text-xl">
          Projetos
        </a>
        <a href="" className="text-md font-bold  text-slate-600  sm:text-xl">
          Habilidates
        </a>
      </nav>
    </header>
  )
}
