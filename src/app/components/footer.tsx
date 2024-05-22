import Image from 'next/image'

import Logo from '@/app/assets/logo.svg'

export default function Footer() {
  return (
    <footer className="mx-14 my-4 flex min-h-20 flex-col  sm:flex-row sm:items-center sm:justify-around">
      <p className="w-full text-center text-slate-200">
        Copyright © 2024 <span className="text-primary">devpaulo.com</span>.
        Todos os direitos reservados
      </p>
      <div className="flex w-full items-center justify-center gap-8 sm:justify-end  ">
        <p className="text-slate-200">Powered by</p>
        <Image src={Logo} alt="Logo" className="h-20 w-32 md:w-40" />
      </div>
    </footer>
  )
}
