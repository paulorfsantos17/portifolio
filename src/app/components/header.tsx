'use client'
import Image from 'next/image'
import { MouseEvent, useCallback, useEffect, useState } from 'react'
import { LuX } from 'react-icons/lu'

import Logo from '@/app/assets/logo.svg'

import { useScroll } from '../hooks/useScroll'
import { LinkNav } from './LinkNav'

type linkType = 'about' | 'projects' | 'abilities'

export default function Header() {
  const [isClosedNav, setIsclosedNav] = useState<boolean>(true)
  const [activeLink, setActiveLink] = useState<linkType>('about')
  const { scrollPosition: scrollY } = useScroll()

  const stylesNavMobile =
    'fixed right-0 top-0 z-50 flex h-full w-[60%] flex-col items-center gap-8 bg-slate-900 pt-8 text-xl slide-in-from-right animate-in duration-500'

  function handleSetClosedNav() {
    setIsclosedNav(!isClosedNav)
  }

  const ScrollActiveLink = useCallback(() => {
    const projectsPosition = document
      .getElementById('projects')
      ?.getBoundingClientRect().top as number

    const abilitiesPosition = document
      .getElementById('abilities')
      ?.getBoundingClientRect().top as number

    if (scrollY > 0 && projectsPosition > 0) {
      setActiveLink('about')
    }

    if (projectsPosition < 350 && abilitiesPosition > 0) {
      setActiveLink('projects')
    }

    if (abilitiesPosition < 350) {
      setActiveLink('abilities')
    }
  }, [scrollY])

  useEffect(() => {
    ScrollActiveLink()
  }, [ScrollActiveLink])

  return (
    <>
      <nav className={isClosedNav ? 'hidden' : stylesNavMobile}>
        <a onClick={handleSetClosedNav} className="mr-4  self-end ">
          <LuX className="h-8 w-8" />
        </a>
        <LinkNav
          title="Sobre"
          idElement="about"
          active={activeLink === 'about'}
        />
        <LinkNav
          title="Projetos"
          idElement="projects"
          active={activeLink === 'projects'}
        />
        <LinkNav
          title="Habilidades"
          idElement="abilities"
          active={activeLink === 'abilities'}
        />
      </nav>
      <header className="fixed top-0 z-40  flex min-h-20 min-w-full flex-col gap-2 border-b border-b-primary-light/30 bg-background px-14 py-4 shadow shadow-primary-light/30">
        <div className="flex w-full items-center justify-between">
          <Image
            src={Logo}
            alt="Dev Paulo Logo"
            width={215}
            height={65}
            className="sm:h-12"
          />
          <button
            onClick={handleSetClosedNav}
            className="flex h-14 w-14 flex-col items-center justify-center gap-3  sm:hidden"
          >
            <div className="h-1 w-full rounded-md bg-primary-light"></div>
            <div className="h-1 w-full rounded-md bg-primary-light"></div>
            <div className="h-1 w-full rounded-md bg-primary-light"></div>
          </button>

          <nav className="hidden gap-8 sm:flex">
            <LinkNav
              title="Sobre"
              idElement="about"
              active={activeLink === 'about'}
            />
            <LinkNav
              title="Projetos"
              idElement="projects"
              active={activeLink === 'projects'}
            />
            <LinkNav
              title="Habilidades"
              idElement="abilities"
              active={activeLink === 'abilities'}
            />
          </nav>
        </div>
      </header>
    </>
  )
}
