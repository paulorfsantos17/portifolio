import Image from 'next/image'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

import Avatar from '@/app/assets/avatar.png'

import SocialButton from './social-button'
export default function About() {
  return (
    <main
      className="my-12 flex max-w-full flex-col items-center justify-center gap-12 sm:mx-12  sm:mt-48 sm:grid sm:grid-cols-2"
      id="about"
    >
      <div className="flex flex-col gap-12 px-4 sm:gap-8 sm:duration-500 sm:ease-linear sm:animate-in sm:fade-in sm:slide-in-from-left ">
        <h1
          className="inline-block bg-gradient-to-r from-secondary-light via-primary-light to-primary 
          bg-clip-text text-center font-ultralife text-4xl 
          font-bold uppercase text-transparent sm:text-left sm:text-6xl"
        >
          Desenvolvedor Web
        </h1>

        <p className="text-center text-slate-200 sm:text-start">
          Sou Paulo Santos, desenvolvedor web apaixonado por tecnologia desde os
          14 anos. Formado como técnico de informática e cursando Análise e
          Desenvolvimento de Sistemas, estou sempre buscando novos conhecimentos
          para aprimorar minhas habilidades. Trabalho em projetos pessoais que
          me desafiam e permitem crescer profissionalmente. Estou animado para
          contribuir com soluções criativas e eficientes no desenvolvimento web.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 sm:mt-4">
        <Image
          src={Avatar}
          alt=""
          width={200}
          height={200}
          quality={80}
          className="h-max-[260] sm:max-w-[180px] sm:duration-700 sm:animate-in sm:fade-in sm:zoom-in-50"
        />

        <nav className="flex h-20 w-full justify-center gap-16 sm:delay-200 sm:duration-700 sm:animate-in sm:fade-in-5 sm:zoom-in">
          <SocialButton
            arialLabel="WhatsApp do Dev Paulo"
            href="https://wa.me/5535992477926?text=Ol%C3%A1+Paulo%2C+vi+seu+perfil+no+seu+site%2C+estou+interessado+no+seus+servi%C3%A7o."
            icon={<FaWhatsapp className="h-8 w-8" />}
            title="Whatsapp"
          />
          <SocialButton
            arialLabel="Linkedin WhatsApp do Dev Paulo"
            href="https://www.linkedin.com/in/paulosantosdesenvolvedor/"
            icon={<FaLinkedinIn className="h-8 w-8" />}
            title="Linkedin"
          />
          <SocialButton
            arialLabel="Github WhatsApp do Dev Paulo"
            href="https://github.com/paulorfsantos17"
            icon={<FaGithub className="h-8 w-8" />}
            title="GitHub"
          />
        </nav>
      </div>
    </main>
  )
}
