'use client'

import Image from 'next/image'
import ScrollAnimation from 'react-animate-on-scroll'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

import Avatar from '@/app/assets/avatar.png'

import SocialButton from './social-button'
export default function About() {
  return (
    <main className="mx-8 my-24 mb-12 flex flex-col items-center gap-12 bg-particles-mobile sm:mx-12 sm:grid sm:grid-cols-2">
      <ScrollAnimation animateIn="animate__fadeInRight" duration={0.5}>
        <div className=" flex flex-col gap-12 sm:gap-8">
          <h1
            className="inline-block bg-gradient-to-r from-secondary-light via-primary-light to-primary 
          bg-clip-text text-center font-ultralife text-4xl 
          font-bold uppercase text-transparent sm:text-left sm:text-6xl"
          >
            Desenvolvedor Web
          </h1>

          <p className="text-slate-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            non feugiat eros. Nam malesuada placerat mi, vel finibus eros
            malesuada et. Duis ultrices sit amet orci non congue. Cras
            pellentesque lectus ac magna vulputate, quis convallis nisi
            lobortis.
          </p>
        </div>
      </ScrollAnimation>

      <div className="flex flex-col items-center justify-center gap-8 ">
        <Image
          src={Avatar}
          alt=""
          width={260}
          className="h-max-[260] sm:max-w-[180px]"
        />

        <nav className="flex h-20 w-full justify-center gap-16">
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
