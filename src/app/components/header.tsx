import Image from "next/image";
import Logo from '@/app/assets/logo.svg'

export default function Header() {
  return (
    <header className="flex justify-around items-center max-h-20   my-4 mx-14 sm:my-2">
      <Image src={Logo} alt="Dev Paulo Logo" width={215} height={65} className="sm:h-8"/>
      <button className="flex flex-col justify-between items-center w-14 h-14  sm:hidden">
        <div className="h-2 w-full bg-primary-light rounded-md"></div>
        <div className="h-2 w-full bg-primary-light rounded-md"></div>
        <div className="h-2 w-full bg-primary-light rounded-md"></div>
      </button>

      <nav className="hidden sm:flex gap-8">
        <a href="" className="font-bold text-md active:text-slate-200">Sobre</a>
        <a href="" className="font-bold text-md text-slate-600">Projetos</a>
        <a href="" className="font-bold text-md  text-slate-600">Habilidates</a>
      </nav>
    </header>
  )
}
