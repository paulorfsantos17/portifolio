import Image from 'next/image'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

import Avatar from '@/app/assets/avatar.png'

import SocialButton from './social-button'
export default function About() {
  return (
    <main
      className="my-24 mb-12 flex max-w-full flex-col items-center justify-center gap-12  sm:mx-12 sm:grid sm:grid-cols-2"
      id="about"
    >
      <div className=" animate-in fade-in slide-in-from-left flex flex-col gap-12 px-4 duration-500 ease-linear sm:gap-8 ">
        <h1
          className="inline-block bg-gradient-to-r from-secondary-light via-primary-light to-primary 
          bg-clip-text text-center font-ultralife text-4xl 
          font-bold uppercase text-transparent sm:text-left sm:text-6xl"
        >
          Desenvolvedor Web
        </h1>

        <p className="text-center text-slate-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non
          feugiat eros. Nam malesuada placerat mi, vel finibus eros malesuada
          et. Duis ultrices sit amet orci non congue. Cras pellentesque lectus
          ac magna vulputate, quis convallis nisi lobortis.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 sm:mt-4">
        <Image
          src={Avatar}
          alt=""
          width={200}
          height={200}
          quality={80}
          className="h-max-[260] animate-in fade-in zoom-in-50 duration-700 sm:max-w-[180px]"
        />

        <nav className="animate-in fade-in-5 zoom-in flex h-20 w-full justify-center gap-16 delay-200 duration-700">
          <SocialButton
            icon={<FaWhatsapp className="h-8 w-8" />}
            title="Whatsapp"
          />
          <SocialButton
            icon={<FaLinkedinIn className="h-8 w-8" />}
            title="Linkedin"
          />
          <SocialButton
            icon={<FaGithub className="h-8 w-8" />}
            title="GitHub"
          />
        </nav>
      </div>
    </main>
  )
}
